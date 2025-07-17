import { env } from "@/env.mjs"

export const siteConfig = {
  name: "yoisha",
  author: "yoisha",
  description: "yoisha's personal portfolio website",
  keywords: ["yoisha", "portfolio", "developer", "cryptography", "blockchain"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "yoisha",
    twitter: "https://x.com/yyyoisha",
    github: "https://github.com/y-pakorn",
    email: "mailto:pakorn.nth@hotmail.coom",
  },
  twitter: "@yyyoisha",
  favicon: "/logo.jpg",
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
