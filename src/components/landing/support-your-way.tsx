import {
  IconBook2,
  IconClipboardList,
  IconHeadphones,
  IconPointer,
} from "@tabler/icons-react";

function ActionLink({ children }: { children: string }) {
  return (
    <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0b5fa6] transition hover:text-[#084c87]">
      {children}
      <span aria-hidden="true">&gt;</span>
    </button>
  );
}

function CardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`overflow-hidden rounded-[18px] border border-[#d6dde6] border-t-[2px] border-t-[#f29a1f] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] ${className}`}
    >
      {children}
    </article>
  );
}

export default function SupportYourWay() {
  return (
    <section className="bg-white">
      <div className="mx-auto min-h-[1276px] w-full max-w-[1440px] px-[160px] py-[80px]">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f8ce6]">
              Resources
            </p>
            <h3 className="mt-2 text-[54px] font-extrabold leading-none text-[#111827]">
              Support Your Way
            </h3>
            <p className="mx-auto mt-4 max-w-[560px] text-[20px] leading-[1.5] text-[#6b7280]">
              Choose the path that feels right for you. From reporting to reading, we have tools to help.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardShell>
              <div className="relative h-[190px] border-b border-[#edf1f6] bg-gradient-to-r from-[#f7f8fa] to-[#e6ecf4]">
                <p className="pt-2 text-center text-[18px] font-medium tracking-[0.08em] text-[#d4b68a]">
                  NATURAL
                </p>
                <div className="mx-auto mt-8 flex w-[78%] items-end justify-between">
                  <span className="h-16 w-16 rounded-full bg-[#1f2937]" />
                  <span className="h-20 w-20 rounded-full bg-[#d1a56c]" />
                  <span className="h-16 w-16 rounded-full bg-[#8cc2a8]" />
                  <span className="h-18 w-18 rounded-full bg-[#f2c99f]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#111827]">
                  <IconPointer size={18} className="text-[#f29a1f]" />
                  <h4 className="text-[22px] font-bold leading-none">Report an Incident</h4>
                </div>
                <p className="mt-3 text-[16px] leading-[1.55] text-[#6b7280]">
                  Safely submit details about what happened. You can choose to remain anonymous or provide contact details for follow-up.
                </p>
                <ActionLink>Start Report</ActionLink>
              </div>
            </CardShell>

            <CardShell className="p-6">
              <div className="flex items-center gap-2 text-[#111827]">
                <IconClipboardList size={18} className="text-[#f29a1f]" />
                <h4 className="text-[22px] font-bold leading-none">Track Your Case</h4>
              </div>
              <p className="mt-3 text-[16px] leading-[1.55] text-[#6b7280]">
                Already submitted a report? Use your unique access key to check your status or communicate with investigators.
              </p>
              <ActionLink>Check Status</ActionLink>
            </CardShell>

            <CardShell className="p-6">
              <div className="flex items-center gap-2 text-[#111827]">
                <IconBook2 size={18} className="text-[#f29a1f]" />
                <h4 className="text-[22px] font-bold leading-none">Access Resources</h4>
              </div>
              <p className="mt-3 text-[16px] leading-[1.55] text-[#6b7280]">
                Browse our library of articles, legal guides, and mental health resources designed to empower you.
              </p>
              <ActionLink>Browse Library</ActionLink>
            </CardShell>

            <CardShell>
              <div className="relative h-[190px] border-b border-[#edf1f6] bg-gradient-to-r from-[#7e4f4e] via-[#d5b3a5] to-[#9ec6c1]">
                <div className="absolute bottom-0 left-8 h-[135px] w-[120px] rounded-t-[90px] bg-[#f4d3b9]" />
                <div className="absolute bottom-0 left-6 h-[110px] w-[120px] rounded-t-[90px] bg-[#5b2e2c]" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#111827]">
                  <IconHeadphones size={18} className="text-[#f29a1f]" />
                  <h4 className="text-[22px] font-bold leading-none">Chat with a Counselor</h4>
                </div>
                <p className="mt-3 text-[16px] leading-[1.55] text-[#6b7280]">
                  Connect instantly with a trained professional who can offer guidance and emotional support in real-time.
                </p>
                <ActionLink>Start Chat</ActionLink>
              </div>
            </CardShell>
          </div>
        </div>
      </div>
    </section>
  );
}
