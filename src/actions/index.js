import api from "../api/api";
import {  FETCH_DATA} from "./types";

export const fetchData = () => {
  return async (dispatch) => {
    const response = await api.get("/photos");
    dispatch({ type: FETCH_DATA, payload: response.data });
  };
};

// export const deleteRow = (key)=> ({
//     type:"DELETE_DATA",
//     payload: key
// })
  