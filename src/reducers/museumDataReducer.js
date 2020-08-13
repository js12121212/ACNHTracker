import { FETCH_MUSEUM_DATA, SET_MUSEUM_DATA } from "../actions/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MUSEUM_DATA:
      return state;
    case SET_MUSEUM_DATA:
      return { ...state, [action.payload.id]: action.payload.value };
    default:
      return state;
  }
};
