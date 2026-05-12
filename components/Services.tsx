import {
  Wrench,
  Factory,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const services = [
  {
    title: "توريد المعدات الصناعية",
    desc: "توفير معدات وأجهزة عالية الجودة للمشاريع الصناعية والطاقة.",
    icon: Factory,
  },

  {
    title: "الدعم الفني والهندسي",
    desc: "حلول هندسية متكاملة بإشراف متخصصين وخبراء في القطاع.",
    icon: Wrench,
  },

  {
    title: "أنظمة التحكم والطاقة",
    desc: "تصميم وتنفيذ حلول الطاقة وأنظمة التشغيل الحديثة.",
    icon: Cpu,
  },

  {
    title: "الجودة والسلامة",
    desc: "الالتزام بأعلى معايير الجودة والسلامة في جميع المشاريع.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 text-right">
          <p className="mb-4 text-sm font-black uppercase tracking-[4px] text-orange-500">
            خدماتنا
          </p>

          <h2 className="text-3xl font-black text-[#1F4E8C] md:text-5xl">
            حلول متكاملة
            <br />
            لقطاع الطاقة والصناعة
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-100 bg-[#f8fafc] p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#1F4E8C] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#1F4E8C] transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600 transition group-hover:text-gray-200">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}