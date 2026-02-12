import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#0b5fa6]">
      <div className="mx-auto w-full max-w-[1440px] px-[40px] py-[28px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 border-b border-white/35 pb-8 md:grid-cols-[1.6fr,1fr,1fr]">
            <div>
              <h3 className="text-[44px] font-bold leading-none text-white">
                SafeSpeak
              </h3>
              <p className="mt-4 max-w-[600px] text-[30px] font-semibold leading-[1.35] text-white/95">
                Helps you build strength, lose fat, and stay fit with expert
                guidance and science-backed training designed for lasting
                results.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#f29a1f] text-[#f29a1f] transition hover:bg-[#f29a1f]/15"
                  aria-label="Facebook"
                >
                  <IconBrandFacebookFilled size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#f29a1f] text-[#f29a1f] transition hover:bg-[#f29a1f]/15"
                  aria-label="Instagram"
                >
                  <IconBrandInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#f29a1f] text-[#f29a1f] transition hover:bg-[#f29a1f]/15"
                  aria-label="YouTube"
                >
                  <IconBrandYoutubeFilled size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] font-bold uppercase tracking-[0.08em] text-white">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3 text-[30px] font-semibold leading-[1.25] text-white/95">
                <li>
                  <a href="#" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    What doest
                    <br />
                    it do
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-bold uppercase tracking-[0.08em] text-white">
                Contact
              </h4>
              <div className="mt-4 space-y-3 text-[30px] font-semibold leading-[1.25] text-white/95">
                <p>
                  Pure Training West,
                  <br />
                  SolmsstraBe 18, 60486
                </p>
                <p>
                  <a href="mailto:info@personaltrainer101.com" className="hover:text-white">
                    info@personaltrainer101.com
                  </a>
                </p>
                <p>
                  <a href="tel:+491773840426" className="hover:text-white">
                    +49177-384-0426
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 text-[26px] font-semibold text-white/95 md:flex-row md:items-center md:justify-between">
            <p>(c) 2025 SafeSpeak. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
