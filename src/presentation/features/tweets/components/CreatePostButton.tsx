'use client'

import { useFormStatus } from 'react-dom'

export function ComposePostButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type='submit'
      aria-label='Post yout Tweet'
      className='bg-sky-600 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end'
    >
      {pending ? 'Posting...' : 'Post'}
    </button>
  )
}
