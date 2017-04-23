import React, { Component } from 'react';

import ReactAudioPlayer from 'react-audio-player';


class MusicPlayerContainer extends Component {

  render() {
    if (!this.props.selectedSong) {
      return <h3>Loading .... </h3>
    }
    const { selectedSong } = this.props

    return (
      <div>
        <h1>Name of the song : {selectedSong.song}</h1>
        <ReactAudioPlayer src={selectedSong.url} />
        <img src={selectedSong.cover_image} id="thumbnail-image"/>
      </div>
    )
  }
}

export default MusicPlayerContainer