import { combineReducers, createStore, applyMiddleware } from 'redux';
import moviesReducer from './films/reducers';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { getFilmsEpic } from './films/epics';

const rootReducer = combineReducers({
  movies: moviesReducer
});

export const rootEpic = combineEpics(getFilmsEpic);

export const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware)
);

export default store;
