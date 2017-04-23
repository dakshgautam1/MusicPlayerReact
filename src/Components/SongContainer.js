import React, { Component } from 'react';

class SongContainer extends Component {

  render() {
    const { artists, cover_image, song, url, changeSelectedSong } = this.props
    return (
      <li className="list-group-item song-super-container" onClick={() => changeSelectedSong(this.props)}>
        <div className="song-container">
          <img src={cover_image} id="thumbnail-image"/>
          <div className="song-description">
            <h4>{ artists }</h4>
            <h1>{ song }</h1>    
          </div>
        </div>
      </li>
    )
  }
}

export default SongContainer;