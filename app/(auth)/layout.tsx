import '@/app/globals.css';
import AuthLayoutClient from './AuthLayoutClient';
export const metadata = {
  title: "Login | YourBrand",
  robots: { index: false, follow: false },
};
export default function AuthLayout({ children }: { readonly children: React.ReactNode }) {
  return <AuthLayoutClient>{children}</AuthLayoutClient>;

}
