import { type Database } from '@sharedTypes/database'

type PostEntity = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Views']['users']['Row']

export type Post = PostEntity & {
  user: UserEntity | null
}
