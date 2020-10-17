import "../styles/tailwind.css";
import "../styles/globals.css";
// import "suneditor/dist/css/suneditor.min.css";
// import 'draft-js/dist/Draft.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import { UsercontextProvider, UserContext } from "../context/UserContext";
import { UserInfoProvider } from "../context/UserInfo";
import { ThemeProvider } from "@chakra-ui/core";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/fav.png" />
      </Head>
      <UsercontextProvider>
        <UserInfoProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </UserInfoProvider>
      </UsercontextProvider>
    </>
  );
}

export default MyApp;
