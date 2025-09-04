// app/providers.tsx
"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import QueryProvider from "@/query/Provider";

export default function Providers({ children }: { readonly children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
  );
}
