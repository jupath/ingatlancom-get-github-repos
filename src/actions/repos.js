export const setLoading = isLoading => ({
  type: 'SET_LOADING',
  isLoading,
});

export const setError = error => ({
  type: 'SET_ERROR',
  error,
});

export const getRepos = reposList => ({
  type: 'GET_REPOS',
  reposList,
});

export const startGettingRepos = user => async (dispatch) => {
  const url = `https://api.github.com/users/${user}/repos?per_page=100`;

  dispatch(setLoading(true));

  try {
    const response = await fetch(url);
    const reposList = await response.json();

    if (reposList.message === 'Not Found') {
      dispatch(setLoading(false));
      dispatch(setError(`There is no user with username: ${user}`));
    } else if (Array.isArray(reposList) && reposList.length === 0) {
      dispatch(setLoading(false));
      dispatch(setError(`${user} has no public repos.`));
    } else {
      dispatch(setLoading(false));
      dispatch(setError(false));
      dispatch(getRepos(reposList));
    }
  } catch (e) {
    dispatch(setError(e));
  }
};
