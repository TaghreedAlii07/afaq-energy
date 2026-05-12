const projects = [
  {
    title: "مشاريع الطاقة",
    desc: "حلول توريد ودعم فني لمشاريع الطاقة والبنية التحتية.",
    image: "/images/Hero.jpg",
  },
  {
    title: "المعدات الصناعية",
    desc: "توفير معدات صناعية موثوقة تلائم متطلبات التشغيل.",
    image: "/images/Hero.jpg",
  },
  {
    title: "الدعم الهندسي",
    desc: "إشراف فني وهندسي لضمان جودة التنفيذ والكفاءة.",
    image: "/images/Hero.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f8fafc] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-black tracking-[4px] text-orange-500">
            المشاريع
          </p>

          <h2 className="text-3xl font-black text-[#1F4E8C] md:text-5xl">
            نماذج من أعمالنا
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7 text-right">
                <h3 className="text-2xl font-black text-[#1F4E8C]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {project.desc}
                </p>

                <button className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}