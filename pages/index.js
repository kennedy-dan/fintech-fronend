import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 const router = useRouter()

  useEffect(() => {
    router.push('/dashboard')
  }, [router])
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    </main>
  )
}
