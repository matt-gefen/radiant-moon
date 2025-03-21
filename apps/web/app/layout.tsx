import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google"

import "@radiant-moon/ui/globals.css"
import { Providers } from "@/components/providers"



// const fontSans = Geist({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
