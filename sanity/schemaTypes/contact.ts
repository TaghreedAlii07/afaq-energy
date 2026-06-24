import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({
      name: "titleAr",
      title: "Arabic Title",
      type: "string",
      initialValue: "جاهزون لخدمة مشروعك",
    }),
    defineField({
      name: "titleEn",
      title: "English Title",
      type: "string",
      initialValue: "Ready To Support Your Project",
    }),
    defineField({
      name: "descriptionAr",
      title: "Arabic Description",
      type: "text",
      rows: 4,
      initialValue:
        "يسعدنا استقبال استفساراتكم وتقديم الحلول المناسبة لاحتياجاتكم في قطاع الطاقة والصناعة.",
    }),
    defineField({
      name: "descriptionEn",
      title: "English Description",
      type: "text",
      rows: 4,
      initialValue:
        "We are happy to receive your inquiries and provide suitable solutions for your needs in the energy and industrial sectors.",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      initialValue: "+966 597791713",
    }),
    defineField({
      name: "emailPrimary",
      title: "Primary Email",
      type: "string",
      initialValue: "info@afaqenergy.com",
    }),
    defineField({
      name: "emailSales",
      title: "Sales Email",
      type: "string",
      initialValue: "sales@afaqenergy.com",
    }),
    defineField({
      name: "locationAr",
      title: "Arabic Location",
      type: "string",
      initialValue: "المملكة العربية السعودية",
    }),
    defineField({
      name: "locationEn",
      title: "English Location",
      type: "string",
      initialValue: "Saudi Arabia",
    }),
  ],
});