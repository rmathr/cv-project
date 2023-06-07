import React, { Component } from 'react';
import FormField from './FormField';

class BasicInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      form: 'basicForm',
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
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      form: this.state.form,
    };
    this.props.saveInputValue(formData);
    this.setState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      form: 'basicForm',
    });

    console.log(formData);
  };

  render() {
    return (
      <div className="filling-form general-information">
        <p>General Information</p>
        <form onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              id="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="address">City and province</label>
            <input
              type="text"
              name="address"
              placeholder="London, ON"
              id="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <button className="save-form" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BasicInfo;
