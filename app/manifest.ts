import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MARKEX Trading Academy",
    short_name: "MARKEX",
    description: "Structured educational programs on financial markets and trading. Learn. Analyze. Trade. Grow.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      { src: "/brand/markex-mark.png", sizes: "128x128", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
