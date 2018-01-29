import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  console.log(action)


  switch (action.type) {
    case FETCH_WEATHER:
      if (action.error == true) {
        return
      }
      return [action.payload.data, ...state];
    }
  return state;
}