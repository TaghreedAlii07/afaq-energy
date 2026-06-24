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
    labelAr,
    labelEn,

    titleLine1Ar,
    titleLine2Ar,

    titleLine1En,
    titleLine2En,

    descriptionAr,
    descriptionEn,

    image
  }
`;

export const contactQuery = groq`
  *[_type == "contact"][0]{
    titleAr,
    titleEn,
    descriptionAr,
    descriptionEn,
    phone,
    emailPrimary,
    emailSales,
    locationAr,
    locationEn
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
  *[_type == "project"] | order(displayOrder asc){
    titleAr,
    titleEn,
    descriptionAr,
    descriptionEn,
    image,
    displayOrder
  }
`;