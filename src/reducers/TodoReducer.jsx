const initialState = [];

export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTODO':
      return [...state, action.payload];
    case 'REMOVETODO':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};
