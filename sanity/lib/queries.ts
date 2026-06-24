import { groq } from "next-sanity";

export const heroQuery = groq`
  *[_type == "hero"][0]{
    "eyebrowAr": coalesce(eyebrowAr, eyebrow),
    eyebrowEn,

    "titleLine1Ar": coalesce(titleLine1Ar, titleLine1),
    titleLine1En,

    "titleLine2Ar": coalesce(titleLine2Ar, titleLine2),
    titleLine2En,

    "descriptionAr": coalesce(descriptionAr, description),
    descriptionEn,

    backgroundImage
  }
`;

export const aboutQuery = groq`
  *[_type == "about"][0]{
    label,
    titleLine1,
    titleLine2,
    description,
    image
  }
`;

export const contactQuery = groq`
  *[_type == "contact"][0]{
    title,
    description,
    phone,
    emailPrimary,
    emailSales,
    location
  }
`;

export const industriesQuery = groq`
  *[_type == "industry"] | order(_createdAt asc){
    "arabicTitle": titleAr,
    "englishTitle": titleEn,
    icon
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc){
    title,
    description,
    image
  }
`;