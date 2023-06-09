import React, { Component } from 'react';
import FormField from './FormField';
import expandMore from '../assets/icons/expand-more.png';
import expandLess from '../assets/icons/expand-less.png';
import { format } from 'date-fns';

class Professional extends Component {
  constructor(props) {
    super(props);

    if (this.props.isEditing) {
      this.state = {
        jobTitle: this.props.infoToEdit.jobTitle,
        company: this.props.infoToEdit.company,
        // startDatePro: this.props.infoToEdit.startDatePro,
        startDatePro: format(new Date(this.props.infoToEdit.startDatePro), 'yyyy-MM-dd'),
        // endDatePro: this.props.infoToEdit.endDatePro,
        endDatePro: format(new Date(this.props.infoToEdit.endDatePro), 'yyyy-MM-dd'),
        mainTasks: this.props.infoToEdit.mainTasks,
        form: 'professionalForm',
        isShown: true,
      };
    } else {
      this.state = {
        jobTitle: '',
        company: '',
        startDatePro: '',
        endDatePro: '',
        mainTasks: '',
        form: 'professionalForm',
        isShown: false,
      };
    }
  }

  isFormValid = () => {
    const { jobTitle, company, startDatePro, endDatePro, mainTasks } = this.state;
    return (
      jobTitle.length &&
      company.length &&
      startDatePro.length &&
      endDatePro.length &&
      mainTasks.length
    );
  };

  toggleForm = (e) => {
    this.setState(
      {
        isShown: !this.state.isShown,
      },
      () => {
        console.log(this.state.isShown);
      }
    );
  };

  handleChange = (e) => {
    const name = e.target.name;
    const newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
    e.preventDefault();
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      jobTitle: this.state.jobTitle,
      company: this.state.company,
      //   startDatePro: this.state.startDatePro,
      startDatePro: format(
        new Date(this.state.startDatePro.replaceAll('-', '/')),
        "MMM',' yyyy"
      ),
      //   endDatePro: this.state.endDatePro,
      endDatePro: format(
        new Date(this.state.endDatePro.replaceAll('-', '/')),
        "MMM',' yyyy"
      ),
      mainTasks: this.state.mainTasks,
      form: this.state.form,
      isShown: this.state.isShown,
    };
    this.props.saveInputValue(formData);
    this.setState({
      jobTitle: '',
      company: '',
      startDatePro: '',
      endDatePro: '',
      mainTasks: '',
      form: 'professionalForm',
      isShown: false,
    });

    console.log(formData);
  };

  render() {
    return (
      <div className="filling-form">
        <div className="form-header">
          <p>Professional Expercience</p>
          {/* <button onClick={this.toggleForm}>Click</button> */}
          <img
            onClick={this.toggleForm}
            src={this.state.isShown ? expandLess : expandMore}
            className="expand-icon"
          />
        </div>

        {this.state.isShown && (
          <form onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter Job Title"
                id="jobTitle"
                value={this.state.jobTitle}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company"
                id="company"
                value={this.state.company}
                onChange={this.handleChange}
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
                  value={this.state.startDatePro}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="endDatePro">End Date</label>
                <input
                  type="date"
                  name="endDatePro"
                  placeholder="mm / dd / yy"
                  id="endDatePro"
                  value={this.state.endDatePro}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="mainTasks">Description</label>
              <textarea
                name="mainTasks"
                placeholder="Main tasks"
                id="mainTasks"
                value={this.state.mainTasks}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-buttons">
              {!this.props.isEditing && <span></span>}
              {this.props.isEditing && (
                <button
                  type="button"
                  className="delete-form"
                  onClick={() => this.props.deleteValue(this.state)}
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

              <button className="save-form" type="submit" disabled={!this.isFormValid()}>
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
  }
}

export default Professional;
