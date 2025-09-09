"use client";
import '@/app/globals.css';
import Providers from '../provider';
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ["latin"] });

export default function AuthLayoutClient({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
