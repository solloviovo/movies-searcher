import React, { Component } from 'react';
import './film-card.component.css';

class FilmCard extends Component {
  render() {
    const cardElement = (
      <div className="FilmCard">
        <h3 class="title">I am title</h3>
        <h4 class="subtitle">I am subtitle</h4>
        <p class="description">Hello world</p>
      </div>
    );
    return cardElement;
  }
}

export default FilmCard;
