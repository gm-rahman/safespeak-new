function Marker({ className }: { className: string }) {
  return (
    <span
      className={`absolute inline-flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-[#f29a1f] shadow-[0_6px_12px_rgba(0,0,0,0.18)] ${className}`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
    </span>
  );
}

export default function LocalIntelligence() {
  return (
    <section className="bg-[#d9e8f3]">
      <div className="mx-auto h-[677px] w-full max-w-[1440px] px-[64px] pb-[128px] pt-[128px]">
        <div className="mx-auto flex h-[421px] w-full max-w-[1312px] flex-col gap-6">
          <div className="w-fit">
            <h3 className="text-[40px] font-extrabold leading-none text-[#111827]">Local Intelligence</h3>
            <div className="mt-2 h-[4px] w-16 rounded-full bg-[#ff8f00]" />
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[26px] border-[8px] border-white/75 bg-[#c8d5d0]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_78%_35%,rgba(255,255,255,0.2),transparent_42%),linear-gradient(145deg,#cdd8d3,#bfd0cb)]" />

            <div className="absolute -left-20 top-8 h-[120%] w-[26px] rotate-[18deg] rounded-full bg-[#ded2bc]/60" />
            <div className="absolute left-[22%] -top-14 h-[130%] w-[14px] rotate-[8deg] rounded-full bg-[#ddd0b8]/50" />
            <div className="absolute right-[12%] -top-20 h-[140%] w-[16px] rotate-[-10deg] rounded-full bg-[#ddd0b8]/40" />
            <div className="absolute inset-x-[-8%] top-[32%] h-[10px] rotate-[12deg] rounded-full bg-[#d7ccb6]/35" />
            <div className="absolute inset-x-[8%] top-[52%] h-[8px] rotate-[-6deg] rounded-full bg-[#d7ccb6]/35" />

            <Marker className="left-[25%] top-[29%]" />
            <Marker className="left-[63%] top-[56%]" />
            <Marker className="left-[78%] top-[36%]" />

            <div className="absolute bottom-6 left-6 flex items-center gap-5 rounded-[22px] bg-white/95 px-5 py-4 shadow-[0_16px_28px_rgba(0,0,0,0.16)]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f29a1f]">Current Location</p>
                <p className="mt-1 text-[26px] font-extrabold leading-[1.05] text-[#111827]">
                  3 Active Zones
                  <br />
                  Nearby
                </p>
              </div>
              <button className="rounded-full bg-[#ff8f00] px-5 py-2 text-sm font-bold text-white shadow-[0_8px_16px_rgba(255,143,0,0.35)]">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
