import Image from "next/image";

import appleLink from "@/assets/apple-link.svg";
import androidLink from "@/assets/android-link.svg";
import phoneLeft from "@/assets/Rectangle.svg?url";
import phoneRight from "@/assets/Rectangle-2.svg?url";
import qrCode from "@/assets/qrcode.svg";
import sphere from "@/assets/sphere.svg?url";
import indicator from "@/assets/indicator.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b74b8] via-[#0463a4] to-[#024a80]" />
      <div className="absolute inset-x-[-12%] bottom-[-22%] h-[130%]">
        <Image
          src={sphere}
          alt="SafeSpeak sphere background"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>

      <div className="relative mx-auto flex h-[506.42px] min-w-[1200px] max-w-[1200px] flex-col justify-start px-[var(--pad)] pt-6">
        <div className="grid items-start gap-6 md:grid-cols-[0.95fr,1fr]">
          <div className="space-y-3 max-w-[620px]">
            <p className="text-4xl sm:text-5xl font-extrabold leading-[1.08] text-white max-w-[620px]">
              <span className="text-[var(--safe-orange)]">AN</span>{" "}
              <span className="text-[var(--safe-orange)]">APP</span> THAT TALKS FOR YOU
              <br />
              EMPOWERS YOU
            </p>
            <p className="text-sm font-semibold text-white/85">
              Download the app now from our iOS & Android store.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <Image src={indicator} alt="Download indicator arrow" className="h-[46px] w-auto" />
                <Image src={appleLink} alt="Download on the App Store" className="h-[54px] w-auto" />
                <Image src={androidLink} alt="Get it on Google Play" className="h-[54px] w-auto" />
              </div>
              <Image src={qrCode} alt="SafeSpeak QR" className="h-[60px] w-auto" />
            </div>
          </div>

          <div className="relative mt-2 flex justify-center md:mt-0">
            <div className="flex items-end gap-6 drop-shadow-[var(--shadow-card)]">
              <Image
                src={phoneLeft}
                alt="SafeSpeak app preview"
                width={308}
                height={640}
                className="h-[480px] w-auto"
                priority
              />
              <Image
                src={phoneRight}
                alt="SafeSpeak voice preview"
                width={308}
                height={640}
                className="h-[500px] w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
