import React, { Component, useState } from 'react';
import Header from './Header';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Professional from './Professional';
import RenderField from './RenderField';
import BasicInfoRender from './BasicInfoRender';
import FormRenderField from './FormRenderField';
import RenderEducationCV from './RenderEducationCV';
import RenderProfessionalCV from './RenderProfessionalCV';

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
      professionalEntry: null,
    };
  }

  editForm = (e) => {
    this.setState({
      basicFormEdit: !this.state.basicFormEdit,
    });
  };

  editEducationForm = (id) => {
    this.setState({
      educationFormEdit: !this.state.educationFormEdit,
      educationEntry: id,
    });
  };

  editProfessionalForm = (id) => {
    this.setState({
      professionalFormEdit: !this.state.professionalFormEdit,
      professionalEntry: id,
    });
  };

  deleteValue = (obj) => {
    for (let key in this.state) {
      if (key === obj.form) {
        switch (obj.form) {
          case 'educationForm':
            if (this.state.educationFormEdit) {
              this.setState({
                educationForm: this.state.educationForm.filter((element, index) => {
                  if (index != this.state.educationEntry) {
                    return element;
                  }
                }),
                educationFormEdit: false,
                educationEntry: null,
              });
            }
            break;
          case 'professionalForm':
            if (this.state.professionalFormEdit) {
              this.setState({
                professionalForm: this.state.professionalForm.filter((element, index) => {
                  if (index != this.state.professionalEntry) {
                    return element;
                  }
                }),
                professionalFormEdit: false,
                professionalEntry: null,
              });
            }
            break;
        }
      }
    }
  };

  saveInputValue = (obj) => {
    for (let key in this.state) {
      if (key === obj.form) {
        switch (obj.form) {
          case 'basicForm':
            this.setState({
              basicForm: obj,
              basicFormEdit: false,
            });
            break;
          case 'educationForm':
            if (this.state.educationFormEdit) {
              this.setState({
                educationForm: this.state.educationForm.map((element, index) => {
                  if (index == this.state.educationEntry) {
                    return obj;
                  }
                  return element;
                }),
                educationFormEdit: false,
                educationEntry: null,
              });
            } else {
              this.setState(
                {
                  educationForm: this.state.educationForm.concat(obj),
                  educationFormEdit: false,
                  educationEntry: null,
                },
                () => {
                  console.log(this.state.educationForm);
                }
              );
            }
            break;
          case 'professionalForm':
            if (this.state.professionalFormEdit) {
              this.setState({
                professionalForm: this.state.professionalForm.map((element, index) => {
                  if (index == this.state.professionalEntry) {
                    return obj;
                  }
                  return element;
                }),
                professionalFormEdit: false,
                professionalEntry: null,
              });
            } else {
              this.setState({
                professionalForm: this.state.professionalForm.concat(obj),
                professionalFormEdit: false,
              });
            }
            break;
        }
      }
    }
  };

  render() {
    return (
      <div className="main-container">
        <header className="main-header">
          <Header />
        </header>
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
              {this.state.basicForm != '' && (
                <div className="basic-form-show">
                  <div className="basic-form-general-info">
                    <RenderField props={this.state.basicForm} />
                  </div>

                  <button onClick={this.editForm} className="edit-form">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 -960 960 960"
                        width="48"
                        className="svg-edit"
                      >
                        <path d="M480-120v-71l216-216 71 71-216 216h-71ZM120-330v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29 29ZM120-495v-60h470v60H120Zm0-165v-60h470v60H120Z" />
                      </svg>
                      <span></span>
                      Edit
                    </span>
                  </button>
                </div>
              )}
            </div>
            <div className="education-form-fill">
              {!this.state.educationFormEdit && (
                <Education
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.educationFormEdit}
                  infoToEdit={this.state.educationForm[this.state.educationEntry]}
                  deleteValue={this.deleteValue}
                />
              )}

              {this.state.educationFormEdit && (
                <Education
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.educationFormEdit}
                  infoToEdit={this.state.educationForm[this.state.educationEntry]}
                  deleteValue={this.deleteValue}
                />
              )}

              <FormRenderField
                infoArray={this.state.educationForm}
                editForm={this.editEducationForm}
              />
            </div>
            <div className="professional-form-fill">
              {!this.state.professionalFormEdit && (
                <Professional
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.professionalFormEdit}
                  infoToEdit={this.state.professionalForm[this.state.professionalEntry]}
                  deleteValue={this.deleteValue}
                />
              )}

              {this.state.professionalFormEdit && (
                <Professional
                  saveInputValue={this.saveInputValue}
                  isEditing={this.state.professionalFormEdit}
                  infoToEdit={this.state.professionalForm[this.state.professionalEntry]}
                  deleteValue={this.deleteValue}
                />
              )}

              <FormRenderField
                infoArray={this.state.professionalForm}
                editForm={this.editProfessionalForm}
              />
            </div>
          </div>
          <div className="cv-show">
            <div className="cv-section">
              <div className="cv-basic-info">
                <RenderField props={this.state.basicForm} />
              </div>
              <div className="cv-education-info">
                <p className="cv-section-title">Education</p>
                <hr></hr>
                {/* <RenderField props={this.state.educationForm} /> */}
                <RenderEducationCV props={this.state.educationForm} />
              </div>
              <div className="cv-pro-info">
                <p className="cv-section-title">Professional Expercience</p>
                <hr></hr>
                {/* <RenderField props={this.state.professionalForm} /> */}
                <RenderProfessionalCV props={this.state.professionalForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
