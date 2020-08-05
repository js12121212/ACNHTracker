//import _ from "lodash";
import {
  FETCH_MUSEUM_DATA,
  ADD_TO_MUSEUM_DATA,
  REMOVE_FROM_MUSEUM_DATA,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MUSEUM_DATA:
      return state;
    case ADD_TO_MUSEUM_DATA:
      return state;
    case REMOVE_FROM_MUSEUM_DATA:
      return state;
    default:
      return state;
  }
};
