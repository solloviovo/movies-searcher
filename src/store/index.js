import { combineReducers, createStore } from 'redux';
import moviesReducer from './films/reducers';

const rootReducer = combineReducers({
  movies: moviesReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
