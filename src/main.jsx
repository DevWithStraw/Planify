import React from "react";
import ReactDOM from "react-dom/client";

//packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//pages
import Home from "./pages/home";

//components
import AddButton from "./components/add-button";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <AddButton />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
