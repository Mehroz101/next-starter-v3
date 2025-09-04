import '@/app/globals.css';

export default function AuthLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
