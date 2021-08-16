import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {AppHome} from "./home/AppHome";

const queryClient = new QueryClient();

export default function Root(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppHome />
    </QueryClientProvider>
  );
}
