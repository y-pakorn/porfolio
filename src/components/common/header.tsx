import { ReactNode } from "react"
import { Separator } from "@/components/ui/separator"

export function Header({
  title,
  subtitle,
}: {
  title: ReactNode
  subtitle: ReactNode
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <Separator orientation="horizontal" className="flex-1" />
        <h2 className="text-2xl font-extrabold md:text-3xl">{title}</h2>
        <Separator orientation="horizontal" className="flex-1" />
      </div>
      <p className="text-sm text-muted-foreground md:text-base">{subtitle}</p>
    </div>
  )
}