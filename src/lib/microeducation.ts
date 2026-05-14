import { apiRequest, getApiBaseUrl } from "@/lib/api";

export type MicroEducationTone = "blue" | "orange" | "green" | "amber" | "violet" | "teal";
export type MicroEducationChip = "harassment" | "rights" | "safety" | "mentalHealth";
export type MicroEducationDuration = "quick" | "deep";
export type MicroEducationFormat = "video" | "interactive" | "guide";

export type MicroEducationItem = {
  id: string;
  title: string;
  summary: string;
  readTimeLabel: string;
  tag: string;
  cta: string;
  detailHeading: string;
  detailSummary?: string;
  detailBody: string;
  detailTakeaway: string;
  imageAlt?: string;
  tone: MicroEducationTone;
  chips: MicroEducationChip[];
  duration: MicroEducationDuration;
  format: MicroEducationFormat;
  sortOrder: number;
  views: number;
  imageOriginalFileName?: string;
  imageMimeType?: string;
  imageSizeBytes?: number;
  imagePath?: string;
};

export async function listPublishedMicroEducation(): Promise<MicroEducationItem[]> {
  const response = await apiRequest<{ items: MicroEducationItem[] }>("/microeducation");

  return response.data.items;
}

export function getMicroEducationImageUrl(item: Pick<MicroEducationItem, "imagePath">): string | undefined {
  return item.imagePath ? `${getApiBaseUrl()}${item.imagePath}` : undefined;
}
