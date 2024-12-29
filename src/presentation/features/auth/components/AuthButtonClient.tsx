'use client'
import { type Session } from '@supabase/auth-helpers-nextjs'
import { GitHubIcon } from '@constants/Icons'
import { useAuthButtonClient } from '@auth/hooks/useAuthButtonClient'
import { Button } from '@nextui-org/react'

export function AuthButton({ session }: { session: Session | null }) {
  const { handleSignIn, handleSignOut } = useAuthButtonClient()

  return (
    <header className='my-6 text-center'>
      {session === null ? (
        <button
          onClick={handleSignIn}
          type='button'
          className='text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2'
        >
          <GitHubIcon />
          Sign in with Github
        </button>
      ) : (
        <Button onClick={handleSignOut}>Sign out</Button>
      )}
    </header>
  )
}

export default AuthButton
