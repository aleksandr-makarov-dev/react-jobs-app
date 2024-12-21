import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query";
import { Register } from "./users/register";
import { Login } from "./users/login";
import { Vacancy } from "./(main)/vacancy";

export function App() {
  return (
    <Suspense>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Provider>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="vacancy" element={<Vacancy />} />
                </Route>
                <Route path="/users">
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Provider>
        </QueryClientProvider>
      </HelmetProvider>
    </Suspense>
  );
}
