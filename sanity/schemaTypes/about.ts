import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "labelAr",
      title: "Arabic Label",
      type: "string",
      initialValue: "من نحن",
    }),

    defineField({
      name: "labelEn",
      title: "English Label",
      type: "string",
      initialValue: "ABOUT US",
    }),

    defineField({
      name: "titleLine1Ar",
      title: "Arabic Title Line 1",
      type: "string",
      initialValue: "خبرة صناعية",
    }),

    defineField({
      name: "titleLine2Ar",
      title: "Arabic Title Line 2",
      type: "string",
      initialValue: "بمعايير عالمية",
    }),

    defineField({
      name: "titleLine1En",
      title: "English Title Line 1",
      type: "string",
      initialValue: "Industrial Expertise",
    }),

    defineField({
      name: "titleLine2En",
      title: "English Title Line 2",
      type: "string",
      initialValue: "With Global Standards",
    }),

    defineField({
      name: "descriptionAr",
      title: "Arabic Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "descriptionEn",
      title: "English Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});