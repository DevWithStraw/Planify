import React from 'react'
import ReactDOM from "react-dom/client";

import Home from "./pages/home";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
