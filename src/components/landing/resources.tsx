import React from "react";

type Card = {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  footerLeft?: string;
  footerRight?: string;
  accent: string;
  textColor: string;
  mutedBg?: string;
};

const cards: Card[] = [
  {
    title: "Domestic Violence",
    subtitle: "",
    description: "Abusive behavior used to control a partner. Find immediate safe shelter and legal protection.",
    badge: "SHIELD PROTECTION",
    accent: "from-[#2a68ff] to-[#2f8bff]",
    textColor: "text-white",
    mutedBg: "bg-white/10",
  },
  {
    title: "CYBER PROTECTION",
    subtitle: "SCAM SHIELD",
    description: "Explore multiple prompt directions with branching to stay ahead of digital threats.",
    badge: "",
    footerLeft: "RESOURCES",
    footerRight: "GUIDANCE",
    accent: "from-[#0d121c] to-[#0d121c]",
    textColor: "text-white",
    mutedBg: "bg-white/5",
  },
  {
    title: "Empowerment Lessons",
    subtitle: "",
    description: "Micro-Cards\n4 Lessons • 21 mins",
    badge: "",
    footerLeft: "Start Learning",
    accent: "from-[#f8991d] to-[#f47a00]",
    textColor: "text-white",
    mutedBg: "bg-white/15",
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-[#dff1ff]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-16 pb-32 pt-32">
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.title + card.subtitle}
              className={`rounded-[24px] bg-gradient-to-br ${card.accent} p-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] text-left ${card.textColor}`}
            >
              {card.title && (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] opacity-90">
                  {card.title}
                </p>
              )}
              {card.subtitle && (
                <h3 className="mt-1 text-2xl font-extrabold leading-tight">{card.subtitle}</h3>
              )}
              {!card.subtitle && (
                <h3 className="mt-2 text-2xl font-extrabold leading-tight">{card.subtitle || card.title}</h3>
              )}
              <p className="mt-3 whitespace-pre-line text-sm leading-6 opacity-90">{card.description}</p>

              {card.badge && (
                <div className="mt-5 inline-flex rounded-full border border-white/35 px-3 py-1 text-[11px] font-semibold tracking-wide">
                  {card.badge}
                </div>
              )}

              {!card.badge && card.footerLeft && (
                <div className="mt-6 flex items-center gap-3 text-sm font-semibold">
                  <div className={`rounded-lg px-3 py-2 ${card.mutedBg || "bg-white/10"}`}>{card.footerLeft}</div>
                  {card.footerRight && (
                    <div className={`rounded-lg px-3 py-2 ${card.mutedBg || "bg-white/10"}`}>{card.footerRight}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
