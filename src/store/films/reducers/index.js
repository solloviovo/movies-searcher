import * as fromActions from '../actions';

const initialMoviesState = {
  movies: null,
  loading: false,
  loaded: false
};

const moviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case fromActions.MoviesActionTypes.LOAD_MOVIES: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromActions.MoviesActionTypes.LOAD_MOVIES_SUCCESS: {
      const films = action.payload;

      const entities = films.reduce(
        (entities, movie) => {
          return {
            ...entities,
            [movie.id]: movie
          };
        },
        {
          ...state.movies
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        movies: entities
      };
    }
    case fromActions.MoviesActionTypes.LOAD_MOVIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
