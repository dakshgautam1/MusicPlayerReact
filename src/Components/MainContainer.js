import React, { Component } from 'react';

import SearchBar from './SearchBar';
import { apiCall } from '../Utils';
import PlaylistComponent from './PlaylistComponent';
import MusicPlayerContainer from './MusicPlayerContainer';

export default class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state={
      songsList : [],
      selectedSong: null
    }
  }

  changeSelectedSong = (song) => {
    this.setState({
      selectedSong: song
    })
  }
  onSuccessApiCall = (data) => {
    this.setState({
      songsList: data,
      selectedSong: data.length === 0 ? null : data[0]
    })
  }

  onFailureApiCall = (error) => {
    console.log(error)
  }

  componentWillMount() {
    apiCall('http://starlord.hackerearth.com/sureify/cokestudio',{}, 'GET',this.onSuccessApiCall,this.onFailureApiCall)
  }
  render() {
    return (
      <div>
        <SearchBar />
        <MusicPlayerContainer selectedSong={this.state.selectedSong} />
        <PlaylistComponent songsList={this.state.songsList} changeSelectedSong={this.changeSelectedSong}/>
      </div>
    )
  }
}