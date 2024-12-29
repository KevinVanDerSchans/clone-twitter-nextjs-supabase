import { AuthButtonServer } from '@auth/components/AuthButtonServer'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*')
  const { data: users } = await supabase.from('users').select('*')

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <span>HomePage</span>

      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <AuthButtonServer />
    </div>
  )
}
