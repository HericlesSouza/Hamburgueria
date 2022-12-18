import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, mainTheme } from "./styles/GlobalStyle";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer />
        <GlobalStyle />
        <AuthProvider>
          <UserProvider>
            <CartProvider>
              <Routes />
            </CartProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
