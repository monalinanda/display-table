import { FETCH_DATA } from "../actions/types";

export default (state = [],action) => {
    console.log(action.payload,"payload")
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload;
    }
    default:
      return state;
  }
};