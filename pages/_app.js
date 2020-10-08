import "../styles/tailwind.css";
import "../styles/globals.css";
// import "suneditor/dist/css/suneditor.min.css";
import "draft-js/dist/Draft.css";
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
