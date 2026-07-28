"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { IconX } from "@tabler/icons-react";

const FOCUSABLE_SELECTOR =
  "a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";

/**
 * Shared accessible overlay used by the Filters panel and the Organisation
 * details drawer. Extends the existing hand-rolled modal pattern from
 * SmartDialerModal/SafetyGate (fixed overlay + body scroll lock) with an
 * explicit focus trap, Escape-to-close, and focus restoration to the
 * triggering element - none of the existing modals had those yet.
 */
export function ExplorerModal({
  isOpen,
  onClose,
  titleId,
  children,
  align = "end",
  zIndexClassName = "z-[140]",
}: {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  children: ReactNode;
  align?: "end" | "center";
  zIndexClassName?: string;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    triggerElementRef.current = document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusables?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );

      if (focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 ${zIndexClassName} flex ${align === "end" ? "items-stretch justify-end" : "items-center justify-center p-4"} bg-[#0f172a]/45 backdrop-blur-[1px]`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={
          align === "end"
            ? "flex h-full w-full max-w-[440px] flex-col overflow-y-auto bg-white shadow-[-16px_0_40px_rgba(15,23,42,0.18)] sm:rounded-l-[20px]"
            : "flex max-h-[90vh] w-full max-w-[480px] flex-col overflow-y-auto rounded-[20px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]"
        }
      >
        {children}
      </div>
    </div>
  );
}

export function ExplorerModalCloseButton({ onClose, label }: { onClose: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e1ee] bg-white text-[#334155] transition hover:bg-[#f1f5f9]"
    >
      <IconX size={16} />
    </button>
  );
}
