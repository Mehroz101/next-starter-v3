// redux/Provider.tsx
'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode } from 'react';

export default function ReduxProvider({ children }: { readonly children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
