import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Root() {
  const queryClient = new QueryClient();
  return (
    <>
      <Navbar />
      <div id="layout">
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ScrollRestoration />
        </QueryClientProvider>
      </div>
    </>
  );
}
