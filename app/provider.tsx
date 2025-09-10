"use client";

import React, { useEffect } from "react";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import QueryProvider from "@/query/Provider";
import { useAuth } from "@/hooks/useAuth";
import { setUser } from "@/redux/slices/userSlice";

// This runs only inside ReduxProvider
function AuthInitializer() {
  const { isAuthenticated } = useAuth()
  const dispatch = useDispatch()
  useEffect(() => {

    const token = localStorage.getItem("accessToken")
    if (!isAuthenticated && token) {
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      dispatch(setUser({ user, token }))
    }
  }, [])

  return null
}

export default function Providers({ children }: { readonly children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <QueryProvider>
        <AuthInitializer />
        {children}
      </QueryProvider>
    </ReduxProvider>
  );
}
