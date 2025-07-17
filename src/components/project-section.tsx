"use client"

import { useState } from "react"
import Link from "next/link"
import _ from "lodash"
import { ArrowUpRight, Asterisk } from "lucide-react"

import { REGISTRY } from "@/config/registry"
import { PROJECTS } from "@/config/works"
import { cn } from "@/lib/utils"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(
    PROJECTS[0].title
  )
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Reset loading state when project changes
  const handleProjectClick = (title: string) => {
    setSelectedProject(title)
    setIsLoading(true)
  }

  return (
    <div className="container flex min-h-screen flex-col gap-4 py-6 md:py-12">
      <div>
        <h1 className="font-serif text-2xl font-bold md:text-5xl">PROJECTS</h1>
        <p className="text-secondary-foreground text-sm md:text-base">
          {"A collection of projects I've previously and currently worked on."}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-1 md:gap-2">
        {PROJECTS.map((project) => {
          const isSelected = selectedProject === project.title
          return (
            <div
              key={project.title}
              className={cn(
                "flex h-full shrink-0 cursor-pointer flex-col gap-1 md:gap-2",
                isSelected ? "flex-1 md:py-6" : "hidden md:flex"
              )}
              onClick={() => handleProjectClick(project.title)}
            >
              {isSelected && (
                <div className="relative mb-2 flex-1 md:mb-4">
                  {isLoading && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-md" />
                  )}
                  <iframe
                    src={project.website}
                    className="absolute inset-0 h-full w-full rounded-md"
                    title={project.title}
                    onLoad={handleIframeLoad}
                  />
                </div>
              )}
              <div
                className={cn(
                  "group hover:text-foreground inline-flex items-center gap-1 md:gap-2",
                  isSelected ? "text-foreground" : "text-muted-foreground/75"
                )}
              >
                {isSelected && <Asterisk className="size-6 md:size-14" />}
                <h2
                  className={cn(
                    "mt-1 font-serif font-bold md:text-3xl",
                    isSelected && "mt-2 text-xl md:text-5xl"
                  )}
                >
                  {project.title}
                </h2>
                <Link href={project.website} target="_blank">
                  <ArrowUpRight className="size-4 md:size-8" />
                </Link>
              </div>
              {isSelected && (
                <>
                  <h3 className="font-mono text-sm font-medium md:text-xl">
                    {project.scope}
                  </h3>
                  <p className="text-secondary-foreground text-xs md:text-base">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {project.w && (
                      <Badge
                        variant="outline"
                        className="md:px-2.5 md:py-1.5 md:text-sm"
                      >
                        <img
                          src={REGISTRY.organization[project.w].logo}
                          className="size-4 shrink-0 rounded-full"
                        />
                        <span>{REGISTRY.organization[project.w].title}</span>
                      </Badge>
                    )}
                    {project.chain && (
                      <Badge
                        variant="outline"
                        className="md:px-2.5 md:py-1.5 md:text-sm"
                      >
                        <img
                          src={REGISTRY.chain[project.chain].logo}
                          className="size-4 shrink-0 rounded-full"
                        />
                        <span>{REGISTRY.chain[project.chain].title}</span>
                      </Badge>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
      <div className="flex items-center gap-2 overflow-y-auto md:hidden">
        {PROJECTS.map((project) => {
          const isSelected = selectedProject === project.title
          return (
            <Button
              key={project.title}
              variant={isSelected ? "secondary" : "outline"}
              className="w-fit"
              onClick={() => handleProjectClick(project.title)}
            >
              {project.title}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
