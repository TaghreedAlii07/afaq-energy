import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Lang = "ar" | "en";

type HeroData = {
  eyebrowAr?: string;
  eyebrowEn?: string;
  titleLine1Ar?: string;
  titleLine1En?: string;
  titleLine2Ar?: string;
  titleLine2En?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  backgroundImage?: unknown;
};

export default async function Hero({ lang = "ar" }: { lang?: Lang }) {
  const hero = await client.fetch<HeroData>(
    heroQuery,
    {},
    { cache: "no-store" }
  );

  const isEnglish = lang === "en";

  const eyebrow = isEnglish
    ? hero?.eyebrowEn || "MRO SUPPLY CHAIN SOLUTIONS"
    : hero?.eyebrowAr || "حلول سلاسل الإمداد MRO";

  const titleLine1 = isEnglish
    ? hero?.titleLine1En || "MRO Supply Chain"
    : hero?.titleLine1Ar || "حلول سلاسل الإمداد";

  const titleLine2 = isEnglish
    ? hero?.titleLine2En || "Maintenance, Repair & Operations"
    : hero?.titleLine2Ar || "للصيانة والإصلاح والتشغيل";

  const description = isEnglish
    ? hero?.descriptionEn ||
      "We provide integrated MRO supply chain solutions, industrial equipment, and materials to support operational continuity with the highest standards of quality and efficiency."
    : hero?.descriptionAr ||
      "نقدم حلول MRO متكاملة لإدارة سلاسل الإمداد وتوريد المعدات والمواد الصناعية لضمان استمرارية التشغيل بأعلى مستويات الجودة والكفاءة.";

  const backgroundUrl = hero?.backgroundImage
    ? urlFor(hero.backgroundImage).url()
    : "/images/Hero.jpg";

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center px-6 pt-20 text-white md:px-12 lg:px-20"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#071527]/95 via-[#071527]/75 to-[#071527]/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className={isEnglish ? "max-w-3xl text-left" : "max-w-3xl text-right"}>
          <p className="mb-5 text-sm font-bold uppercase tracking-[6px] text-amber-500">
            {eyebrow}
          </p>

          <h1 className="text-4xl font-black leading-[1.25] md:text-6xl lg:text-7xl">
            {titleLine1}
            <br />
            <span className="text-amber-500">{titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl">
            {description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-amber-500 px-8 py-4 text-center font-bold text-white shadow-lg transition hover:bg-amber-600"
            >
              {isEnglish ? "Explore Services" : "اكتشف خدماتنا"}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/70 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#1F4E8C]"
            >
              {isEnglish ? "Contact Us" : "تواصل معنا"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}