import React, { Component } from 'react';
import FormField from './FormField';

class BasicInfo extends Component {
  render() {
    return (
      <div>
        <p>General Information</p>
        <form>
          <FormField
            placeholder="First Name"
            inputID="firstName"
            label="First Name"
          />
          <FormField
            placeholder="Last Name"
            inputID="lastName"
            label="Last Name"
          />
          <FormField
            placeholder="Email"
            inputID="emailField"
            label="Email"
          />
          <FormField
            placeholder="Phone"
            inputID="phoneField"
            label="Phone Number"
          />
          <FormField
            placeholder="London, ON"
            inputID="addressField"
            label="City and province"
          />
        </form>
      </div>
    );
  }
}

export default BasicInfo;
