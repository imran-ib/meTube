import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../components/Utills/withData";
import { ToastContainer, toast } from "react-toastify";
import Meta from "../components/Meta/Meta";
import { GlobalStyle } from "../Styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Meta />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
export default withData(MyApp);
