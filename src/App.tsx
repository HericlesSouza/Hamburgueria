import { useContext} from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, mainTheme } from "./styles/GlobalStyle";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { darkMode} = useContext(UserContext);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
        <ToastContainer limit={5} />
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
