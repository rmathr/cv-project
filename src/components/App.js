import React, { Component, useState } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Professional from './Professional';
import RenderField from './RenderField';
import BasicInfoRender from './BasicInfoRender';
import OpenForms from './openForms';

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
      educationForm: [],
      professionalForm: [],
      basicFormEdit: false,
    };
  }

  editForm = (e) => {
    this.setState(
      {
        basicFormEdit: !this.state.basicFormEdit,
      },
      () => {
        console.log(this.state.basicFormEdit);
      }
    );
  };

  saveInputValue = (obj) => {
    for (let key in this.state) {
      if (key === obj.form) {
        switch (obj.form) {
          case 'basicForm':
            this.setState(
              {
                basicForm: obj,
                basicFormEdit: false,
              },
              () => {
                console.log(this.state);
              }
            );
            break;
          case 'educationForm':
            this.setState(
              {
                educationForm: this.state.educationForm.concat(obj),
              },
              () => {
                console.log(this.state);
              }
            );
            break;
          case 'professionalForm':
            this.setState(
              {
                professionalForm: this.state.professionalForm.concat(obj),
              },
              () => {
                console.log(this.state);
              }
            );
            break;
        }
      }
    }
  };

  render() {
    return (
      <div className="main-container">
        <header>cv generator</header>
        <div className="main-content">
          <div className="forms-fill">
            <div className="basic-form-fill">
              {!this.state.basicFormEdit && (
                <BasicInfo
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.basicFormEdit}
                  infoToEdit={this.state.basicForm}
                />
              )}
              {this.state.basicFormEdit && (
                <BasicInfo
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.basicFormEdit}
                  infoToEdit={this.state.basicForm}
                />
              )}

              <div className="basic-form-show">
                <div className="basic-form-general-info">
                  <RenderField props={this.state.basicForm} />
                </div>
                {this.state.basicForm != '' && (
                  <button onClick={this.editForm}>Edit</button>
                )}
              </div>
            </div>
            <div className="education-form-fill">
              <Education saveInputValue={this.saveInputValue} />
            </div>
            <div className="professional-form-fill">
              <Professional saveInputValue={this.saveInputValue} />
            </div>
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
          </div>
        </div>
        <footer>rmath</footer>
      </div>
    );
  }
}

export default App;
