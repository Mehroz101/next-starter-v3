'use client'
import AppFooter from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import "@/app/globals.css";
import { Roboto } from 'next/font/google'
import Providers from '../provider';
const roboto = Roboto({
  subsets: ['latin'],
})
export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <div className=' flex justify-center fixed z-50 top-2.5 w-full'>
            <Navbar />
          </div>
          <main className='w-full min-h-[calc(100vh-300px)]'>{children}</main>
          <AppFooter />
        </Providers>
      </body>
    </html >
  )
}
