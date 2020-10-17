import "../styles/tailwind.css";
import "../styles/globals.css";
// import "suneditor/dist/css/suneditor.min.css";
// import 'draft-js/dist/Draft.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import { UsercontextProvider, UserContext } from "../context/UserContext";
import { UserInfoProvider } from "../context/UserInfo";
import { ThemeProvider } from "@chakra-ui/core";
function MyApp({ Component, pageProps }) {
  return (
    <UsercontextProvider>
      <UserInfoProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserInfoProvider>
    </UsercontextProvider>
  );
}

export default MyApp;
