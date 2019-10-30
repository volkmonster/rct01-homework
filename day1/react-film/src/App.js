import React, { Component } from 'react';
import './App.css';
import Filmlist from './Filmlist';
import TMDB from './TMDB';
import Filmdetail from './Filmdetail';

class App extends Component {
  render() {

    return (
      <div className="film-library">
        <Filmlist films={TMDB.films}/>
        <Filmdetail/>
      </div>

    );
  }
}

export default App;
