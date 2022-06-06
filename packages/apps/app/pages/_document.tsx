/* eslint-disable react/display-name */
import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal();
    }
  }

  render() {    
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Richard Antao"/>
          <meta name="application" content="Husky Proficient"/>
        </Head>
        <body>
          <Main />
          <div id="portal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
