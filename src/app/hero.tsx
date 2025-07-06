"use client"

import Image from "next/image"
import { SiGithub, SiX } from "@icons-pack/react-simple-icons"
import { motion } from "framer-motion"
import { useLenis } from "lenis/react"
import { ChevronDown } from "lucide-react"

import { siteConfig } from "@/config/site"
import { MainButton } from "@/components/common/main-button"
import SparklesText from "@/components/magicui/sparkles-text"
import TypingAnimation from "@/components/magicui/typing-animation"

export function Hero() {
  const lenis = useLenis()

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2"
      >
        <Image
          src="/logo.jpg"
          width={24}
          height={24}
          alt="Logo"
          className="rounded-full"
        />
        <h2 className="text-lg font-semibold md:text-xl">yoisha</h2>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.05 }}
        className="max-w-3xl text-4xl font-medium md:text-6xl"
      >
        Pioneering the Future of{" "}
        <span className="font-serif">
          Privacy, Cryptography, <span className="font-sans">and</span>{" "}
          Blockchain Applications
        </span>
        .
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <TypingAnimation
          className="text-start font-serif text-base font-bold md:text-center md:text-lg"
          text="Personal Portfolio"
          duration={100}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-sm text-muted-foreground md:max-w-3xl md:text-base"
      >
        Hi! I'm Yoi, a software developer, cryptography engineer, and a privacy
        enthusiast. I'm also a big fan of open-source software and I love to
        contribute to the community. I also love to participate in hackathon!
        Feel free to check out my works and don't hesitate to reach out to me if
        you have any questions or just want to say hi!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="flex items-center gap-2"
      >
        <MainButton href={`https://github.com/${siteConfig.links.github}`}>
          <SiGithub className="size-4" />
          Github
        </MainButton>
        <MainButton href={`https://x.com/${siteConfig.links.twitter}`}>
          <SiX className="size-3" />
          X/Twitter
        </MainButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="absolute bottom-6 flex items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex cursor-pointer items-center gap-2"
          onClick={() => {
            lenis?.scrollTo("#techstack", {
              duration: 2,
            })
          }}
        >
          <SparklesText text="My Works" className="text-2xl font-medium" />
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </>
  )
}
