export default (activePageStart, activePageEnd, pageNumber) => ({
  type: 'SET_PAGINATION',
  activePageStart,
  activePageEnd,
  pageNumber,
});
