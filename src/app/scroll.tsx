"use client"

import { ReactNode } from "react"
import { ReactLenis, useLenis } from "lenis/react"

export function Scroll({ children }: { children: ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>
}
