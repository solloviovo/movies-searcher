export const MoviesActionTypes = {
  LOAD_MOVIES: '[MOVIES] Load Films',
  LOAD_MOVIES_SUCCESS: '[MOVIES] Load Films Success',
  LOAD_MOVIES_FAIL: '[MOVIES] Load Films Fail',
  SELECT_MOVIE: '[MOVIES] Select Movie',
  UPDATE_MOVIE: '[MOVIES] Update Movie'
};

export const loadMovies = () => ({ type: MoviesActionTypes.LOAD_MOVIES });

export const loadMoviesSuccess = payload => ({
  type: MoviesActionTypes.LOAD_MOVIES_SUCCESS,
  payload
});

export const loadMoviesFail = () => ({
  type: MoviesActionTypes.LOAD_MOVIES_FAIL
});
