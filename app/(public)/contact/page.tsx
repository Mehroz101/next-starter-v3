// app/(public)/contact/page.tsx
import type { Metadata } from "next";
import ContactusPage from "./ContactPageClient";

export const metadata: Metadata = {
  title: "YourBrand – Contact Us",
  description: "Get in touch with the YourBrand team for support, partnerships, or inquiries.",
};

export default function ContactPage() {
  return <ContactusPage />;
}
