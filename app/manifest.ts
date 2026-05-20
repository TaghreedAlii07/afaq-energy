import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AFAQ ENERGY",
    short_name: "AFAQ",
    description: "AFAQ ENERGY COMPANY",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6b21a8",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}