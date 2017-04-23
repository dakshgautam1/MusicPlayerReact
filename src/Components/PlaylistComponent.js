import React, { Component } from 'react';

import SongContainer from './SongContainer';

class PlaylistComponent extends Component {

  render() {
    const {changeSelectedSong} = this.props

    const songsList = this.props.songsList.map((song) => <SongContainer 
      key={song.url} 
      artists={song.artists} 
      cover_image={song.cover_image} 
      song={song.song} 
      url={song.url} 
      changeSelectedSong={changeSelectedSong}
      />
      )

    return (
      <ul className="list-group">
        { songsList }
      </ul>
    )
  }
}


export default PlaylistComponent;