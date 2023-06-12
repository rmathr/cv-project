import React, { useState, useEffect } from 'react';
import expandMore from '../assets/icons/expand-more.png';
import expandLess from '../assets/icons/expand-less.png';
import { format } from 'date-fns';
import work from '../assets/icons/work.png';

const Professional = (props) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDatePro, setStartDatePro] = useState('');
  const [endDatePro, setEndtDatePro] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [form, setForm] = useState('professionalForm');
  const [isShown, setIsShown] = useState(false);

  if (props.isEditing) {
    useEffect(() => {
      setJobTitle(props.infoToEdit.jobTitle);
      setCompany(props.infoToEdit.company);
      setStartDatePro(format(new Date(props.infoToEdit.startDatePro), 'yyyy-MM-dd'));
      setEndtDatePro(format(new Date(props.infoToEdit.endDatePro), 'yyyy-MM-dd'));
      setMainTasks(props.infoToEdit.mainTasks);
      setIsShown(true);
    }, []);
  }

  const isFormValid = () => {
    return (
      jobTitle.length &&
      company.length &&
      startDatePro.length &&
      endDatePro.length &&
      mainTasks.length
    );
  };

  const toggleForm = (e) => {
    setIsShown(!isShown);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case 'jobTitle':
        setJobTitle(value);
        break;
      case 'company':
        setCompany(value);
        break;
      case 'startDatePro':
        setStartDatePro(value);
        break;
      case 'endDatePro':
        setEndtDatePro(value);
        break;
      case 'mainTasks':
        setMainTasks(value);
        break;
    }
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      jobTitle: jobTitle,
      company: company,
      startDatePro: format(new Date(startDatePro.replaceAll('-', '/')), "MMM',' yyyy"),
      endDatePro: format(new Date(endDatePro.replaceAll('-', '/')), "MMM',' yyyy"),
      mainTasks: mainTasks,
      form: form,
      isShown: isShown,
    };
    props.saveInputValue(formData);
    setJobTitle('');
    setCompany('');
    setStartDatePro('');
    setEndtDatePro('');
    setMainTasks('');
    setIsShown(false);
  };

  return (
    <div className="filling-form">
      <div className="form-header">
        <div className="form-header-title">
          <img className="form-header-img" src={work} />
          <p>Professional Expercience</p>
        </div>
        <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
        />
      </div>

      {isShown && (
        <form onSubmit={onSubmitForm}>
          <div className="input-container">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title"
              id="jobTitle"
              value={jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter Company"
              id="company"
              value={company}
              onChange={handleChange}
            />
          </div>
          <div className="input-dates">
            <div className="input-container">
              <label htmlFor="startDatePro">Start Date</label>
              <input
                type="date"
                name="startDatePro"
                placeholder="mm / dd / yy"
                id="startDatePro"
                value={startDatePro}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="endDatePro">End Date</label>
              <input
                type="date"
                name="endDatePro"
                placeholder="mm / dd / yy"
                id="endDatePro"
                value={endDatePro}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="mainTasks">Description</label>
            <textarea
              name="mainTasks"
              placeholder="Main tasks"
              id="mainTasks"
              value={mainTasks}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            {!props.isEditing && <span></span>}
            {props.isEditing && (
              <button
                type="button"
                className="delete-form"
                onClick={() =>
                  props.deleteValue({
                    jobTitle,
                    company,
                    startDatePro,
                    endDatePro,
                    mainTasks,
                    form,
                    isShown,
                  })
                }
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 -960 960 960"
                    width="48"
                    className="svg-delete"
                  >
                    <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
                  </svg>
                  <span></span>
                  Delete
                </span>
              </button>
            )}

            <button className="save-form" type="submit" disabled={!isFormValid()}>
              <span>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="svg-right"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                </svg>{' '}
                <span></span>
                Save
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Professional;
