
import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://prashan081003s-projects.vercel.app"),
  title: {
    default: "Prashan Arya",
    template: "%s | Prashan Arya",
  },
  manifest: "https://prashan081003s-projects.vercel.app/site.webmanifest",
  applicationName: "Prashan Arya Portfolio",
  creator: "Prashan Arya",
  authors: [
    {
      name: "Prashan Arya",
      url: "https://prashan081003s-projects.vercel.app",
    },
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  description: "Web developer",

  openGraph: {
    title: "Prashan Arya",
    description: "Web developer",
    url: new URL("https://prashan081003s-projects.vercel.app"),
    siteName: "Prashan Arya Portfolio",
    images: [`https://prashan081003s-projects.vercel.app/open-graph-image.jpg`],
    locale: "en-US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    title: "Prashan Arya",
    creator: "@PrashanArya", // Replace this if you have a Twitter handle
    card: "summary_large_image",
    images: ["https://prashan081003s-projects.vercel.app/open-graph-image.jpg"],
  },

  keywords: [
    "web development",
    "Front end",
    "Nextjs",
    "Reactjs",
    "Developer",
    "Tailwindcss",
    "Shadcn ui",
  ],
};

export const links = {
  github: "https://github.com/Prashan081003",
  linkedin: "https://linkedin.com/in/prashan-arya-46a516232",
  vercel: "https://vercel.com/prashan081003s-projects",
};
