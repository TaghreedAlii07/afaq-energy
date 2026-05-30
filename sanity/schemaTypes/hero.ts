import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small English Text",
      type: "string",
      initialValue: "MRO SUPPLY CHAIN SOLUTIONS",
    }),
    defineField({
      name: "titleLine1",
      title: "Arabic Title Line 1",
      type: "string",
      initialValue: "حلول سلاسل الإمداد",
    }),
    defineField({
      name: "titleLine2",
      title: "Arabic Title Line 2",
      type: "string",
      initialValue: "للصيانة والإصلاح والتشغيل",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      initialValue:
        "نقدم حلول MRO متكاملة لإدارة سلاسل الإمداد وتوريد المعدات والمواد الصناعية لضمان استمرارية التشغيل بأعلى مستويات الجودة والكفاءة.",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});