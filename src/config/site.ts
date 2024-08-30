import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "yoisha",
  author: "yoisha",
  email: env.NEXT_PUBLIC_EMAIL,
  description:
    "Pioneering the Future of Privacy, Cryptography, and Blockchain Applications.",
  keywords: [
    "Personal Portfolio",
    "Portfolio",
    "Startup",
    "Research and Development",
    "Privacy",
    "Cryptography",
    "Blockchain",
    "Fully On-chain Games",
    "Blockchain Applications",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://yoisha.dev",
  },
  links: {
    github: "y-pakorn",
    twitter: "yyyoisha",
  },
  ogImage: env.NEXT_PUBLIC_OG_IMG,
}
