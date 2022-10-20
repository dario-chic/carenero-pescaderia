import Head from "next/head";
import React from "react";
// import Header from "../Header";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
// import Footer from "./Footer";

const PageLayout = ({ children, title, description, header }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.ico" type="image/ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#151b25" />
        <title>{title || "Pescadería Carenero"}</title>
        <meta
          name="description"
          content={
            description ||
            "Pescadería online en Caracas, los mejores productos al mejor precio."
          }
        />

        <meta name="author" content="Dario Chic" />
        <meta
          name="keywords"
          content="pescadería caracas, pescaderia, pescadería online, caracas pescado, pescado en caracas, pescado barato, pescado fresco caracas"
        />
        <meta name="robots" content="index" />
        {/* <meta name="image" content="portada.webp" /> */}
        <link rel="canonical" href="https://www.pescaderiacarenero.com/" />
        <link rel="apple-touch-icon" sizes="192x192" href="logo192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="logo512x512.png" />

        <meta property="og:title" content="Pescadería Carenero" />
        <meta
          property="og:description"
          content={
            description ||
            "Pescadería online en Caracas, los mejores productos al mejor precio."
          }
        />
        {/* <meta property="og:image" content="portada.webp" /> */}
        <meta property="og:url" content="https://www.pescaderiacarenero.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@dariochic" /> */}
        <meta name="twitter:title" content="Pescadería Carenero" />
        <meta
          name="twitter:description"
          content={
            description ||
            "Pescadería online en Caracas, los mejores productos al mejor precio."
          }
        />
        {/* <meta name="twitter:image" content="portada.webp" /> */}
      </Head>
      <Nav />
      {header && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
