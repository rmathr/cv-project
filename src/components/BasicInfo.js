import React, { Component } from 'react';
import FormField from './FormField';

class BasicInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      form: this.state.form,
    };
    this.props.saveInputValue(formData);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      form: 'basicForm',
    });

    console.log(formData);
  };

  render() {
    return (
      <div className="filling-form">
        <p>General Information</p>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="address">City and province</label>
            <input
              type="text"
              name="address"
              placeholder="London, ON"
              id="address"
              value={this.state.address}
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

export default BasicInfo;
