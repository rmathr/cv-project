import React, { Component } from 'react';
import FormField from './FormField';
import expandMore from '../assets/icons/expand-more.png';
import expandLess from '../assets/icons/expand-less.png';

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

  isFormValid = () => {
    console.log('teste');
    const { fullName, email, phone, address } = this.state;
    return fullName.length && email.length && phone.length && address.length;
  };

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
            <div className="form-buttons">
              <span></span>
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

export default BasicInfo;
