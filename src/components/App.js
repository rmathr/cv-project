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
      professionalEntry: null,
    };
  }

  editForm = (e) => {
    this.setState({
      basicFormEdit: !this.state.basicFormEdit,
    });
  };

  editEducationForm = (e) => {
    this.setState({
      educationFormEdit: !this.state.educationFormEdit,
      educationEntry: e.target.id,
    });
  };

  editProfessionalForm = (e) => {
    this.setState({
      professionalFormEdit: !this.state.professionalFormEdit,
      professionalEntry: e.target.id,
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
              this.setState({
                educationForm: this.state.educationForm.concat(obj),
                educationFormEdit: false,
                educationEntry: null,
              });
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
              {this.state.basicForm != '' && (
                <div className="basic-form-show">
                  <div className="basic-form-general-info">
                    <RenderField props={this.state.basicForm} />
                  </div>

                  <button onClick={this.editForm}>Edit</button>
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
