import { ImageResponse } from "next/og"

import { siteConfig } from "@/config/site"

export const alt = `${siteConfig.name} — ${siteConfig.description}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Generated on demand, so the social preview never depends on a static
// asset that might be missing from /public.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.05em" }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#a1a1a1",
            marginTop: 24,
            maxWidth: 880,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    size
  )
}
