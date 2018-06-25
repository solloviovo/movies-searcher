import React, { Component } from 'react';
import './search-box.container.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Find movie..."
      />
    );
  }
}

export default SearchBox;
