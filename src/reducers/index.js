import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import museumDataReducer from "./museumDataReducer";

export default combineReducers({
  filters: filtersReducer,
  museumItems: museumDataReducer,
});
