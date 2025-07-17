"use client"

import { forwardRef, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"
import { motion } from "motion/react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { InteractiveHoverButton } from "./magicui/interactive-hover-button"
import { ShimmerButton } from "./magicui/shimmer-button"
import { ShinyButton } from "./magicui/shiny-button"

export const HeroSection = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(
        "relative container flex h-screen flex-col items-center justify-center gap-2 text-center md:gap-4",
        className
      )}
      ref={ref}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Image
          src={siteConfig.favicon}
          alt={siteConfig.name}
          width={20}
          height={20}
          className="rounded-full"
        />
        <h1 className="font-serif text-xl font-semibold">{siteConfig.name}</h1>
      </div>
      <h1 className="font-serif text-3xl leading-8 font-semibold tracking-tighter text-shadow-2xs md:text-7xl md:leading-14">
        Pioneering the Future of
        <br />
        <span className="font-bold italic">Privacy, Cryptography,</span>
        <br />
        and <span className="font-bold italic">Blockchain Applications.</span>
      </h1>
      <h2 className="font-mono font-medium md:text-xl">Personal Portfolio</h2>
      <p className="text-primary/85 max-w-full px-4 text-xs leading-4 font-medium md:max-w-lg md:text-base">
        Hi! I'm Yoi, a software developer, cryptography engineer, and a privacy
        enthusiast. I'm also a big fan of open-source software and I love to
        contribute to the community. I also love to participate in hackathon!
        Feel free to check out my works and don't hesitate to reach out to me if
        you have any questions or just want to say hi!
      </p>
      <div className="mt-4 flex items-center gap-1 overflow-hidden md:gap-2">
        <Link href={siteConfig.url.twitter} target="_blank">
          <InteractiveHoverButton className="px-3 py-1 md:px-6 md:py-1.5">
            <div className="flex items-center gap-2">
              <span className="mt-1">Twitter</span>
              <Twitter className="size-4" />
            </div>
          </InteractiveHoverButton>
        </Link>
        <Link href={siteConfig.url.github} target="_blank">
          <InteractiveHoverButton className="px-3 py-1 md:px-6 md:py-1.5">
            <div className="flex items-center gap-2">
              <span className="mt-1">Github</span>
              <Github className="size-4" />
            </div>
          </InteractiveHoverButton>
        </Link>
        <Link href={siteConfig.url.email} target="_blank">
          <InteractiveHoverButton className="px-3 py-1 md:px-6 md:py-1.5">
            <div className="flex items-center gap-2">
              <span className="mt-1">Email</span>
              <Mail className="size-4" />
            </div>
          </InteractiveHoverButton>
        </Link>
      </div>
    </section>
  )
})
