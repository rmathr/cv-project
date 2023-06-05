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
    <div className="render-field">
      <p>{props.title}</p>
      <p>{props.place}</p>
      <p>{props.startDate}</p>
      <p>{props.endDate}</p>
    </div>
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
