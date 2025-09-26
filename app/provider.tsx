"use client";

import React, { useEffect } from "react";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import QueryProvider from "@/query/Provider";
import { setHydrated, setUser } from "@/redux/slices/userSlice";

// This runs only inside ReduxProvider
function AuthInitializer() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken");
      const rawUser = localStorage.getItem("user");
      if (token && rawUser) {
        const user = JSON.parse(rawUser);
        dispatch(setUser({ user, token }));
      } else {
        dispatch(setHydrated(true));
      }
    } catch {
      dispatch(setHydrated(true));
    }
  }, [dispatch]);
  return null;
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
