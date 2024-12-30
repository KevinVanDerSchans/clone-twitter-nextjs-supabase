import { Database } from '@sharedTypes/database'
import { type Post } from '@tweets/types/Post'
import { usePostList } from '@tweets/hooks/usePostList'
import PostCard from '@tweets/components/PostCard'

export function PostList({ posts, users }: { posts: Post[]; users: Database['public']['Views']['users']['Row'][] }) {
  const { enrichedPosts } = usePostList({ posts, users })

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
