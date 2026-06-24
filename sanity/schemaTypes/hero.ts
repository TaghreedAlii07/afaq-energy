import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrowAr",
      title: "Small Text Arabic",
      type: "string",
      initialValue: "حلول سلاسل الإمداد MRO",
    }),
    defineField({
      name: "eyebrowEn",
      title: "Small Text English",
      type: "string",
      initialValue: "MRO SUPPLY CHAIN SOLUTIONS",
    }),

    defineField({
      name: "titleLine1Ar",
      title: "Arabic Title Line 1",
      type: "string",
      initialValue: "حلول سلاسل الإمداد",
    }),
    defineField({
      name: "titleLine1En",
      title: "English Title Line 1",
      type: "string",
      initialValue: "MRO Supply Chain",
    }),

    defineField({
      name: "titleLine2Ar",
      title: "Arabic Title Line 2",
      type: "string",
      initialValue: "للصيانة والإصلاح والتشغيل",
    }),
    defineField({
      name: "titleLine2En",
      title: "English Title Line 2",
      type: "string",
      initialValue: "Maintenance, Repair & Operations",
    }),

    defineField({
      name: "descriptionAr",
      title: "Arabic Description",
      type: "text",
      rows: 4,
      initialValue:
        "نقدم حلول MRO متكاملة لإدارة سلاسل الإمداد وتوريد المعدات والمواد الصناعية لضمان استمرارية التشغيل بأعلى مستويات الجودة والكفاءة.",
    }),
    defineField({
      name: "descriptionEn",
      title: "English Description",
      type: "text",
      rows: 4,
      initialValue:
        "We provide integrated MRO supply chain solutions, industrial equipment, and materials to support operational continuity with the highest standards of quality and efficiency.",
    }),

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});