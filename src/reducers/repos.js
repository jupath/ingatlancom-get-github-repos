const initialState = {
  isLoading: false,
  error: false,
  reposList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REPOS':
      return {
        ...state,
        isLoading: false,
        error: false,
        reposList: action.reposList,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
