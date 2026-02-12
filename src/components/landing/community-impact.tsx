type Testimonial = {
  name: string;
  role: string;
  quote: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Sanctuary Member",
    quote:
      "The Scam Shield helped me identify a threat before it was too late. I feel truly protected here.",
  },
  {
    name: "Jordan Keys",
    role: "Legal Advocate",
    quote:
      "SafeSpeak isn't just an app, it's a lifeline. The integration of local intelligence and immediate reporting is game-changing.",
    featured: true,
  },
  {
    name: "Maria S.",
    role: "Community Leader",
    quote:
      "The micro-lessons on safety are so accessible. I've shared them with my entire neighborhood group.",
  },
];

function Stars() {
  return <p className="text-[14px] tracking-[0.28em] text-[#ff8f00]">★★★★★</p>;
}

export default function CommunityImpact() {
  return (
    <section className="bg-[#d9e8f3]">
      <div className="mx-auto h-[576px] w-full max-w-[1440px] px-[80px] pb-[96px] pt-[96px]">
        <div className="mx-auto flex h-full max-w-[1280px] flex-col items-center">
          <h3 className="text-[48px] font-extrabold leading-none text-[#0f172a]">
            Community Impact
          </h3>

          <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className={`rounded-[28px] p-6 ${
                  item.featured
                    ? "bg-[#0b5fa6] text-white shadow-[0_18px_40px_rgba(11,95,166,0.35)]"
                    : "bg-white/70 text-[#0f172a]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      item.featured ? "bg-white/25 text-white" : "bg-[#e7eef6] text-[#0f172a]"
                    }`}
                  >
                    {item.name
                      .split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none">{item.name}</p>
                    <p
                      className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
                        item.featured ? "text-[#ffb347]" : "text-[#64748b]"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>

                <p
                  className={`mt-6 text-[15px] leading-7 ${
                    item.featured ? "text-white/95" : "text-[#1f2937]"
                  }`}
                >
                  &quot;{item.quote}&quot;
                </p>

                <div className="mt-7">
                  <Stars />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
