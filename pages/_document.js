// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const globalStyles = `
  html {
      box-sizing: border-box;
      font-size: 10px;
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      postion: absolute;
      top:0;
      padding: 0;
      margin: 0;
      background: #fcfcfc;
      font-size: 1.2rem;
    }
    .crimson{
      color: #b20601;
    }
    a {
      text-decoration: none;
      color: #393939;
    }
  `;

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <style>{globalStyles}</style>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
