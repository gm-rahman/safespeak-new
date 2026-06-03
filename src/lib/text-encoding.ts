const MOJIBAKE_PATTERNS = [
  /αª/u,
  /à¦/u,
  /à§/u,
  /ΓÇ/u,
  /�{2,}/u,
];

export function hasBrokenTextEncoding(value: string): boolean {
  return MOJIBAKE_PATTERNS.some((pattern) => pattern.test(value));
}

export function buildUtf8JsonHeaders(
  headers?: HeadersInit
): Headers {
  const normalizedHeaders = new Headers(headers);
  normalizedHeaders.set("Content-Type", "application/json; charset=utf-8");
  normalizedHeaders.set("Accept", "application/json; charset=utf-8");

  return normalizedHeaders;
}

export function buildConversationRequestBody(input: {
  content: string;
  language?: string;
}): string {
  return JSON.stringify({
    content: input.content,
    language: input.language,
  });
}
