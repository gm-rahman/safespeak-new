import type { ReportBuilderOverview } from "@/lib/report-builder-view-model";

export type SafetyStatusValue = "safe" | "unsafe" | "unknown" | "";
export type InjuredValue = "yes" | "no" | "unsure" | "";

export type ReportDraft = {
  title: string;
  date: string;
  location: string;
  summary: string;
  safetyStatus: SafetyStatusValue;
  wasInjured: InjuredValue;
  relationshipToPerson: string;
  evidenceContext: string;
  updatedAt: string | null;
};

export function toTitleCase(value: string): string {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatTimestamp(value: string | null): string {
  if (!value) return "Not updated yet";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function buildReportDraftText(
  draft: ReportDraft,
  overview: ReportBuilderOverview | null
): string {
  const lines = [
    `SafeSpeak local report draft (${formatTimestamp(draft.updatedAt)})`,
    "This is a local, frontend-only draft. Nothing has been submitted or shared.",
    "",
    `Incident title: ${draft.title || "Not provided"}`,
    `Category: ${overview ? toTitleCase(overview.matchedPathway.category) : "Not classified"}`,
    `Date: ${draft.date || "Not provided"}`,
    `Location: ${draft.location || "Not provided"}`,
    `Safety status: ${draft.safetyStatus || "Not provided"}`,
    `Injured: ${draft.wasInjured || "Not provided"}`,
    `Relationship to person involved: ${draft.relationshipToPerson || "Not provided"}`,
    `Witnesses, CCTV, photos, messages, or medical records: ${draft.evidenceContext || "Not provided"}`,
    "",
    "What happened:",
    draft.summary || "Not provided",
  ];

  if (overview) {
    lines.push(
      "",
      `Suggested destination: ${overview.matchedPathway.destination}`
    );
  }

  return lines.join("\n");
}
