import Link from "next/link"
import { TECH_STACK } from "@/constants/tech-stack"
import { HACKATHONS, PROJECTS } from "@/constants/work"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { HackathonCard } from "@/components/common/hackathon-card"
import { Header } from "@/components/common/header"
import { SiteParticles } from "@/components/common/particles"
import { ProjectCard } from "@/components/common/project-card"
import { TechStackCard } from "@/components/common/tech-stack"
import Marquee from "@/components/magicui/marquee"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"

import { Hero } from "./hero"
import { Scroll } from "./scroll"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden overscroll-none scroll-smooth md:text-center">
      <Scroll>
        <div className="left-1/2 right-1/2 top-0 z-10 -ml-[50vw] -mr-[50vw] flex h-full w-screen flex-col items-center bg-background pl-8 pr-8 *:z-10">
          <div className="absolute left-0 top-0 h-screen w-full">
            <div className="h-full w-full bg-[url('/gradient.webp')] bg-cover bg-bottom bg-no-repeat opacity-30" />
          </div>
          <SiteParticles className="absolute left-0 top-0 h-screen w-full md:p-12" />
          <div className="relative flex h-screen max-w-5xl flex-col justify-center gap-2 self-center md:items-center md:gap-4">
            <Hero />
          </div>

          <div
            className="relative flex w-full flex-col gap-2 py-8 md:max-w-5xl md:gap-4"
            id="techstack"
          >
            <Header
              title="Tech Stacks"
              subtitle="Here are some of the technologies I'm familiar with."
            />
            <div className="relative hidden md:block">
              <Marquee>
                {TECH_STACK.slice(0, TECH_STACK.length / 2).map((tech, i) => (
                  <TechStackCard
                    key={i}
                    title={tech.title}
                    description={tech.description}
                    className="max-w-72"
                  />
                ))}
              </Marquee>
              <Marquee reverse>
                {TECH_STACK.slice(-TECH_STACK.length / 2).map((tech, i) => (
                  <TechStackCard
                    key={i}
                    title={tech.title}
                    description={tech.description}
                    className="max-w-72"
                  />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white dark:from-background" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white dark:from-background" />
            </div>
            <div className="flex flex-col gap-1 md:hidden">
              {TECH_STACK.map((tech, i) => (
                <TechStackCard
                  key={i}
                  title={tech.title}
                  description={tech.description}
                />
              ))}
            </div>
          </div>

          <div className="relative flex w-full flex-col gap-2 py-8 md:max-w-5xl md:gap-4">
            <Header
              title="Projects"
              subtitle="Additional projects that I've worked on or contributed to."
            />
            <div className="h-4" />
            <div className="space-y-6 md:space-y-8">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </div>

          <div className="relative flex w-full flex-col gap-2 py-8 md:max-w-5xl md:gap-4">
            <Header
              title="Hackathons/Bounties"
              subtitle="I love to participate in hackathons! Here are some of my works
              from the hackathons I've joined."
            />
            <div className="mt-4 grid gap-8 md:grid-cols-2 md:gap-2">
              {HACKATHONS.map((hackathon, i) => (
                <HackathonCard
                  key={i}
                  title={hackathon.title}
                  description={hackathon.description}
                  date={hackathon.date.toLocaleDateString()}
                  tags={hackathon.tags}
                  prizes={hackathon.prizes}
                  links={hackathon.links}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none h-96" />
        <div className="light pointer-events-auto fixed bottom-0 flex h-96 w-full flex-col gap-2 py-8 text-foreground md:gap-4">
          <div className="absolute left-1/2 right-1/2 top-0 z-[-1] -ml-[50vw] -mr-[50vw] h-full w-screen bg-background" />
          <VelocityScroll
            text="CONTACT"
            className="text-4xl font-black tracking-wider md:text-5xl"
          />
          <div className="container flex flex-1 flex-col gap-6">
            <Separator />
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-around">
              <div className="text-start text-2xl font-semibold md:text-3xl">
                <h2 className="text-xl text-muted-foreground md:text-2xl">
                  X/TWITTER
                </h2>
                <Link
                  href={`https://x.com/${siteConfig.links.twitter}`}
                  className="underline transition-colors hover:text-muted-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{siteConfig.links.twitter}
                </Link>
              </div>
              <div className="text-start text-2xl font-semibold md:text-3xl">
                <h2 className="text-xl text-muted-foreground md:text-2xl">
                  GITHUB
                </h2>
                <Link
                  href={`https://github.com/${siteConfig.links.github}`}
                  className="underline transition-colors hover:text-muted-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{siteConfig.links.github}
                </Link>
              </div>
              <div className="text-start text-2xl font-semibold md:text-3xl">
                <h2 className="text-xl text-muted-foreground md:text-2xl">
                  EMAIL
                </h2>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="underline transition-colors hover:text-muted-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.email}
                </Link>
              </div>
            </div>
            <Separator />
            <div className="hidden flex-1 md:flex" />
            <p className="text-xs">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved. <br /> Made with love, coffee,{" "}
              <Link
                href="https://nextjs.org/"
                className="underline transition-colors hover:text-muted-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </Link>
              , and{" "}
              <Link
                href="https://ui.shadcn.com/"
                className="underline transition-colors hover:text-muted-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shadcn
              </Link>
              .
            </p>
          </div>
        </div>
      </Scroll>
    </main>
  )
}
