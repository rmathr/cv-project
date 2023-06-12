import React, { useState } from 'react';
import Header from './Header';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Professional from './Professional';
import RenderField from './RenderField';
import FormRenderField from './FormRenderField';
import RenderEducationCV from './RenderEducationCV';
import RenderProfessionalCV from './RenderProfessionalCV';
import FormRenderPro from './FormRenderPro';
import SaveCV from './SaveCV';

const App = (props) => {
  const [basicForm, setBasicForm] = useState('');
  const [educationForm, setEducationForm] = useState([]);
  const [professionalForm, setProfessionalForm] = useState([]);
  const [basicFormEdit, setBasicFormEdit] = useState(false);
  const [educationFormEdit, setEducationFormEdit] = useState(false);
  const [educationEntry, setEducationEntry] = useState(null);
  const [professionalFormEdit, setProfessionalFormEdit] = useState(false);
  const [professionalEntry, setProfessionalEntry] = useState(null);

  const editForm = (e) => {
    setBasicFormEdit(!basicFormEdit);
  };

  const editEducationForm = (id) => {
    setEducationFormEdit(!educationFormEdit);
    setEducationEntry(id);
  };

  const editProfessionalForm = (id) => {
    setProfessionalFormEdit(!professionalFormEdit);
    setProfessionalEntry(id);
  };

  const deleteValue = (obj) => {
    switch (obj.form) {
      case 'educationForm':
        if (educationFormEdit) {
          setEducationForm(
            educationForm.filter((element, index) => {
              if (index != educationEntry) {
                return element;
              }
            })
          );
          setEducationFormEdit(false);
          setEducationEntry(null);
        }
        break;
      case 'professionalForm':
        if (professionalFormEdit) {
          setProfessionalForm(
            professionalForm.filter((element, index) => {
              if (index != professionalEntry) {
                return element;
              }
            })
          );
          setProfessionalFormEdit(false);
          setProfessionalEntry(null);
        }
        break;
    }
  };

  const saveInputValue = (obj) => {
    switch (obj.form) {
      case 'basicForm':
        setBasicForm(obj);
        setBasicFormEdit(false);
        break;
      case 'educationForm':
        if (educationFormEdit) {
          setEducationForm(
            educationForm.map((element, index) => {
              if (index == educationEntry) {
                return obj;
              }
              return element;
            })
          );
          setEducationFormEdit(false);
          setEducationEntry(null);
        } else {
          setEducationForm(educationForm.concat(obj));
          setEducationFormEdit(false);
          setEducationEntry(null);
        }
        break;
      case 'professionalForm':
        if (professionalFormEdit) {
          setProfessionalForm(
            professionalForm.map((element, index) => {
              if (index == professionalEntry) {
                return obj;
              }
              return element;
            })
          );
          setProfessionalFormEdit(false);
          setProfessionalEntry(null);
        } else {
          setProfessionalForm(professionalForm.concat(obj));
          setProfessionalFormEdit(false);
        }
        break;
    }
  };

  return (
    <div className="main-container">
      <header className="main-header">
        <Header />
      </header>
      <div className="main-content">
        <div className="forms-fill">
          <div className="save-cv">
            <SaveCV />
          </div>

          <div className="basic-form-fill">
            {!basicFormEdit && (
              <BasicInfo
                saveInputValue={saveInputValue}
                isEditing={basicFormEdit}
                infoToEdit={basicForm}
              />
            )}
            {basicFormEdit && (
              <BasicInfo
                saveInputValue={saveInputValue}
                isEditing={basicFormEdit}
                infoToEdit={basicForm}
              />
            )}
            {basicForm != '' && (
              <div className="basic-form-show">
                <div className="basic-form-general-info">
                  <RenderField props={basicForm} />
                </div>

                <button onClick={editForm} className="edit-form">
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
            {!educationFormEdit && (
              <Education
                saveInputValue={saveInputValue}
                isEditing={educationFormEdit}
                infoToEdit={educationForm[educationEntry]}
                deleteValue={deleteValue}
              />
            )}

            {educationFormEdit && (
              <Education
                saveInputValue={saveInputValue}
                isEditing={educationFormEdit}
                infoToEdit={educationForm[educationEntry]}
                deleteValue={deleteValue}
              />
            )}

            <FormRenderField infoArray={educationForm} editForm={editEducationForm} />
          </div>
          <div className="professional-form-fill">
            {!professionalFormEdit && (
              <Professional
                saveInputValue={saveInputValue}
                isEditing={professionalFormEdit}
                infoToEdit={professionalForm[professionalEntry]}
                deleteValue={deleteValue}
              />
            )}

            {professionalFormEdit && (
              <Professional
                saveInputValue={saveInputValue}
                isEditing={professionalFormEdit}
                infoToEdit={professionalForm[professionalEntry]}
                deleteValue={deleteValue}
              />
            )}

            <FormRenderPro infoArray={professionalForm} editForm={editProfessionalForm} />
          </div>
        </div>
        <div className="cv-show">
          <div className="cv-section" id="cv-report">
            <div className="cv-basic-info">
              <RenderField props={basicForm} />
            </div>
            <div className="cv-education-info">
              {educationForm.length > 0 && <p className="cv-section-title">Education</p>}
              <RenderEducationCV props={educationForm} />
            </div>
            <div className="cv-pro-info">
              {professionalForm.length > 0 && (
                <p className="cv-section-title">Professional Expercience</p>
              )}
              <RenderProfessionalCV props={professionalForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
