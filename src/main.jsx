import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "flowbite/dist/flowbite.min.js";

import UserContextProvider from "./Context/UserContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// for server query management
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// this component to follow the query 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContexProvider from "./Context/CartContext.jsx";


const queryClient=new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
    <UserContextProvider>
      <CartContexProvider>
      <App />
      </CartContexProvider>
    </UserContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
