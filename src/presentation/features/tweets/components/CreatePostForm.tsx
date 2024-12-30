'use client'

import { ComposePostButton } from '@tweets/components/CreatePostButton'
import { addPost } from '@tweets/actions/AddPostAction'
import { useRef } from 'react'
import { Avatar } from '@nextui-org/react'

export function CreatePostForm({ userAvatarUrl }: { userAvatarUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      action={async formData => {
        await addPost(formData)
        formRef.current?.reset()
      }}
      className='flex flex-row p-3 border-b border-white/20'
    >
      <div className='flex w-full gap-x-2'>
        <div className='p-1'>
          <Avatar
            radius='full'
            size='md'
            src={userAvatarUrl}
          />
        </div>

        <div className='flex flex-1 flex-col gap-y-4'>
          <textarea
            name='content'
            rows={4}
            placeholder='What is going on?'
            className='w-full text-sm text-white placeholder-gray-500 p-3'
          ></textarea>
          <ComposePostButton />
        </div>
      </div>
    </form>
  )
}
