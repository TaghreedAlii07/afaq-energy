import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Project = {
  title?: string;
  description?: string;
  image?: unknown;
};

export default async function Projects() {
  const projects = await client.fetch<Project[]>(
    projectsQuery,
    {},
    { cache: "no-store" }
  );

  return (
    <section id="projects" className="bg-[#f8fafc] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-black tracking-[4px] text-amber-500">
            المشاريع
          </p>

          <h2 className="text-3xl font-black text-[#1F4E8C] md:text-5xl">
            نماذج من أعمالنا
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects?.map((project, index) => {
            const imageUrl = project.image
              ? urlFor(project.image).url()
              : "/images/Hero.jpg";

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={project.title || "AFAQ ENERGY Project"}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-7 text-right">
                  <h3 className="text-2xl font-black text-[#1F4E8C]">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {project.description}
                  </p>

                  <button className="mt-6 rounded-full bg-amber-500 px-6 py-3 font-bold text-white transition hover:bg-amber-600">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}