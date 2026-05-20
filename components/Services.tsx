import {
  Fuel,
  Drill,
  Zap,
  Factory,
  Building2,
  Wheat,
  Ship,
  Cog,
} from "lucide-react";

const industries = [
  {
    title: "Oil & Gas",
    icon: Fuel,
  },
  {
    title: "Drilling & Exploration",
    icon: Drill,
  },
  {
    title: "Utility & Energy Generation",
    icon: Zap,
  },
  {
    title: "Mining & Refining",
    icon: Factory,
  },
  {
    title: "Construction & EPC",
    icon: Building2,
  },
  {
    title: "Agricultural, Food & Beverage",
    icon: Wheat,
  },
  {
    title: "Marine",
    icon: Ship,
  },
  {
    title: "Manufacturing & Process Industries",
    icon: Cog,
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
          <p className="mb-4 text-sm font-black uppercase tracking-[4px] text-amber-500">
            الصناعات التي نخدمها
          </p>

          <h2 className="text-3xl font-black leading-tight text-[#1F4E8C] md:text-5xl">
            Industries We Serve
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-100 bg-[#f8fafc] p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#1F4E8C] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-black leading-8 text-[#1F4E8C] transition group-hover:text-white">
                  {industry.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}