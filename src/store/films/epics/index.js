import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export const FilmsActionTypes = {
  GET_FILMS: 'GET_FILMS',
  ADD_FILMS: 'ADD_FILMS',
  SELECT_FILM: 'SELECT_FILM',
  UPDATE_FILM: 'UPDATE_FILM'
};

export const getFilms = () => ({ type: FilmsActionTypes.GET_FILMS });
export const addFilms = payload => ({
  type: FilmsActionTypes.ADD_FILMS,
  payload
});

export const getFilmsEpic = action$ =>
  action$.pipe(
    ofType(FilmsActionTypes.GET_FILMS),
    mergeMap(action => {
      console.log(action);
      return ajax(
        'https://api.themoviedb.org/3/discover/movie?api_key=aeedbbc1c390589b1bf19b7876cd9521&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1',
        { withCredentials: true }
      ).pipe(map(response => addFilms(response.response.results)));
    })
  );
