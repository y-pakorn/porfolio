import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function MainButton({
  href,
  className,
  children,
  ...props
}: ButtonProps & { href: string }) {
  return (
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
}