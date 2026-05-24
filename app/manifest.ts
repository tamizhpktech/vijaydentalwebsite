import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Vijay's Dental Clinic",
    short_name: "Vijay Dental",
    description:
      "Expert dental care in Adambakkam, Chennai — teeth whitening, implants, root canal & more.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e54d78",
    icons: [
      {
        src: "/asset/logo8.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/asset/logo8.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
