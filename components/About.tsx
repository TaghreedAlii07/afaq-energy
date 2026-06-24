import { client } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type AboutData = {
  labelAr?: string;
  labelEn?: string;

  titleLine1Ar?: string;
  titleLine2Ar?: string;

  titleLine1En?: string;
  titleLine2En?: string;

  descriptionAr?: string;
  descriptionEn?: string;

  image?: unknown;
};

type AboutProps = {
  lang?: "ar" | "en";
};

export default async function About({
  lang = "ar",
}: AboutProps) {
  const about = await client.fetch<AboutData>(
    aboutQuery,
    {},
    { cache: "no-store" }
  );

  const imageUrl = about?.image
    ? urlFor(about.image).url()
    : "/images/about.png";

  const isEnglish = lang === "en";

  return (
    <section
      id="about"
      dir={isEnglish ? "ltr" : "rtl"}
      className="bg-[#f8fafc] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-orange-400/20" />

          <img
            src={imageUrl}
            alt="AFAQ ENERGY"
            className="relative h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[500px]"
          />
        </div>

        <div
          className={`order-1 lg:order-2 ${
            isEnglish ? "text-left" : "text-right"
          }`}
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[4px] text-amber-500">
            {isEnglish
              ? about?.labelEn || "ABOUT US"
              : about?.labelAr || "من نحن"}
          </p>

          <h2 className="text-3xl font-black leading-[1.35] text-[#1F4E8C] md:text-5xl">
            {isEnglish
              ? about?.titleLine1En || "Industrial Expertise"
              : about?.titleLine1Ar || "خبرة صناعية"}

            <br />

            {isEnglish
              ? about?.titleLine2En || "With Global Standards"
              : about?.titleLine2Ar || "بمعايير عالمية"}
          </h2>

          <p className="mt-7 text-lg leading-9 text-gray-600">
            {isEnglish
              ? about?.descriptionEn ||
                "AFAQ Energy provides integrated solutions for the energy and industrial sectors, focusing on quality, efficiency, and reliable products and services that support business continuity and modern project requirements."
              : about?.descriptionAr ||
                "تقدم آفاق الطاقة حلولًا متكاملة في قطاع الطاقة والصناعة، مع التركيز على الجودة والكفاءة وتوفير المنتجات والخدمات التي تدعم استمرارية الأعمال وتواكب متطلبات المشاريع الحديثة."}
          </p>
        </div>
      </div>
    </section>
  );
}