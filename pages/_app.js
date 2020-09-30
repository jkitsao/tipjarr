import "../styles/tailwind.css";
import { UsercontextProvider, UserContext } from "../context/UserContext";
import { ThemeProvider } from "@chakra-ui/core";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UsercontextProvider>
        <Component {...pageProps} />
      </UsercontextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
