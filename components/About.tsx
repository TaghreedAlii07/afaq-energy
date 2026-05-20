export default function About() {
  return (
    <section id="about" className="bg-[#f8fafc] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-orange-400/20" />

          <img
            src="/images/about.png"
            alt="AFAQ ENERGY"
            className="relative h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[500px]"
          />
        </div>

        <div className="order-1 text-right lg:order-2">
          <p className="mb-4 text-sm font-black uppercase tracking-[4px] text-amber-500">
            من نحن
          </p>

          <h2 className="text-3xl font-black leading-[1.35] text-[#1F4E8C] md:text-5xl">
            خبرة صناعية
            <br />
            بمعايير عالمية
          </h2>

          <p className="mt-7 text-lg leading-9 text-gray-600">
            تقدم آفاق الطاقة حلولًا متكاملة في قطاع الطاقة والصناعة، مع التركيز
            على الجودة والكفاءة وتوفير المنتجات والخدمات التي تدعم استمرارية
            الأعمال وتواكب متطلبات المشاريع الحديثة.
          </p>
        </div>
      </div>
    </section>
  );
}