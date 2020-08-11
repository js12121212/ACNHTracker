import {
  SET_FISH_FILTER,
  SET_BUGS_FILTER,
  SET_UNDERSEA_FILTER,
  SET_HEMISPHERE_FILTER,
  SET_TIME_FILTER,
  SET_HOUR,
  SET_MONTH,
  FETCH_MUSEUM_DATA,
  ADD_TO_MUSEUM_DATA,
  REMOVE_FROM_MUSEUM_DATA,
} from "./types";

export const setFishFilter = () => {
  return { type: SET_FISH_FILTER };
};

export const setBugsFilter = () => {
  return { type: SET_BUGS_FILTER };
};

export const setUnderseaFilter = () => {
  return { type: SET_UNDERSEA_FILTER };
};

export const setHemisphereFilter = () => {
  return { type: SET_HEMISPHERE_FILTER };
};

export const setTimeFilter = (timeOption) => {
  return { type: SET_TIME_FILTER, payload: timeOption };
};

export const setHour = (hour) => {
  return { type: SET_HOUR, payload: hour };
};

export const setMonth = (month) => {
  return { type: SET_MONTH, payload: month };
};

export const fetchMuseumData = () => {
  return { type: FETCH_MUSEUM_DATA };
};

export const addToMuseumData = () => {
  return { type: ADD_TO_MUSEUM_DATA };
};
export const removeFromMuseumData = () => {
  return { type: REMOVE_FROM_MUSEUM_DATA };
};