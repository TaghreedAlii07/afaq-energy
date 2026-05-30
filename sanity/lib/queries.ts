import { groq } from "next-sanity";

export const heroQuery = groq`
  *[_type == "hero"][0]{
    eyebrow,
    titleLine1,
    titleLine2,
    description,
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
  *[_type == "industry"] | order(displayOrder asc){
    arabicTitle,
    englishTitle,
    icon,
    displayOrder
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(displayOrder asc){
    title,
    description,
    image
  }
`;