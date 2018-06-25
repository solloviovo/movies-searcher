import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilmCard from './components/film-card/film-card.component';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <FilmCard />
  </Provider>,
  document.getElementById('root')
);
