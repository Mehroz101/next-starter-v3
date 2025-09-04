// app/layout.tsx
import "@/app/globals.css";
import { Roboto } from "next/font/google";
import Providers from "../provider";
import Navbar from "@/components/layout/Navbar";
import AppFooter from "@/components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {/* Navbar stays client if it needs to be; it can be a client component itself */}
          <div className="flex justify-center fixed z-50 top-2.5 w-full">
            <Navbar />
          </div>

          <main className="w-full min-h-[calc(100vh-300px)]">{children}</main>

          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
