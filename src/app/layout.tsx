import type { Metadata } from 'next'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'Twitter Clon',
  description: 'Built with NextJS, ReactTS and Supabase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
