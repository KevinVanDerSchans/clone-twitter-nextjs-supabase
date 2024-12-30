import type { Metadata } from 'next'
import { Providers } from '@app/providers'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Login with GitHub and create your own Tweets',
  authors: [{ name: 'Kevin van der Schans Delgado' }],
  keywords:
    'Twitter Clone, Social Media, Create Tweets, GitHub Login, Supabase, Authentication, Next.js, React, TailwindCSS',
  applicationName: 'Twitter Clone',
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
