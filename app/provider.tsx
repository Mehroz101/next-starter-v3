// app/provider.tsx
"use client";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import QueryProvider from "@/query/Provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  // quick debug visible in browser console
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[Providers] mounted (client). store present:", !!store);
  }

  return (
    <ReduxProvider store={store}>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
  );
}
