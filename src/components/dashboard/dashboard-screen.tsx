import Image from "next/image";
import Link from "next/link";

import {
  IconAlertCircleFilled,
  IconBellFilled,
  IconChevronDown,
  IconCompassFilled,
  IconFolderFilled,
  IconHomeFilled,
  IconSettingsFilled,
  IconShieldFilled,
} from "@tabler/icons-react";

import sphere from "@/assets/sphere.svg?url";

type DashboardTab = "home" | "explorer" | "notifications" | "settings";

function NavLink({
  href,
  label,
  icon,
  active,
}: {
  href: "/dashboard" | "/dashboard/explorer" | "/dashboard/notifications" | "/dashboard/settings";
  label: string;
  icon: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition ${
        active ? "bg-[#f2e9db] text-[#f59b1e]" : "text-[#64748b] hover:bg-[#eef3f8]"
      }`}
    >
      <span className="inline-flex h-4 w-4 items-center justify-center">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

function Tile({
  className,
  title,
  subtitle,
  children,
}: {
  className: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f4fff]/80 via-[#1f4fff]/45 to-transparent" />
      <div className="relative z-10 p-4 text-white">
        <h3 className="text-[34px] font-bold leading-none">{title}</h3>
        {subtitle ? <p className="mt-2 text-[16px] leading-[1.25] text-white/80">{subtitle}</p> : null}
      </div>
      {children}
    </article>
  );
}

export default function DashboardScreen({ activeTab }: { activeTab: DashboardTab }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1830px] bg-white">
      <aside className="flex w-[256px] flex-col border-r border-[#e2e8f0] bg-white px-5 py-8">
        <div className="px-2">
          <p className="text-[34px] font-extrabold leading-[0.9] text-[#0b5fa6]">
            Safe<span className="text-[#23b26d]">✓</span>
            <br />
            Speak
          </p>
        </div>

        <nav className="mt-10 flex flex-col gap-2">
          <NavLink
            href="/dashboard"
            label="Home"
            icon={<IconHomeFilled size={14} />}
            active={activeTab === "home"}
          />
          <NavLink
            href="/dashboard/explorer"
            label="Explorer"
            icon={<IconCompassFilled size={14} />}
            active={activeTab === "explorer"}
          />
          <NavLink
            href="/dashboard/notifications"
            label="Notifications"
            icon={<IconBellFilled size={14} />}
            active={activeTab === "notifications"}
          />
        </nav>

        <div className="mt-auto">
          <NavLink
            href="/dashboard/settings"
            label="Settings"
            icon={<IconSettingsFilled size={14} />}
            active={activeTab === "settings"}
          />
        </div>
      </aside>

      <section className="flex-1 bg-[#f8fafc] p-4">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e53935] px-5 py-2 text-xs font-bold text-white">
                <IconAlertCircleFilled size={14} />
                In case of emergency call (000)
                <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold">EN</span>
                <IconChevronDown size={12} />
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#e53935] px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white">
                Quick Exit
                <IconFolderFilled size={12} />
              </button>
            </div>

            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.06em] text-[#94a3b8]">Welcome Back</p>
              <p className="text-sm font-bold text-[#0f172a]">Alex Rivera</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-12 gap-4">
            <Tile
              className="col-span-3 h-[290px] bg-[linear-gradient(155deg,#1b4bff_10%,#1d2de2_70%)]"
              title="Domestic Violence"
              subtitle="Abusive behavior used to control a partner."
            />

            <article className="relative col-span-6 h-[290px] overflow-visible rounded-2xl bg-[linear-gradient(165deg,#1f4fff_10%,#1a30f0_48%,#2052ff_100%)] p-4 text-center text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/80">SafeSpeak</p>
              <h3 className="mt-2 text-[52px] font-bold leading-none">
                Let&apos;s talk with
                <br />
                SafeSpeak
              </h3>
              <div className="pointer-events-none absolute left-1/2 top-[72%] z-20 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-white bg-[#1e3a8a] shadow-[0_18px_40px_rgba(2,12,27,0.45)]">
                <Image
                  src={sphere}
                  alt="SafeSpeak orb"
                  fill
                  sizes="250px"
                  className="rounded-full object-cover"
                />
              </div>
            </article>

            <Tile
              className="col-span-3 h-[290px] bg-[linear-gradient(155deg,#2451ff_10%,#1e35f0_70%)]"
              title="Racial Abuse"
              subtitle="Boost your prompt precision with keywords."
            />

            <Tile
              className="col-span-6 h-[270px] bg-[linear-gradient(150deg,#0d2a55_5%,#123761_55%,#15436e_100%)]"
              title="Cyber scam"
              subtitle="Explore multiple prompt directions with branching."
            />

            <Tile
              className="col-span-6 h-[270px] bg-[linear-gradient(150deg,#213f66_5%,#294b73_55%,#36567f_100%)]"
              title="Migrant Challenges"
              subtitle="International Students & Migrants issue"
            />

            <div className="col-span-3 grid h-[360px] grid-rows-2 gap-4">
              <article className="rounded-2xl bg-[#0b5fa6] p-4 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">CYBER</p>
                <h4 className="mt-1 text-[40px] font-bold leading-none">
                  SCAM
                  <br />
                  SHIELD
                </h4>
                <div className="mt-8 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/40">
                  <IconShieldFilled size={14} />
                </div>
              </article>

              <article className="rounded-2xl bg-[#f5be00] p-4 text-[#111827]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7c6110]">LEGAL</p>
                <h4 className="mt-1 text-[34px] font-bold leading-none">RESOURCES</h4>
                <div className="mt-10 inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/10">
                  <IconFolderFilled size={18} />
                </div>
              </article>
            </div>

            <article className="col-span-4 h-[360px] rounded-2xl bg-[#ff9800] p-4 text-white">
              <h4 className="text-[48px] font-bold leading-none">
                Micro-
                <br />
                Cards
              </h4>
              <div className="mt-[180px] rounded-xl bg-white/20 p-3">
                <p className="text-xs font-semibold">4 Lessons • 12 mins</p>
                <div className="mt-2 h-2 rounded-full bg-white/35">
                  <div className="h-2 w-[35%] rounded-full bg-white" />
                </div>
              </div>
            </article>

            <article className="col-span-5 h-[360px] overflow-hidden rounded-2xl bg-white p-3 shadow-[inset_0_0_0_1px_#e2e8f0]">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-bold text-[#111827]">Local Intelligence</p>
                <span className="text-[#94a3b8]">...</span>
              </div>
              <div className="relative h-[304px] overflow-hidden rounded-xl bg-[#cddbd2]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_65%_48%,rgba(255,255,255,0.22),transparent_40%),linear-gradient(145deg,#cdd8d3,#bfd0cb)]" />
                <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-white/90 px-3 py-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f29a1f]">
                        Current Location
                      </p>
                      <p className="text-xs font-bold text-[#111827]">3 Active Zones Nearby</p>
                    </div>
                    <button className="rounded-full bg-[#ff8f00] px-3 py-1 text-[10px] font-bold text-white">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
