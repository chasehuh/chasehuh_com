import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "~/lib/metadata";
import { siteUrl } from "~/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Chase Huh",
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    id: siteUrl,
  };
}
