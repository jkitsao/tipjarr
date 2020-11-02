import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/landingpage.css";
// import "suneditor/dist/css/suneditor.min.css";
// import 'draft-js/dist/Draft.css';
import * as gtag from "../lib/gtag";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import { UsercontextProvider, UserContext } from "../context/UserContext";
import { UserInfoProvider } from "../context/UserInfo";
import { ThemeProvider } from "@chakra-ui/core";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
//Binding events for nprogress
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
// Track pageviews when changing routes
Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
//render application
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
