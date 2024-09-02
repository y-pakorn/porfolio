import { Asterisk } from "lucide-react"

import { cn } from "@/lib/utils"

interface TechStackCardProps {
  title: string
  description: string
  className?: string
}

export function TechStackCard({
  title,
  description,
  className,
}: TechStackCardProps) {
  return (
    <div
      className={cn(
        "w-full rounded-md border px-2 py-2 text-start md:px-4",
        className
      )}
    >
      <h2 className="inline-flex items-center gap-1 break-all font-mono font-bold md:text-lg">
        <Asterisk className="size-3 md:size-4" />
        {title}
      </h2>
      <p className="text-xs text-muted-foreground md:text-sm">{description}</p>
    </div>
  )
}
