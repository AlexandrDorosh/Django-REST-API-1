import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUsers } from "../../actions/users";

class Users extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log("PROPS => ", this.props);
    return (
      <Fragment>
        <div className="outer-container">
          <h1>User Manager Table</h1>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="priority-200">
                <td className="name">TESmart KVM Switch HDMI Device</td>
                <td className="clicks">857</td>
                <td className="priority">
                  <i className="fas fa-circle"></i> 200
                </td>
                <td className="impressions">190</td>
                <td className="delete">
                  <button className="delete-btn">
                    <i className="fas fa-trash-alt" title="delete row"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("Main state: ", state);
  return {
    users: state.users.users,
  };
};
export default connect(mapStateToProps, { getUsers })(Users);
