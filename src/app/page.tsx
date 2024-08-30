import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { HACKATHONS } from "@/constants/work"
import { SiGithub, SiX } from "@icons-pack/react-simple-icons"
import _ from "lodash"
import { ChevronDown, ChevronRight, ExternalLink, Trophy } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button, ButtonProps } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import SparklesText from "@/components/magicui/sparkles-text"
import TypingAnimation from "@/components/magicui/typing-animation"

const MainButton = ({
  href,
  className,
  children,
  ...props
}: ButtonProps & {
  href: string
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      {...props}
      className={cn(
        "group gap-2 rounded-full ring-1 ring-transparent ring-offset-2 transition-all duration-300 hover:ring-primary",
        className
      )}
    >
      {children}
      <ChevronRight className="size-4 stroke-2 transition-transform group-hover:translate-x-1" />
    </Button>
  </Link>
)

const Header = ({
  title,
  subtitle,
}: {
  title: ReactNode
  subtitle: ReactNode
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-4">
      <Separator orientation="horizontal" className="flex-1" />
      <h2 className="text-2xl font-extrabold md:text-3xl">{title}</h2>
      <Separator orientation="horizontal" className="flex-1" />
    </div>
    <p className="text-sm text-muted-foreground md:text-base">{subtitle}</p>
  </div>
)

const ProjectCard = ({
  title,
  description,
  date,
  prizes,
  links,
}: {
  title: string
  description: string
  date: string
  tags?: readonly string[]
  prizes?: readonly string[][]
  links?: readonly string[][]
}) => (
  <div className="group flex h-fit cursor-default flex-col items-start gap-2 text-start transition-transform duration-500 md:scale-95 md:hover:scale-100">
    <h4 className="text-sm transition-opacity duration-500 group-hover:opacity-100 md:opacity-0">
      {date}
    </h4>
    <h3 className="font-serif text-xl font-semibold tracking-wide md:text-2xl">
      {title}
    </h3>
    <p className="text-xs text-muted-foreground md:text-sm">{description}</p>
    {links && (
      <div className="flex flex-wrap items-center gap-2 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
        {links.map(([label, url], i) => (
          <Link href={url} key={i} target="_blank" rel="noopener noreferrer">
            <Badge variant="outline">
              {_.startCase(label)}
              <ExternalLink className="ml-1 size-3" />
            </Badge>
          </Link>
        ))}
      </div>
    )}
    <div className="flex flex-col">
      {prizes?.map((p, i) => (
        <div
          key={i}
          className="inline-flex items-center gap-2 font-serif text-sm font-semibold md:text-base"
        >
          <Trophy className="size-4" />
          <span>{p[0]}</span>
        </div>
      ))}
    </div>
  </div>
)

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center overflow-x-hidden overscroll-none md:text-center">
      <div className="container left-1/2 right-1/2 top-0 z-10 -ml-[50vw] -mr-[50vw] flex h-full w-screen flex-col items-center bg-background">
        <div className="relative flex h-screen max-w-[64rem] flex-col justify-center gap-2 self-center md:items-center md:gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              width={24}
              height={24}
              alt="Logo"
              className="rounded-full"
            />
            <h2 className="text-lg font-semibold md:text-xl">yoisha</h2>
          </div>
          <h1 className="max-w-[48rem] text-4xl font-medium md:text-6xl">
            Pioneering the Future of{" "}
            <span className="font-serif">
              Privacy, Cryptography, <span className="font-sans">and</span>{" "}
              Blockchain Applications
            </span>
            .
          </h1>
          <TypingAnimation
            className="text-start font-serif text-base font-bold md:text-center md:text-lg"
            text="Personal Portfolio"
            duration={100}
          />
          <p className="text-sm text-muted-foreground md:max-w-[48rem] md:text-base">
            Hi! I'm Yoi, a software developer, cryptography engineer, and a
            privacy enthusiast. I'm also a big fan of open-source software and I
            love to contribute to the community. I also love to participate in
            hackathon! Feel free to check out my works and don't hesitate to
            reach out to me if you have any questions or just want to say hi!
          </p>
          <div className="flex items-center gap-2">
            <MainButton href={`https://github.com/${siteConfig.links.github}`}>
              <SiGithub className="size-4" />
              Github
            </MainButton>
            <MainButton href={`https://x.com/${siteConfig.links.twitter}`}>
              <SiX className="size-3" />
              X/Twitter
            </MainButton>
          </div>
          <div className="absolute bottom-6 flex animate-bounce items-center gap-2">
            <SparklesText text="My Works" className="text-2xl font-medium" />
            <ChevronDown className="size-4" />
          </div>
        </div>

        {
          //<div className="relative flex w-full flex-col gap-2 py-8 md:max-w-[64rem] md:gap-4">
          //<Header
          //title="Tech Stack"
          //subtitle="Some of the technologies that I've worked with. I'm always open to learning new things and exploring new technologies!"
          ///>
          //</div>
        }

        {
          //<div className="relative flex w-full flex-col gap-2 py-8 md:max-w-[64rem] md:gap-4">
          //<Header
          //title="Projects"
          //subtitle="Here are some of my projects that I've worked on. Some are side gigs, some are personal, some are open-source, and some are just for fun!"
          ///>
          //</div>
        }

        <div className="relative flex flex-col gap-2 py-8 md:max-w-[64rem] md:gap-4">
          <Header
            title="Hackathons/Bounties"
            subtitle="I love to participate in hackathons! Here are some of my works
              from the hackathons I've joined."
          />
          <div className="mt-4 grid gap-8 md:grid-cols-2 md:gap-2">
            {HACKATHONS.map((hackathon, i) => (
              <ProjectCard
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
    </main>
  )
}
