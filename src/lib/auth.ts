import { apiRequest } from "@/lib/api";

export type UserRole =
  | "public_user"
  | "advocate_user"
  | "partner_user"
  | "admin"
  | "super_admin"
  | "content_admin"
  | "integration_admin"
  | "analytics_viewer";

export type UserStatus = "active" | "inactive" | "suspended" | "deleted";

export interface SafeSpeakUser {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  status: UserStatus;
  isEmailVerified: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthData {
  user: SafeSpeakUser;
  tokens: AuthTokens;
}

export interface AuthSession extends AuthData {
  timestamp: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export type RegisterInput = LoginInput;

export interface AuthOptions {
  baseUrl?: string;
  persistSession?: boolean;
}

export type SocialAuthProvider = "google" | "facebook" | "apple";

const AUTH_SESSION_KEY = "safespeak_auth_session";

function getStorage(persistSession: boolean): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  return persistSession ? window.localStorage : window.sessionStorage;
}

export function saveAuthSession(session: AuthSession, persistSession = true): void {
  const storage = getStorage(persistSession);

  if (!storage) {
    return;
  }

  clearAuthSession();
  storage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
}

export function getAuthSession(): AuthSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw =
    window.sessionStorage.getItem(AUTH_SESSION_KEY) ??
    window.localStorage.getItem(AUTH_SESSION_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    clearAuthSession();
    return null;
  }
}

export function clearAuthSession(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_SESSION_KEY);
  window.sessionStorage.removeItem(AUTH_SESSION_KEY);
}

function persistAuthData(data: AuthData, options: AuthOptions, timestamp?: string): AuthSession {
  const session = {
    ...data,
    timestamp: timestamp ?? new Date().toISOString(),
  };

  saveAuthSession(session, options.persistSession ?? true);
  return session;
}

export async function loginUser(
  input: LoginInput,
  options: AuthOptions = {}
): Promise<AuthData> {
  const response = await apiRequest<AuthData>("/auth/login", {
    method: "POST",
    body: input,
    baseUrl: options.baseUrl,
  });

  persistAuthData(response.data, options, response.timestamp);
  return response.data;
}

export async function registerUser(
  input: RegisterInput,
  options: AuthOptions = {}
): Promise<AuthData> {
  const response = await apiRequest<AuthData>("/auth/register", {
    method: "POST",
    body: input,
    baseUrl: options.baseUrl,
  });

  persistAuthData(response.data, options, response.timestamp);
  return response.data;
}

export async function startSocialAuth(provider: SocialAuthProvider): Promise<void> {
  // Placeholder flow so UI wiring is ready before OAuth providers are connected.
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 400);
  });

  void provider;
}
