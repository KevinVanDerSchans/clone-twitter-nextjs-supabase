import { Database } from '@sharedTypes/database'
import { type Post } from '@tweets/types/Post'

export function usePostList({ posts, users }: { posts: Post[]; users: Database['public']['Views']['users']['Row'][] }) {
  const usersMap = new Map(users?.map(user => [user.id, user]))

  const enrichedPosts: Post[] = posts?.map(post => ({
    ...post,
    user: usersMap.get(post.user_id) || null,
  }))

  return { enrichedPosts }
}
