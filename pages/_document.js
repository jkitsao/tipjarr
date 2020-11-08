import Document, { Html, Head, Main, NextScript } from "next/document";

// import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta
            name="google-site-verification"
            content="UAmwxXvHuG3pvz4KXqAsc4HQRVqCDk9rpjCxFk9hzqU"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-M1FXHHQC3B`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M1FXHHQC3B', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
