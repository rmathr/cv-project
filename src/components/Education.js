import React, { Component } from 'react';
import FormField from './FormField';

class Education extends Component {
  render() {
    return (
      <div>
        <p>Education Experience</p>
        <form>
          <FormField
            placeholder="Enter Degree / Field of Study"
            inputID="degreeField"
            label="Degree"
          />
          <FormField
            placeholder="Enter school / university"
            inputID="schoolField"
            label="School"
          />
          <FormField
            placeholder="Enter City"
            inputID="educationCity"
            label="City"
          />
          <FormField
            placeholder="Enter Country"
            inputID="educationCountry"
            label="Country"
          />
          <FormField
            type="date"
            placeholder="mm / dd / yy"
            inputID="startDateEducation"
            label="Start Date"
          />
          <FormField
            type="date"
            placeholder="mm / dd / yy"
            inputID="EndDateEducation"
            label="End Date"
          />
        </form>
      </div>
    );
  }
}

export default Education;
