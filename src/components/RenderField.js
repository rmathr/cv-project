import React, { Component } from 'react';

const info = [
  {
    title: '',
    place: '',
    startDate: '',
    endDate: '',
  },
];

function RenderField({ props }) {
  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.form) {
          return (
            <p key={key} className={key}>
              {props[key]}
            </p>
          );
        }
      })}
    </>
  );
}

// class RenderField extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="render-field">
//         <p>{this.props.title}</p>
//         <p>{this.props.place}</p>
//         <p>{this.props.startDate}</p>
//         <p>{this.props.endDate}</p>
//       </div>
//     );
//   }
// }

export default RenderField;
