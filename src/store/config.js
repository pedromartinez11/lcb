export const SELECT = 'select';

export const config = (state, action) => {
  switch (action.type) {
    case SELECT:
      const {cellId, value} = action;
      const selections = {
        ...state.sections,
        [cellId]: value,
      };

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
