import type { OrganisationRecord } from "@/lib/organisation";

export type OrganisationShareResult = "shared" | "copied" | "unavailable";

/**
 * Only public directory fields are ever included - never the user's
 * incident summary, search history, conversation, report, or any other
 * personal data, regardless of what the caller has in scope.
 */
export function buildOrganisationShareText(organisation: OrganisationRecord): string {
  const lines = [
    organisation.name,
    organisation.serviceType,
    organisation.description,
    organisation.phoneDisplay ? `Phone: ${organisation.phoneDisplay}` : undefined,
    organisation.websiteUrl ? organisation.websiteUrl : undefined,
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n");
}

export async function shareOrganisation(
  organisation: OrganisationRecord
): Promise<OrganisationShareResult> {
  const shareText = buildOrganisationShareText(organisation);
  const shareData = {
    title: organisation.name,
    text: shareText,
    url: organisation.websiteUrl,
  };

  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share(shareData);
      return "shared";
    } catch {
      // Fall through to clipboard - user cancelling the native share sheet
      // should not surface as an error.
    }
  }

  if (typeof navigator !== "undefined" && navigator.clipboard) {
    await navigator.clipboard.writeText(shareText);
    return "copied";
  }

  return "unavailable";
}
