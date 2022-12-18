import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, mainTheme } from "./styles/GlobalStyle";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
        <ToastContainer limit={5} />
        <GlobalStyle />
        <CartProvider>
          <Routes />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;