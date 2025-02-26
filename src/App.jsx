import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Prices from "./pages/Prices";
import Invoices from "./pages/Invoices";

const queryClient = new QueryClient({
  // 10 seconds * 1000 milliseconds
  defaultOptions: { queries: { staleTime: 10 * 1000 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="customers" element={<Customers />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="prices" element={<Prices />} />
          </Route>

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={10}
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 4000 },

          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "10px 15px",
            backgroundColor: "var(--color-neutral-100)",
            color: "var(--color-neutral-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
