export const FilmsActionTypes = {
  ADD_FILMS: 'ADD_FILMS',
  SELECT_FILM: 'SELECT_FILM',
  UPDATE_FILM: 'UPDATE_FILM'
};

export function addFilms(payload) {
  return { type: FilmsActionTypes.ADD_FILMS, payload };
}

export function selectFilm(filmId) {
  return { type: FilmsActionTypes.selectFilm, filmId };
}

export function updateFilm(filmId) {
  return { type: FilmsActionTypes.UPDATE_FILM, filmId };
}
