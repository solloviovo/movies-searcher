import { FilmsActionTypes } from '../epics';

const initialFilmState = {
  films: null,
  loading: false,
  loaded: false
};

const moviesReducer = (state = initialFilmState, action) => {
  switch (action.type) {
    case FilmsActionTypes.GET_FILMS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case FilmsActionTypes.ADD_FILMS: {
      const films = action.payload;

      const entities = films.reduce(
        (entities, film) => {
          return {
            ...entities,
            [film.id]: film
          };
        },
        {
          ...state.films
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        films: entities
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
