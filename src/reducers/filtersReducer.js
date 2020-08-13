import {
  SET_FISH_FILTER,
  SET_BUGS_FILTER,
  SET_UNDERSEA_FILTER,
  SET_HEMISPHERE_FILTER,
  SET_TIME_FILTER,
  SET_HOUR,
  SET_MONTH,
} from "../actions/types";

var d = new Date();
var hour = d.getHours();
var month = d.getMonth() + 1;
const INITIAL_STATE = {
  fishFilter: true,
  bugsFilter: true,
  underseaFilter: true,
  hemisphereFilter: "North",
  timeFilter: "Now",
  hour: hour,
  month: month,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FISH_FILTER:
      var fishFilter = state.fishFilter;
      return { ...state, fishFilter: !fishFilter };
    case SET_BUGS_FILTER:
      var bugsFilter = state.bugsFilter;
      return { ...state, bugsFilter: !bugsFilter };
    case SET_UNDERSEA_FILTER:
      var underseaFilter = state.underseaFilter;
      return { ...state, underseaFilter: !underseaFilter };
    case SET_HEMISPHERE_FILTER:
      var hemisphereFilter = state.hemisphereFilter;
      hemisphereFilter === "North"
        ? (hemisphereFilter = "South")
        : (hemisphereFilter = "North");
      return { ...state, hemisphereFilter: hemisphereFilter };
    case SET_TIME_FILTER:
      var timeFilter = action.payload;
      switch (timeFilter) {
        case "Now":
          timeFilter = "Now";

          hour = d.getHours();
          month = d.getMonth() + 1;
          break;
        case "Time":
          timeFilter = "Time";
          break;
        default:
          timeFilter = "All";
          break;
      }
      return { ...state, timeFilter: timeFilter, hour: hour, month: month };
    case SET_HOUR:
      var hourChoice = parseInt(action.payload);
      if (hourChoice >= 0 && hourChoice <= 23) {
        hour = hourChoice;
      }
      return { ...state, hour: hour, timeFilter: "Time" };
    case SET_MONTH:
      var monthChoice = parseInt(action.payload);
      if (monthChoice >= 1 && monthChoice <= 12) {
        month = monthChoice;
      }
      return { ...state, month: month, timeFilter: "Time" };

    default:
      return state;
  }
};
