import { Nunito_Sans } from "next/font/google"

import "@radiant-moon/ui/globals.css"
import { Providers } from "../components/providers"

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
