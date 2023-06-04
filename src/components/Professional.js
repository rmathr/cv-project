import React, { Component } from 'react';
import FormField from './FormField';

class Professional extends Component {
  render() {
    return (
      <div>
        <p>Professional Expercience</p>
        <form>
          <FormField
            placeholder="Enter Job Title"
            inputID="jobTitle"
            label="Job Title"
          />
          <FormField
            placeholder="Enter Company"
            inputID="companyField"
            label="Company"
          />
          <FormField
            type="date"
            placeholder="mm / dd / yy"
            inputID="startDateProfessional"
            label="Start Date"
          />
          <FormField
            type="date"
            placeholder="mm / dd / yy"
            inputID="EndDateProfessional"
            label="End Date"
          />
          <FormField
            type="textarea"
            placeholder="Main tasks"
            inputID="mainTasks"
            label="Description"
          />
        </form>
      </div>
    );
  }
}

export default Professional;
