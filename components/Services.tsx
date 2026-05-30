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

import { client } from "@/sanity/lib/client";
import { industriesQuery } from "@/sanity/lib/queries";

type Industry = {
  arabicTitle?: string;
  englishTitle?: string;
  icon?: string;
  displayOrder?: number;
};

const iconMap = {
  Fuel,
  Drill,
  Zap,
  Factory,
  Building2,
  Wheat,
  Ship,
  Cog,
};

export default async function Services() {
  const industries = await client.fetch<Industry[]>(industriesQuery);

  return (
    <section id="services" className="bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-right">
          <p className="mb-4 text-sm font-black uppercase tracking-[4px] text-amber-500">
            الصناعات التي نخدمها
          </p>

          <h2 className="text-3xl font-black leading-tight text-[#1F4E8C] md:text-5xl">
            قطاعات صناعية متنوعة
            <br />
            <span className="text-2xl text-gray-500 md:text-3xl">
              Industries We Serve
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries?.map((industry, index) => {
            const Icon =
              iconMap[industry.icon as keyof typeof iconMap] || Cog;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-100 bg-[#f8fafc] p-8 text-right transition duration-300 hover:-translate-y-2 hover:bg-[#1F4E8C] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-black leading-8 text-[#1F4E8C] transition group-hover:text-white">
                  {industry.arabicTitle}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-500 transition group-hover:text-gray-200">
                  {industry.englishTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}