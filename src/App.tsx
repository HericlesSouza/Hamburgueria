import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, mainTheme } from "./styles/GlobalStyle";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer
       
        />
        <GlobalStyle />
        <UserProvider>
          <Routes />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
