import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "titleAr",
      title: "Arabic Title",
      type: "string",
    }),

    defineField({
      name: "titleEn",
      title: "English Title",
      type: "string",
    }),

    defineField({
      name: "descriptionAr",
      title: "Arabic Description",
      type: "text",
    }),

    defineField({
      name: "descriptionEn",
      title: "English Description",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],
});