import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rising Hands Alliance - Humanitarian Aid in North Eastern Kenya",
  description:
    "Rising Hands Alliance is a humanitarian organization dedicated to helping those in need in refugee camps and marginalized areas in North Eastern Kenya.",
  icons: {
    icon: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1740999487/zldbzioedvx0s0lqiaxl.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}