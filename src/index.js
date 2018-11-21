import React from "react";
import ReactDOM from "react-dom";
import "./Planner/style/custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import PlannerPage from "./Planner/PlannerPage";
import * as serviceWorker from "./serviceWorker";

// if (!global._babelPolyfill) {
//  require('babel-polyfill');
// }
ReactDOM.render(<PlannerPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
