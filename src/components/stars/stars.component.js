import React, { Component } from 'react';
import './stars.component.css';

class Stars extends Component {
  render() {
    const { value } = this.props;
    const fullStarsNumber = Math.round(value / 2);
    const halfStarsNumber = value / 2 - fullStarsNumber > 0 ? 1 : 0;
    const emptyStarsNumber = 5 - fullStarsNumber - halfStarsNumber;

    const fullStars = Array.from({ length: fullStarsNumber }, (v, k) => k).map(
      (value, index) => (
        <i className="material-icons" key={index}>
          star
        </i>
      )
    );

    const halfStars = Array.from({ length: halfStarsNumber }, (v, k) => k).map(
      (value, index) => (
        <i className="material-icons" key={index}>
          star_half
        </i>
      )
    );

    const emptyStars = Array.from(
      { length: emptyStarsNumber },
      (v, k) => k
    ).map((value, index) => (
      <i className="material-icons" key={index}>
        star_border
      </i>
    ));

    return (
      <div className="stars">
        {fullStars}
        {halfStars}
        {emptyStars}
      </div>
    );
  }
}

export default Stars;
