// import type React from "react"
// import type { Metadata } from "next"
// import { DM_Sans } from "next/font/google"
// import "./globals.css"
// import Header from "./components/Header"
// import Footer from "./components/Footer"

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-dm-sans",
// })

// export const metadata: Metadata = {
//   title: "Faithful Finanace - Your Trusted Financial Partner",
//   description:
//     "Professional financial services including personal loans, home loans, car loans, and business loans with competitive rates and quick approval.",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={dmSans.variable}>
//       <body className="font-sans bg-white text-gray-900">
//         <Header />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }

import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Faithful Finanace - Your Trusted Financial Partner",
  description:
    "Professional financial services including personal loans, home loans, car loans, and business loans with competitive rates and quick approval.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body suppressHydrationWarning className="font-sans bg-white text-gray-900" style={{ wordSpacing: '0.1rem' }}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}