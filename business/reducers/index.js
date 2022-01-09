import { combineReducers } from "redux";
import character from "./character";
import comics from "./comics";

export default combineReducers({
  character: character,
  comics:comics
});
