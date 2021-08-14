import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Main } from "./components/Main";

const queryClient = new QueryClient();

export default function Root(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}
