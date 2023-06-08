import React, { Component, Fragment } from 'react';
import uniqid from 'uniqid';

// const FormRenderField = ({ props }) => {
class FormRenderField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.infoArray);
    const propsArray = [...this.props.infoArray];
    const entry = propsArray.map((prop) => {
      return (
        <div key={uniqid()} className="education-form-show">
          <RenderObj key={uniqid()} props={prop} />
          <button
            key={uniqid()}
            onClick={this.props.editEducationForm}
            id={propsArray.indexOf(prop)}
          >
            Edit
          </button>
        </div>
      );
    });
    return <>{entry}</>;
  }
}

const RenderObj = ({ props }) => {
  return (
    <div className="entry">
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.form) {
          return (
            <p key={key} className={key}>
              {props[key]}
            </p>
          );
        }
      })}
    </div>
  );
};

export default FormRenderField;
