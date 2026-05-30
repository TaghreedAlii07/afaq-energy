import { defineField, defineType } from "sanity";

export const industry = defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({ name: "titleAr", title: "Arabic Title", type: "string" }),
    defineField({ name: "titleEn", title: "English Title", type: "string" }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          "Fuel",
          "Drill",
          "Zap",
          "Factory",
          "Building2",
          "Wheat",
          "Ship",
          "Cog",
        ],
      },
    }),
  ],
});