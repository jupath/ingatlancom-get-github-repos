const initialState = {
  activePageStart: 0,
  activePageEnd: 6,
  pageNumber: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGINATION':
      return {
        ...state,
        activePageStart: action.activePageStart,
        activePageEnd: action.activePageEnd,
        pageNumber: action.pageNumber,
      };
    default:
      return state;
  }
};
