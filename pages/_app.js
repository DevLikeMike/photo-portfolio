import "../styles/index.scss";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../config/ThemeConfig";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
