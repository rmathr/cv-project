import React, { Component } from 'react';

class FormField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.inputID}>{this.props.label}</label>
        <input
          type={`${this.props.type}` || 'text'}
          placeholder={this.props.placeholder}
          id={this.props.inputID}
        />
        <button>Edit</button>
      </div>
    );
  }
}

export default FormField;
