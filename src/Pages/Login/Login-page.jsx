import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/userReducer";
import { Link } from "react-router-dom";

let name = "";

class LoginPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="login-page">
        <input
          onChange={(e) => {
            name = e.target.value;
          }}
          placeholder="Login Here!"
        />
        <Link to="/main">
          <button
            onClick={() => {
              this.props.loginUser(name);
            }}
          >
            Enter
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer,
  };
};

export default connect(null, { loginUser })(LoginPage);
