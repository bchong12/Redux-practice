const initialState = {
  value1: 0,
  value2: 0,
};

const ADD_NUM = "ADD_NUM";
const MINUS_NUM = "MINUS_NUM";
const RESET_VALUE = "RESET_VALUE";

export function plusTen() {
  return {
    type: ADD_NUM,
  };
}

export function minusTen() {
  return {
    type: MINUS_NUM,
  };
}

export function resetValue1() {
  return {
    type: RESET_VALUE,
  };
}

export default function valueReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUM:
      return { ...state, value1: state.value1 + 10 };
    case MINUS_NUM:
      return { ...state, value1: state.value1 - 10 };
    case RESET_VALUE:
      return { ...state, value1: 0 };
    default:
      return state;
  }
}
