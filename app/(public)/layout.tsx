// app/layout.tsx
import "@/app/globals.css";
import { Roboto } from "next/font/google";
import Providers from "../provider";
import Navbar from "@/components/layout/Navbar";
import AppFooter from "@/components/layout/Footer";
import { env } from "@/config/env";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "YourBrand – Smarter Spending, Saving & Investing",
    template: "%s | YourBrand",
  },
  description: "Spend, save, and invest smarter with YourBrand.",
  keywords: ["finance app", "save money", "invest", "budgeting", "YourBrand"],
  openGraph: {
    title: "YourBrand – Finance Made Simple",
    description: "Spend, save, and invest smarter with YourBrand.",
    url: env.NEXT_PUBLIC_API_URL,
    siteName: "YourBrand",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YourBrand Finance App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourBrand",
    description: "Spend, save, and invest smarter with YourBrand.",
    images: ["/og-image.png"],
  },
};  
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
