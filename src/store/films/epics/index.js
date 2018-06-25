import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import * as fromActions from '../actions';

export const getMoviesEpic = action$ =>
  action$.pipe(
    ofType(fromActions.MoviesActionTypes.LOAD_MOVIES),
    mergeMap(() => {
      return ajax(
        'https://api.themoviedb.org/3/discover/movie?api_key=aeedbbc1c390589b1bf19b7876cd9521&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1',
        { withCredentials: true }
      ).pipe(
        map(response =>
          fromActions.loadMoviesSuccess(response.response.results)
        ),
        catchError(() => of(fromActions.loadMoviesFail()))
      );
    })
  );
