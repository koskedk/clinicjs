import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "./pages/inventory/Products";

const queryClient = new QueryClient();

export default function Root(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
}
