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

    // this.state = {
    //   basicForm: '',
    // };
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

    // this.setState(
    //   {
    //     basicForm: obj,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
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
            <BasicInfoRender
              title={info[0].title}
              place={info[0].place}
              startDate={info[0].startDate}
              endDate={info[0].endDate}
            />
            <BasicInfoRender
              title={info[1].title}
              place={info[1].place}
              startDate={info[1].startDate}
              endDate={info[1].endDate}
            />
            <div>
              <p>{this.state.basicForm.firstName}</p>
              <p>{this.state.basicForm.lastName}</p>
              <p>{this.state.basicForm.email}</p>
              <p>{this.state.basicForm.phone}</p>
              <p>{this.state.basicForm.address}</p>
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
