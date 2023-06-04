import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Professional from './Professional';

class App extends Component {
  render() {
    return (
      <div>
        <header>cv generator</header>
        <button>view</button>
        <BasicInfo />
        <Education />
        <Professional />
      </div>
    );
  }
}

export default App;
