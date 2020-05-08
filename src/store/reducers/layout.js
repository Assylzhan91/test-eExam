import {IS_OPENED} from "../actions/actionTypes";

const initialState = {
  isOpened: false
}

export const layoutReducer = (state = initialState, action)=>{
  switch (action.type) {
    case IS_OPENED:
      return {
        ...state,
        isOpened: !state.isOpened
      }
      
    default:
      return state
  }
}
