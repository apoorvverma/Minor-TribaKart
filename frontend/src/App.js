import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import React from "react";
import TopNav from "./components/TopNav";
import CartProvider from "./context/CartProvider";
import Dashboard from "./screens/Dashboard";
const App = () => {
  return (
    <CartProvider>
      <SnackbarProvider maxSnack={3}>
        <TopNav />
        <Dashboard />
      </SnackbarProvider>
    </CartProvider>
  );
};

export default App;
