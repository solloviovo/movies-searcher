import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as fromMoviesActions from './store/films/actions';
import store from './store';
import { rootEpic, epicMiddleware } from './store';
import FilmList from './containers/film-list/film-list.container';
import { BrowserRouter } from 'react-router-dom';

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FilmList />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fromMoviesActions.loadMovies());
