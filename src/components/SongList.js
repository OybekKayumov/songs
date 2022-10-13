import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    // how to make use of the React Redux library to get data from Redux store into a React component
    // this.props === { songs: state.songs }
    console.log('this.props: ', this.props);
    return (
      <div>
        SongList
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state: ', state);
  // return state

  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList);