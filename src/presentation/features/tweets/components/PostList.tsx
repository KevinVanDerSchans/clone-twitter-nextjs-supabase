import PostCard from '@tweets/components/PostCard'

export function PostList({ posts, users }) {
  const usersMap = new Map(users?.map(user => [user.id, user]))

  const enrichedPosts = posts?.map(post => ({
    ...post,
    user: usersMap.get(post.user_id) || null,
  }))

  return (
    <>
      {' '}
      {enrichedPosts?.map(post => {
        const { id, user, content } = post
        const { user_name: userName, name: userFullName, avatar_url: avatarUrl } = user || {}

        return (
          <PostCard
            avatarUrl={avatarUrl || ''}
            content={content}
            key={id}
            userFullName={userFullName || 'Usuario desconocido'}
            userName={userName || 'unknown'}
          />
        )
      })}
    </>
  )
}
