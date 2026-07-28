"use client";

import { IconAlertTriangleFilled, IconDoorExit } from "@tabler/icons-react";

import { EMERGENCY_NUMBER, triggerQuickExit } from "@/lib/safety";

/**
 * Every /dashboard/* page (including this one) already renders the global
 * EmergencyToolbar with Call 000 / Quick Exit. This banner does not repeat
 * that chrome - it adds the specific in-context reassurance ("SafeSpeak does
 * not automatically share your details") that the toolbar does not carry,
 * using the same trusted number and Quick Exit handler.
 */
export function ExplorerEmergencyBanner() {
  return (
    <section
      role="region"
      aria-label="Immediate danger support"
      className="mt-5 flex flex-col gap-3 rounded-[18px] border border-[#f3c6c6] bg-[#fff5f5] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#de3838] text-white">
          <IconAlertTriangleFilled size={18} />
        </span>
        <div>
          <h2 className="text-sm font-extrabold text-[#7f1d1d]">
            Immediate danger? Call {EMERGENCY_NUMBER}
          </h2>
          <p className="mt-1 max-w-[520px] text-xs leading-[1.6] text-[#9a4a4a]">
            Confidential emergency help is available, and SafeSpeak does not automatically share
            your details with anyone.
          </p>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <a
          href={`tel:${EMERGENCY_NUMBER}`}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#de3838] px-4 text-[11px] font-bold text-white transition hover:bg-[#cf3131]"
        >
          Call {EMERGENCY_NUMBER}
        </a>
        <button
          type="button"
          onClick={triggerQuickExit}
          aria-label="Quick Exit from the support directory"
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#de3838] bg-white px-4 text-[11px] font-bold text-[#de3838] transition hover:bg-[#fff0f0]"
        >
          <IconDoorExit size={14} />
          Quick Exit
        </button>
      </div>
    </section>
  );
}
