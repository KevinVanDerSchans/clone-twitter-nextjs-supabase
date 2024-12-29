import { Database } from '@sharedTypes/database'
import { type Post } from '@tweets/types/Post'
import PostCard from '@tweets/components/PostCard'

export function PostList({ posts, users }: { posts: Post[]; users: Database['public']['Views']['users']['Row'][] }) {
  const usersMap = new Map(users?.map(user => [user.id, user]))

  const enrichedPosts: Post[] = posts?.map(post => ({
    ...post,
    user: usersMap.get(post.user_id) || null,
  }))

  return (
    <>
      {enrichedPosts?.map(post => {
        const { id, user, content } = post
        const { user_name: userName, name: userFullName, avatar_url: avatarUrl } = user || {}

        return (
          <PostCard
            avatarUrl={avatarUrl || ''}
            content={content}
            key={id}
            userFullName={userFullName || 'Unknown user'}
            userName={userName || 'Unknown'}
          />
        )
      })}
    </>
  )
}
