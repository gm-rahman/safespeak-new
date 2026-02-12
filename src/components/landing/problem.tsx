import Image from "next/image";

import phoneHand from "@/assets/Hand and iPhone 16 Pro.svg";

export default function ProblemSection() {
  return (
    <section className="bg-[#f6f8fb]">
      <div className="mx-auto flex min-h-[1200px] max-w-[1440px] flex-col px-[120px] pt-[128px]">
        <div className="w-full max-w-[1200px]">
          <p className="text-xs font-semibold tracking-[0.18em] text-gray-700">WHAT IS SAFESPEAK</p>
          <h2 className="mt-2 text-4xl font-extrabold leading-tight text-[#0f172a]">
            THE PROBLEM WE
            <br />
            SOLVE
          </h2>
        </div>

        <div className="mt-[80px] flex w-full max-w-[1200px] flex-col gap-10 md:flex-row md:gap-20">
          <div className="flex flex-1 items-center justify-center">
            <Image
              src={phoneHand}
              alt="SafeSpeak hand with phone"
              width={360}
              height={360}
              className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              priority
            />
          </div>

          <div className="flex flex-1 flex-col justify-center text-[#0f172a]">
            <p className="text-sm font-semibold leading-6">
              The landscape around discrimination and harassment is complex. Many individuals experience workplace abuse,
              online harassment, or hate speech but feel:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
              <li>Isolated and uncertain where to turn</li>
              <li>Confused about their rights and options</li>
              <li>Unable to access culturally sensitive support</li>
              <li>Fearful of reporting without guidance</li>
            </ul>
            <p className="mt-4 text-sm leading-6">
              SafeSpeak changes that by offering clarity, safety, and community.
            </p>
            <div className="mt-6">
              <button className="rounded-full bg-[#0b6fb2] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-[1px] hover:shadow-lg">
                Report now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
