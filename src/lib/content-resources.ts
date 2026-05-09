import { apiRequest, getApiBaseUrl } from "@/lib/api";

export type ContentResourceStatus = "draft" | "published" | "archived";

export type ContentResourceItem = {
  id: string;
  name: string;
  language: string;
  category: string;
  jurisdiction: string;
  reviewDate?: string;
  status: ContentResourceStatus;
  displayStatus: "Draft" | "Archived" | "Active" | "Expiring Soon" | "Outdated";
  originalFileName: string;
  mimeType: string;
  fileSizeBytes: number;
  downloadPath: string;
  createdAt?: string;
  updatedAt?: string;
};

export async function listPublishedContentResources(): Promise<ContentResourceItem[]> {
  const response = await apiRequest<{ resources: ContentResourceItem[] }>("/content-resources");

  return response.data.resources;
}

export function getContentResourceDownloadUrl(resource: Pick<ContentResourceItem, "downloadPath">): string {
  return `${getApiBaseUrl()}${resource.downloadPath}`;
}
