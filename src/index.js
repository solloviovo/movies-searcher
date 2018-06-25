import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilmCard from './components/film-card/film-card.component';
import { Provider } from 'react-redux';
import * as fromFilms from './store/films/epics';
import store from './store';
import { rootEpic, epicMiddleware } from './store';

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <FilmCard />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fromFilms.getFilms());
