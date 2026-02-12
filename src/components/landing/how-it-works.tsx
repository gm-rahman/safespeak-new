import {
  IconCircleCheck,
  IconMicrophone,
  IconShield,
  IconUsers,
} from "@tabler/icons-react";

type Step = {
  number: string;
  title: string;
  duration: string;
  description: string;
  detailSide: "left" | "right";
  numberSide: "left" | "right";
  icon: "mic" | "shield" | "users" | "check";
};

const steps: Step[] = [
  {
    number: "01",
    title: "Capture",
    duration: "30 Seconds",
    description:
      "Quickly document the incident details. Our smart form guides you through the essential information via voice or text without overwhelming you.",
    detailSide: "left",
    numberSide: "right",
    icon: "mic",
  },
  {
    number: "02",
    title: "Understand",
    duration: "1 Minute",
    description:
      "Our system analyzes the report context instantly. We categorize the severity and identify immediate support needs securely.",
    detailSide: "right",
    numberSide: "left",
    icon: "shield",
  },
  {
    number: "03",
    title: "Connect",
    duration: "2 Minutes",
    description:
      "Securely link with the appropriate response team. You receive a unique, anonymous key to follow up without exposing your identity.",
    detailSide: "left",
    numberSide: "right",
    icon: "users",
  },
  {
    number: "04",
    title: "Take Action",
    duration: "1 Minute",
    description:
      "Resolution protocols are activated. The right stakeholders are notified immediately, ensuring swift and effective action.",
    detailSide: "right",
    numberSide: "left",
    icon: "check",
  },
];

function StepIcon({ icon }: { icon: Step["icon"] }) {
  const common = "h-5 w-5 text-[#0b5fa6]";
  if (icon === "mic") return <IconMicrophone className={common} stroke={2} />;
  if (icon === "shield") return <IconShield className={common} stroke={2} />;
  if (icon === "users") return <IconUsers className={common} stroke={2} />;
  return <IconCircleCheck className={common} stroke={2} />;
}

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-[220px] py-[80px]">
        <div className="mx-auto w-full max-w-[1200px]">
          <h3 className="text-center text-[40px] font-semibold leading-none text-[#1f2937]">
            How It Works
          </h3>

          <div className="relative mt-10 h-[930px] w-full">
            <div className="absolute left-1/2 top-5 h-[860px] w-[2px] -translate-x-1/2 bg-[#e5e7eb]" />

            <div className="space-y-[56px]">
              {steps.map((step) => (
                <div key={step.number} className="relative h-[172px]">
                  <div className="absolute left-1/2 top-[56px] z-10 h-12 w-12 -translate-x-1/2 rounded-full border-2 border-[#0b5fa6] bg-white shadow-[0_4px_10px_rgba(11,95,166,0.2)]">
                    <div className="flex h-full w-full items-center justify-center">
                      <StepIcon icon={step.icon} />
                    </div>
                  </div>

                  <div
                    className={`absolute top-0 w-[360px] ${
                      step.detailSide === "left"
                        ? "right-[calc(50%+44px)] text-right"
                        : "left-[calc(50%+44px)] text-left"
                    }`}
                  >
                    <h4 className="text-[34px] font-semibold leading-none text-[#1f2937]">
                      {step.title}
                    </h4>
                    <span className="mt-2 inline-block rounded-full bg-[#d9efff] px-3 py-1 text-[14px] font-semibold text-[#0b5fa6]">
                      {step.duration}
                    </span>
                    <p className="mt-3 text-[22px] leading-[1.45] text-[#6b7280]">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`absolute top-[36px] ${
                      step.numberSide === "left" ? "left-0" : "right-0"
                    }`}
                  >
                    <span className="text-[92px] font-extrabold leading-none text-[#0b5fa6]">
                      {step.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
