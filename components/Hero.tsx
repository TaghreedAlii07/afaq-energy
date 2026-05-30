import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type HeroData = {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  backgroundImage?: unknown;
};

export default async function Hero() {
  const hero = await client.fetch<HeroData>(heroQuery);

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
        <div className="max-w-3xl text-right">
          <p className="mb-5 text-sm font-bold uppercase tracking-[6px] text-amber-500">
            {hero?.eyebrow || "MRO SUPPLY CHAIN SOLUTIONS"}
          </p>

          <h1 className="text-4xl font-black leading-[1.25] md:text-6xl lg:text-7xl">
            {hero?.titleLine1 || "حلول سلاسل الإمداد"}
            <br />
            <span className="text-amber-500">
              {hero?.titleLine2 || "للصيانة والإصلاح والتشغيل"}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl">
            {hero?.description ||
              "نقدم حلول MRO متكاملة لإدارة سلاسل الإمداد وتوريد المعدات والمواد الصناعية لضمان استمرارية التشغيل بأعلى مستويات الجودة والكفاءة."}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-amber-500 px-8 py-4 text-center font-bold text-white shadow-lg transition hover:bg-amber-600"
            >
              اكتشف خدماتنا
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/70 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#1F4E8C]"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}