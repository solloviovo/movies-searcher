import React, { Component } from 'react';
import './film-card.component.css';

class FilmCard extends Component {
  render() {
    const cardElement = (
      <div className="film-card">
        <h3 className="film-title">I am title</h3>
        <h4 className="film-subtitle">I am subtitle</h4>
        <p className="film-description">Hello world</p>
      </div>
    );
    return cardElement;
  }
}

export default FilmCard;
