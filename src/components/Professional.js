import React, { Component } from 'react';
import FormField from './FormField';

class Professional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: '',
      company: '',
      startDatePro: '',
      endDatePro: '',
      mainTasks: '',
      form: 'professionalForm',
    };
  }

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
      startDatePro: this.state.startDatePro,
      endDatePro: this.state.endDatePro,
      mainTasks: this.state.mainTasks,
      form: this.state.form,
    };
    this.props.saveInputValue(formData);
    this.setState({
      jobTitle: '',
      company: '',
      startDatePro: '',
      endDatePro: '',
      mainTasks: '',
      form: 'professionalForm',
    });

    console.log(formData);
  };

  render() {
    return (
      <div className="filling-form">
        <p>Professional Expercience</p>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title"
              id="jobTitle"
              value={this.state.jobTitle}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter Company"
              id="company"
              value={this.state.company}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="startDatePro">Start Date</label>
            <input
              type="date"
              name="startDatePro"
              placeholder="mm / dd / yy"
              id="startDatePro"
              value={this.state.startDatePro}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="endDatePro">End Date</label>
            <input
              type="date"
              name="endDatePro"
              placeholder="mm / dd / yy"
              id="endDatePro"
              value={this.state.endDatePro}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="mainTasks">Description</label>
            <input
              type="textarea"
              name="mainTasks"
              placeholder="Main tasks"
              id="mainTasks"
              value={this.state.mainTasks}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Professional;
