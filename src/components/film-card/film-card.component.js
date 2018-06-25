import React, { Component } from 'react';
import './film-card.component.css';
import moment from 'moment';
import Stars from '../stars/stars.component';

class FilmCard extends Component {
  render() {
    const {
      title,
      poster_path,
      overview,
      release_date,
      vote_average
    } = this.props.data;

    const cardElement = (
      <div className="film col-12 col-md-12 col-lg-6">
        <Stars value={vote_average} />
        <div className="film-card row no-gutters">
          <img
            className="poster-image rounded float-left"
            src={
              'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + poster_path
            }
            alt="poster"
          />
          <div className="col">
            <div className="film-info d-flex flex-column">
              <h3 className="film-title d-flex">{title}</h3>
              <h4 className="film-subtitle d-flex">
                {moment(release_date).format('MMMM DD, YYYY')}
              </h4>
              <p className="film-description d-flex">
                {overview.length > 124
                  ? overview.slice(0, 124) + '...'
                  : overview}
              </p>
              <button
                type="button"
                className="btn btn-primary mt-auto align-self-end">
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    return cardElement;
  }
}

export default FilmCard;
