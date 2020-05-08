const initialState = {
  isOpened: false
}

export const reducerLayout = (state = initialState, action)=>{
  switch (action.type) {
    case 'IS_OPENED':
      return {
        ...state,
        isOpened: !state.isOpened
      }
      
    default:
      return state
  }
}
