import './app.css'
import '@fontsource-variable/eb-garamond'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Champagne Tango',
  description: 'Champagne Tango',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <meta name="viewport" content="width=device-width" />
        <title>Champagne Tango</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
