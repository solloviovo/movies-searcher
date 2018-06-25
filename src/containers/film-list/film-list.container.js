import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmCard from './../../components/film-card/film-card.component';
import SearchBox from './../search-box/search-box.container';

class FilmList extends Component {
  render() {
    const { movies } = this.props;
    const data = movies ? Object.keys(movies).map(id => movies[id]) : null;
    const cards = data ? (
      data.map(result => <FilmCard data={result} key={result.id} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div className="container">
        <SearchBox />
        <div className="row">{cards}</div>
      </div>
    );
  }
}
const mapToMovies = state => {
  return { movies: state.movies.movies };
};
export default connect(mapToMovies)(FilmList);
