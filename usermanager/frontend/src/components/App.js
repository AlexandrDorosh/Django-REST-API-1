import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Components
import UsersList from "../components/usersList/usersList";

class App extends React.Component {
  apiURL = "http://localhost:8000/api/users/";

  state = {
    UsersList: [],
  };

  componentDidMount() {
    this.updateService();
  }

  updateService() {
    fetch(this.apiURL)
      .then((request) => {
        return request.json();
      })
      .then((data) => {
        this.setState({
          UsersList: data,
        });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    // console.log("State => ", this.state.UsersList);
    return (
      <Fragment>
        <UsersList UsersList={this.state.UsersList} />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
