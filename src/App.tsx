import Router from "../Router";
import { GlobalStyle } from "../sytles/themes/global";
import { defaultTheme } from "../sytles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffesAddedToCartContextProvider } from "./context/coffesAddedToCart";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CoffesAddedToCartContextProvider>
            <Router />
          </CoffesAddedToCartContextProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
