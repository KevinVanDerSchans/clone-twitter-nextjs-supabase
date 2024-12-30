import type { Metadata } from 'next'
import { Providers } from '@app/providers'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Built with NextJS, ReactTS and Supabase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='dark'
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
