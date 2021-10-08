import React from "react";
import { Provider } from "react-redux";
import "../global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import propTypes from "prop-types";

import { createWrapper } from "next-redux-wrapper";
import store from "../services/redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: propTypes.Component,
  pageProps: propTypes.pageProps,
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
