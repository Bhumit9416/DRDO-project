import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DRDO Project - Directed Energy Weapons Dashboard",
  description:
    "Comprehensive analysis and research dashboard for Directed Energy Weapons - DRDO ISSA Internship Project",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
