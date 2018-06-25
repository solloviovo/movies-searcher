import React, { Component } from 'react';
import './film-card.component.css';
import moment from 'moment';

class FilmCard extends Component {
  render() {
    const { title, poster_path, overview, release_date } = this.props.data;
    const cardElement = (
      <div className="film col-6">
        <div className="film-card row no-gutters">
          <img
            className="poster-image"
            src={
              'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + poster_path
            }
            alt="image"
          />
          <div className="col">
            <div className="film-info">
              <h3 className="film-title">{title}</h3>
              <h4 className="film-subtitle">
                {moment(release_date).format('MMMM DD, YYYY')}
              </h4>
              <p className="film-description">
                {overview.length > 124
                  ? overview.slice(0, 124) + '...'
                  : overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    return cardElement;
  }
}

export default FilmCard;
