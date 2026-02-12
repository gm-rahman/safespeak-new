import Link from "next/link";

const links = [
  { label: "What is SafeSpeak", href: "#" },
  { label: "What You Can Do with SafeSpeak", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function LandingNavbar() {
  return (
    <header className="bg-[#0b6fb2]">
      <div className="mx-auto flex h-[112px] w-full max-w-[1200px] items-center justify-between px-0">
        <div className="flex items-center gap-2">
          <div className="flex flex-col font-semibold leading-tight text-white">
            <span>Safe</span>
            <span>Speak</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a key={item.label} href={item.href} className="nav-link text-sm">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="cta-pill text-sm">
            Login
          </Link>
          <button className="hidden items-center gap-1 rounded-full border border-white/25 px-3 py-1 text-xs text-white/90 md:inline-flex">
            English v
          </button>
        </div>
      </div>
    </header>
  );
}
