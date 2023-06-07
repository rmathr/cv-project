import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Professional from './Professional';
import RenderField from './RenderField';
import BasicInfoRender from './BasicInfoRender';

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
  constructor() {
    super();
    this.state = {
      basicForm: '',
      educationForm: '',
      professionalForm: '',
    };
  }

  saveInputValue = (obj) => {
    for (let key in this.state) {
      if (key === obj.form) {
        const newState = {};
        newState[obj.form] = obj;
        this.setState(newState, () => {
          console.log(this.state);
        });
      }
    }
  };

  render() {
    return (
      <div className="main-container">
        <header>cv generator</header>
        <div className="main-content">
          <div className="forms-fill">
            <BasicInfo saveInputValue={this.saveInputValue} />
            <Education saveInputValue={this.saveInputValue} />
            <Professional saveInputValue={this.saveInputValue} />
          </div>
          <div className="cv-show">
            <div className="cv-basic-info">
              <RenderField props={this.state.basicForm} />
            </div>
            <div className="cv-education-info">
              <p className="cv-section-title">Education</p>
              <hr></hr>
              <RenderField props={this.state.educationForm} />
            </div>
            <div className="cv-pro-info">
              <p className="cv-section-title">Professional Expercience</p>
              <hr></hr>
              <RenderField props={this.state.professionalForm} />
            </div>

            {/* <RenderField props={info[0]} />
            <RenderField props={info[1]} /> */}
          </div>
        </div>
        <footer>rmath</footer>
      </div>
    );
  }
}

export default App;
