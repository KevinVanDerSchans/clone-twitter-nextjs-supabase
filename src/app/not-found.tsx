import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center'>
      <h1 className='text-4xl font-bold text-red-600'>404 - Page Not Found</h1>
      <p className='mt-4 text-lg text-gray-600'>Sorry, the page you are looking for does not exist.</p>
      <Link
        href='/'
        className='mt-6 text-blue-600 underline hover:text-blue-800'
      >
        Go back to Home
      </Link>
    </div>
  )
}