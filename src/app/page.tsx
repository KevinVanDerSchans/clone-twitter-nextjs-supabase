import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Database } from '@sharedTypes/database'
import { CreatePostForm } from '@tweets/components/CreatePostForm'
import { PostList } from 'src/presentation/features/tweets/components/PostList'
import { AuthButtonServer } from '@auth/components/AuthButtonServer'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: rawPosts, error: postsError } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
  const { data: rawUsers, error: usersError } = await supabase.from('users').select('id, user_name, name, avatar_url')

  if (postsError || usersError || !rawPosts || !rawUsers) {
    console.error('Error fetching data:', postsError, usersError)
    return <p>Error al cargar datos.</p>
  }

  const usersMap = new Map(rawUsers.map(user => [user.id, user]))

  const posts = rawPosts.map(post => ({
    ...post,
    user: usersMap.get(post.user_id) || null,
  }))

  return (
    <main className='flex min-h-screen bg-black flex-col items-center justify-between'>
      <section className='max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen'>
        <CreatePostForm userAvatarUrl={session.user?.user_metadata?.avatar_url} />

        <PostList
          posts={posts}
          users={rawUsers}
        />
      </section>

      <AuthButtonServer />
    </main>
  )
}
