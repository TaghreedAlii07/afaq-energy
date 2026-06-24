import { Mail, MapPin, Phone } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { contactQuery } from "@/sanity/lib/queries";
import ContactForm from "./ContactForm";

type ContactData = {
  titleAr?: string;
  titleEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  phone?: string;
  emailPrimary?: string;
  emailSales?: string;
  locationAr?: string;
  locationEn?: string;
};

export default async function Contact({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const contact = await client.fetch<ContactData>(
    contactQuery,
    {},
    { cache: "no-store" }
  );

  const isEnglish = lang === "en";

  const title = isEnglish ? contact?.titleEn : contact?.titleAr;
  const description = isEnglish
    ? contact?.descriptionEn
    : contact?.descriptionAr;
  const location = isEnglish ? contact?.locationEn : contact?.locationAr;

  return (
    <section
      id="contact"
      dir={isEnglish ? "ltr" : "rtl"}
      className="bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div
          className={`rounded-3xl bg-[#1F4E8C] p-8 text-white md:p-12 ${
            isEnglish ? "text-left" : "text-right"
          }`}
        >
          <p className="mb-4 text-sm font-black tracking-[4px] text-amber-500">
            {isEnglish ? "CONTACT US" : "تواصل معنا"}
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            {title ||
              (isEnglish
                ? "Ready To Support Your Project"
                : "جاهزون لخدمة مشروعك")}
          </h2>

          <p className="mt-6 leading-8 text-blue-100">
            {description ||
              (isEnglish
                ? "We are happy to receive your inquiries and provide suitable solutions for your needs."
                : "يسعدنا استقبال استفساراتكم وتقديم الحلول المناسبة لاحتياجاتكم.")}
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
              <span>
                {location ||
                  (isEnglish ? "Saudi Arabia" : "المملكة العربية السعودية")}
              </span>
            </div>
          </div>
        </div>

        <ContactForm lang={lang} />
      </div>
    </section>
  );
}