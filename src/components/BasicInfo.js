import React, { Component } from 'react';
import FormField from './FormField';

class BasicInfo extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props);

    if (this.props.isEditing) {
      console.log(this.props.infoToEdit);
      this.state = {
        fullName: this.props.infoToEdit.fullName,
        email: this.props.infoToEdit.email,
        phone: this.props.infoToEdit.phone,
        address: this.props.infoToEdit.address,
        form: 'basicForm',
        isShown: true,
      };
    } else {
      this.state = {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        form: 'basicForm',
        isShown: false,
      };
    }
  }
  toggleForm = (e) => {
    this.setState({
      isShown: !this.state.isShown,
    });
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
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      form: this.state.form,
      isShown: this.state.isShown,
    };
    this.props.saveInputValue(formData);
    this.setState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      form: 'basicForm',
      isShown: false,
    });

    console.log(formData);
  };

  render() {
    return (
      <div className="filling-form general-information">
        <div className="form-header">
          <p>General Information</p>
          <button onClick={this.toggleForm}>Click</button>
        </div>

        {this.state.isShown && (
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
        )}
      </div>
    );
  }
}

export default BasicInfo;
