import React from "react";
import { selectedSong } from '../actions/index';
import SongList from "./SongList";
import './App.css';

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  )
}

export default App;