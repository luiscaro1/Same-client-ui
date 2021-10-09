import React from "react";
import { Provider } from "react-redux";
import "../global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import propTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createWrapper } from "next-redux-wrapper";
import store from "../services/redux";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#36F499",
      },

      secondary: {
        main: "#fefcfc",
      },

     
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.instanceOf(Object),
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
