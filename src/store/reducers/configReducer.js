export const SELECT = 'select';

const initialState = {};

export const config = (state = initialState, action) => {
  switch (action.type) {
    case SELECT:
      const {cellId, value} = action;
      const selections = Object.assign ({}, state.selections, {
        [cellId]: value,
      });

      const newState = {
        ...state,
        selections: selections,
      };
      return newState;
    default:
      return state;
  }
};

export default config;
