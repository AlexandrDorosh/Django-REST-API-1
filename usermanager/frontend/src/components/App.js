import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store";

import Users from "../components/user/User";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Users />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
