// import moment from "moment";
// import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import { connect } from 'react-redux'

// import { Header, Guidelines } from "./base";
import "./index.css";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
