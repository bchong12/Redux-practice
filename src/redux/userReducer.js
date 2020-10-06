import axios from "axios";

const initialState = {
  name: "Branden",
  message: "Initial Message",
};

const LOGIN_USER = "LOGIN_USER";
const MESSAGE = "MESSAGE";

export const loginUser = (name) => {
  return {
    type: LOGIN_USER,
    payload: name,
  };
};

export const messageServer = () => {
  let data = axios.get("/api/data").then((res) => {
    return res.data.message;
  });

  return {
    type: MESSAGE,
    payload: data,
  };
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, name: action.payload };
    case MESSAGE + "_FULFILLED":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
