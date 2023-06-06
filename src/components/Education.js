import React, { Component } from 'react';
import FormField from './FormField';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: '',
      school: '',
      city: '',
      country: '',
      startDate: '',
      endDate: '',
      form: 'educationForm',
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
      degree: this.state.degree,
      school: this.state.school,
      city: this.state.city,
      country: this.state.country,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      form: this.state.form,
    };
    this.props.saveInputValue(formData);
    this.setState({
      degree: '',
      school: '',
      city: '',
      country: '',
      startDate: '',
      endDate: '',
      form: 'educationForm',
    });

    console.log(formData);
  };

  render() {
    return (
      <div className="filling-form">
        <p>Education Experience</p>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              placeholder="Enter Degree / Field of Study"
              id="degree"
              value={this.state.degree}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              placeholder="Enter school / university"
              id="school"
              value={this.state.school}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              id="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country"
              id="country"
              value={this.state.country}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              placeholder="mm / dd / yy"
              id="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              placeholder="mm / dd / yy"
              id="endDate"
              value={this.state.endDate}
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

export default Education;
