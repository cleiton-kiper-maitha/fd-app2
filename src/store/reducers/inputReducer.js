const initialState = {
  value: ""
}

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        ...state,
        value: action.value
      };

    case "RESET_VALUE":
      return initialState;

    default: return state;
  }
}