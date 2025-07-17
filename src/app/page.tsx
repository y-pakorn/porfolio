"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import HackathonSection from "@/components/hackathon-section"
import { HeroSection } from "@/components/hero-section"
import ProjectSection from "@/components/project-section"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"],
  })

  // Transform scroll progress to scale and opacity
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.3])
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(1px)", "blur(4px)"]
  )

  return (
    <main className="relative">
      <motion.img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzk4N3gxbWZodW1zNzh0dWY3NDZrbnJoYTl3Y2cxcXlxazVzdXhhMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8w61HSu6xQjoa2NzKN/giphy.gif"
        alt="Gradient"
        className="fixed inset-0 -z-10 h-screen w-screen object-cover blur-sm"
        style={{
          scale,
          opacity,
          filter,
        }}
      />
      <HeroSection ref={containerRef} />
      <ProjectSection />
      <HackathonSection />
    </main>
  )
}
