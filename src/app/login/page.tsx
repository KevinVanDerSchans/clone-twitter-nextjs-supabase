import { AuthButtonServer } from '@auth/components/AuthButtonServer'

export default function Login() {
  return (
    <section className='grid place-content-center min-h-screen text-center'>
      <h1 className='text-xl font-bold mb-4 '>Welcome to Twitter Clon</h1>
      <AuthButtonServer />
    </section>
  )
}
