"use client";

import Link from "next/link";

import { IconMessageChatbot, IconShieldCheckFilled } from "@tabler/icons-react";

export function ExplorerSafetyFooter() {
  return (
    <section className="mt-6 rounded-[18px] border border-[#dce6f2] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#0f5d9f]">
            <IconShieldCheckFilled size={18} />
          </span>
          <div>
            <h2 className="text-sm font-extrabold text-[#1f2a3a]">Your safety is our priority.</h2>
            <p className="mt-1 max-w-[520px] text-[11px] leading-[1.6] text-[#60728a]">
              Searches and saved organisations on this page stay on your device unless you choose
              to share them - for example through a warm referral, which always asks for your
              consent first.
            </p>
          </div>
        </div>
        <Link
          href={{ pathname: "/dashboard", query: { view: "assistant" } }}
          className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white"
        >
          <IconMessageChatbot size={14} />
          Talk to SafeSpeak AI
        </Link>
      </div>
    </section>
  );
}
