import Link from "next/link"
import { REGISTRY } from "@/constants/registry"
import { ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"

import { Badge } from "../ui/badge"
import { buttonVariants } from "../ui/button"

interface ProjectCardProps {
  title: string
  image: string
  w?: string
  description: string
  website: string
  scope: string
  chain: string
}

export function ProjectCard({
  description,
  image,
  scope,
  title,
  website,
  w,
  chain,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col items-start gap-4 text-start transition-transform duration-500 md:scale-90 md:items-center md:gap-8 md:odd:flex-row-reverse md:odd:text-end md:even:flex-row md:even:text-start md:hover:scale-100">
      <img src={image} alt={title} className="w-[80%] rounded-2xl md:w-[40%]" />
      <div className="flex flex-col gap-2 md:group-odd:items-end md:group-even:items-start">
        <h3 className="font-mono text-xs transition-opacity duration-500 group-hover:opacity-100 md:text-sm md:opacity-0">
          {scope}
        </h3>
        <h2 className="font-serif text-2xl font-bold tracking-wide animate-in md:text-3xl">
          {title}
        </h2>
        <div className="flex items-center gap-2">
          {w && (
            <Link
              href={REGISTRY.organization[w].website}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Badge className="gap-1 px-1" variant="secondary">
                <img
                  src={REGISTRY.organization[w].logo}
                  alt={REGISTRY.organization[w].title}
                  className="size-4 rounded-full"
                />{" "}
                {REGISTRY.organization[w].title}
              </Badge>
            </Link>
          )}
          <Link
            href={REGISTRY.chain[chain].website}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Badge className="gap-1 px-1" variant="secondary">
              <img
                src={REGISTRY.chain[chain].logo}
                alt={REGISTRY.chain[chain].title}
                className="size-4 rounded-full"
              />{" "}
              {REGISTRY.chain[chain].title}
            </Badge>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground md:text-base md:leading-5">
          {description}
        </p>
        <Link
          className={cn(
            buttonVariants({
              variant: "outline-solid",
            }),
            "w-fit rounded-full transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
          )}
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit <ExternalLink className="ml-2 size-3" />
        </Link>
      </div>
    </div>
  )
}
