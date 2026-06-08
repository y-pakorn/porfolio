import Link from "next/link"
import { ExternalLink, Trophy } from "lucide-react"

import { HACKATHONS } from "@/config/works"
import { cn } from "@/lib/utils"

import { Badge } from "./ui/badge"

export default function HackathonSection() {
  return (
    <div className="container flex min-h-screen flex-col gap-4 py-6 md:py-12">
      <div>
        <h2 className="font-serif text-2xl font-bold md:text-5xl">
          HACKATHONS
        </h2>
        <p className="text-secondary-foreground text-sm md:text-base">
          {"A collection of hackathons I've participated in."}
        </p>
      </div>

      <div className="max-w-full space-y-8 overflow-x-hidden md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
        {HACKATHONS.map((hackathon) => {
          return (
            <div
              key={hackathon.title}
              className={cn("space-y-1 md:space-y-2 md:py-2")}
            >
              <div
                className={cn(
                  "group hover:text-foreground text-foreground inline-flex items-center gap-1 font-serif text-2xl font-bold md:gap-3 md:text-3xl"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hackathon.atIcon}
                  alt={hackathon.at}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "mr-2 size-8 shrink-0 rounded-sm md:mr-0 md:size-10"
                  )}
                />
                <h3 className={cn("mt-2")}>{hackathon.title}</h3>
              </div>
              <p className="text-secondary-foreground text-xs text-wrap md:text-sm">
                {hackathon.description}
              </p>
              <div className="flex items-center gap-2 py-2">
                {hackathon.links.map(([label, link], i) => (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    <Badge variant="secondary">
                      {label} <ExternalLink className="size-4" />
                    </Badge>
                  </Link>
                ))}
              </div>
              <div className="font-serif text-lg leading-5 font-medium md:space-y-1 md:text-lg">
                {hackathon.prizes.map(([prize, link], i) => (
                  <Link
                    key={i}
                    className="flex items-center gap-2 hover:underline"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Trophy className="size-3.5 shrink-0 md:size-4" />
                    <span className="mt-1.5">{prize}</span>
                    <ExternalLink className="size-3.5 shrink-0 md:size-4" />
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
