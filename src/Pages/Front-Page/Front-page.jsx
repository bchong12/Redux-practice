import React from "react";
import { connect } from "react-redux";
import { plusTen, minusTen, resetValue1 } from "../../redux/valueReducer";
import { messageServer } from "../../redux/userReducer";

const FrontPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.user.name} Will Learn Redux!</h1>
      <h2>{props.value.value1}</h2>
      <button onClick={props.plusTen}>+10</button>
      <button onClick={props.minusTen}>-10</button>
      <button onClick={props.resetValue1}>RESET</button>
      <p>{props.user.message}</p>
      <button onClick={props.messageServer}>Change Message</button>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer,
    value: reduxState.valueReducer,
  };
};

export default connect(mapStateToProps, {
  plusTen,
  minusTen,
  resetValue1,
  messageServer,
})(FrontPage);
