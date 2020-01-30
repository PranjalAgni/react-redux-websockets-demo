import React, { Component } from 'react';
import './Gif.css';
export default class Gif extends Component {
  render() {
    const { data } = this.props;
    const { searchTerm, images } = data;
    console.log('Gif component', images.length);
    console.log('Searched: ', searchTerm);

    return (
      <div className="gifs">
        {images.map((g, idx) => (
          <img key={idx} alt={`${searchTerm}-${idx}`} src={g} />
        ))}
      </div>
    );
  }
}
