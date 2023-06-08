import React, { Component, useState } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Professional from './Professional';
import RenderField from './RenderField';
import BasicInfoRender from './BasicInfoRender';
import FormRenderField from './FormRenderField';

class App extends Component {
  constructor() {
    super();
    this.state = {
      basicForm: '',
      educationForm: [],
      professionalForm: [],
      basicFormEdit: false,
      educationFormEdit: false,
      educationEntry: null,
      professionalFormEdit: false,
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

  editEducationForm = (e) => {
    this.setState(
      {
        educationFormEdit: !this.state.educationFormEdit,
        educationEntry: e.target.id,
      },
      () => {
        console.log(this.state.educationEntry);
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
            if (this.state.educationFormEdit) {
              this.setState(
                {
                  educationForm: this.state.educationForm.map((element, index) => {
                    if (index == this.state.educationEntry) {
                      console.log('Teste');
                      return obj;
                    }
                    return element;
                  }),
                  educationFormEdit: false,
                  educationEntry: null,
                },
                () => {
                  console.log(this.state);
                }
              );
            } else {
              this.setState(
                {
                  educationForm: this.state.educationForm.concat(obj),
                  educationFormEdit: false,
                  educationEntry: null,
                },
                () => {
                  console.log(this.state);
                }
              );
            }
            break;
          case 'professionalForm':
            this.setState(
              {
                professionalForm: this.state.professionalForm.concat(obj),
                professionalFormEdit: false,
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
              {!this.state.educationFormEdit && (
                <Education
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.educationFormEdit}
                  infoToEdit={this.state.educationForm[this.state.educationEntry]}
                />
              )}

              {this.state.educationFormEdit && (
                <Education
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.educationFormEdit}
                  infoToEdit={this.state.educationForm[this.state.educationEntry]}
                />
              )}

              <FormRenderField
                infoArray={this.state.educationForm}
                editEducationForm={this.editEducationForm}
              />

              {/* <Education saveInputValue={this.saveInputValue} />
              <FormRenderField
                infoArray={this.state.educationForm}
                editEducationForm={this.editEducationForm}
              /> */}
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
