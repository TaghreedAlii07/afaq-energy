import { Mail, MapPin, Phone } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { contactQuery } from "@/sanity/lib/queries";
import ContactForm from "./ContactForm";

type ContactData = {
  title?: string;
  description?: string;
  phone?: string;
  emailPrimary?: string;
  emailSales?: string;
  location?: string;
};

export default async function Contact() {
  const contact = await client.fetch<ContactData>(contactQuery);

  return (
    <section id="contact" className="bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-[#1F4E8C] p-8 text-white md:p-12">
          <p className="mb-4 text-sm font-black tracking-[4px] text-amber-500">
            تواصل معنا
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            {contact?.title || "جاهزون لخدمة مشروعك"}
          </h2>

          <p className="mt-6 leading-8 text-blue-100">
            {contact?.description ||
              "يسعدنا استقبال استفساراتكم وتقديم الحلول المناسبة لاحتياجاتكم في قطاع الطاقة والصناعة."}
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-amber-500" />
              <span>{contact?.phone || "+966 59 779 1713"}</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-amber-500" />
              <span>{contact?.emailPrimary || "info@afaqenergy.com"}</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-amber-500" />
              <span>{contact?.emailSales || "sales@afaqenergy.com"}</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-amber-500" />
              <span>{contact?.location || "Saudi Arabia"}</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}