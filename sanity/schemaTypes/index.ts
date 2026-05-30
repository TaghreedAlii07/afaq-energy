import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

const hero = defineType({
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
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "من نحن",
    }),
    defineField({
      name: "titleLine1",
      title: "Title Line 1",
      type: "string",
      initialValue: "خبرة صناعية",
    }),
    defineField({
      name: "titleLine2",
      title: "Title Line 2",
      type: "string",
      initialValue: "بمعايير عالمية",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

const contact = defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "جاهزون لخدمة مشروعك",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      initialValue: "+966 59 779 1713",
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
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Saudi Arabia",
    }),
  ],
});

const industry = defineType({
  name: "industry",
  title: "Industry",
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
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Fuel", value: "Fuel" },
          { title: "Drill", value: "Drill" },
          { title: "Zap", value: "Zap" },
          { title: "Factory", value: "Factory" },
          { title: "Building", value: "Building2" },
          { title: "Wheat", value: "Wheat" },
          { title: "Ship", value: "Ship" },
          { title: "Cog", value: "Cog" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});

const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, contact, industry, project],
};