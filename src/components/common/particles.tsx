"use client"

import { useCallback, useEffect, useState } from "react"
import type { Container, Engine } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

import { cn } from "@/lib/utils"

export function SiteParticles({ className }: { className?: string }) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    init && (
      <Particles
        id="tsparticles"
        className={cn(className)}
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab"],
                parallax: {
                  enable: true,
                  force: 40,
                  smooth: 10,
                },
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.05,
              width: 1,
            },
            collisions: {
              enable: true,
              mode: "bounce",
              bounce: {
                horizontal: {
                  value: 3,
                },
                vertical: {
                  value: 1,
                },
              },
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 0,
            },
          },
          detectRetina: true,
        }}
      />
    )
  )
}
