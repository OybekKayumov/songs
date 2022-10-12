import React from "react";

// action creator
//* named export
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

export default selectSong;

