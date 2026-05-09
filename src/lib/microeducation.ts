import { apiRequest } from "@/lib/api";

export type MicroEducationTone = "blue" | "orange" | "green" | "amber" | "violet" | "teal";
export type MicroEducationChip = "harassment" | "rights" | "safety" | "mentalHealth";
export type MicroEducationDuration = "quick" | "deep";
export type MicroEducationFormat = "video" | "interactive" | "guide";

export type MicroEducationItem = {
  id: string;
  title: string;
  summary: string;
  tag: string;
  cta: string;
  tone: MicroEducationTone;
  chips: MicroEducationChip[];
  duration: MicroEducationDuration;
  format: MicroEducationFormat;
  sortOrder: number;
  views: number;
};

export async function listPublishedMicroEducation(): Promise<MicroEducationItem[]> {
  const response = await apiRequest<{ items: MicroEducationItem[] }>("/microeducation");

  return response.data.items;
}
