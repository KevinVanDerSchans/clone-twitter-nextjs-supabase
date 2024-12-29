import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostList } from 'src/presentation/features/tweets/components/PostList'
import { AuthButtonServer } from '@auth/components/AuthButtonServer'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*')
  const { data: users } = await supabase.from('users').select('id, user_name, name, avatar_url')

  return (
    <main className='flex min-h-screen bg-black flex-col items-center justify-between'>
      <section className='max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen'>
        <PostList
          posts={posts}
          users={users}
        />
      </section>

      <AuthButtonServer />
    </main>
  )
}
