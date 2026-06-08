import { env } from "@/env.mjs"

export const siteConfig = {
  name: "yoisha",
  author: "yoisha",
  description: "yoisha's personal portfolio website",
  keywords: ["yoisha", "portfolio", "developer", "cryptography", "blockchain"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/y-pakorn",
    twitter: "https://x.com/yyyoisha",
    github: "https://github.com/y-pakorn",
    email: "mailto:pakorn.nth@hotmail.com",
  },
  twitter: "@yyyoisha",
  favicon: "/logo.jpg",
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
