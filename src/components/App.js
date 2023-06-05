import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Professional from './Professional';
import RenderField from './RenderField';

let info = [
  {
    title: 'Quality Analyst',
    place: 'Midea Carrier',
    startDate: '02/04/2019',
    endDate: '11/18/2022',
  },
  {
    title: 'Mechanical Engineering',
    place: 'UFRGS',
    startDate: '02/03/2011',
    endDate: '09/18/2018',
  },
];
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <header>cv generator</header>
        <div className="main-content">
          <div className="forms-fill">
            <BasicInfo />
            <Education />
            <Professional />
          </div>
          <div className="cv-show">
            <RenderField props={info[0]} />
            <RenderField props={info[1]} />
          </div>
        </div>
        <footer>rmath</footer>
      </div>
    );
  }
}

export default App;
