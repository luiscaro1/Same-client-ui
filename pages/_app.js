import React from "react";
import { Provider, useDispatch } from "react-redux";
import "../global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import propTypes from "prop-types";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createWrapper } from "next-redux-wrapper";
import store from "../services/redux";
import { authActions } from "../services/redux/store/actions";

function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch();

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

  const verifyAuth = () => {
    dispatch(authActions.verifyAuth());
  };

  React.useEffect(() => {
    verifyAuth();
  }, []);

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
