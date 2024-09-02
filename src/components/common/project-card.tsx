import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Trophy } from "lucide-react"
import _ from "lodash"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  tags?: readonly string[]
  prizes?: readonly string[][]
  links?: readonly string[][]
}

export function ProjectCard({
  title,
  description,
  date,
  prizes,
  links,
}: ProjectCardProps) {
  return (
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
}