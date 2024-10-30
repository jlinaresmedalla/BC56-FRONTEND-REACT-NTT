import { FC, PropsWithChildren } from "react";
import { CartProvider } from "@/contexts/CartProvider";
import { AuthProvider } from "@/contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false, retry: false },
    mutations: { retry: false },
  },
});

export const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);
