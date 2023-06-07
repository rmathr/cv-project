import React, { Component } from 'react';
import RenderField from './RenderField';

function BasicInfoRender({ props }) {
  return (
    <RenderField props={props} />
    // <div className="render-field">
    //   {Object.values(props).map((value, index) => {
    //     if (value != props.form) {
    //       return (
    //         <div key={index}>
    //           <p>{value}</p>
    //         </div>
    //       );
    //     }
    //   })}
    // </div>
  );
}

// class BasicInfoRender extends Component {
//   constructor( props ) {
//     super(props);
//   }
//   render() {

//   }
// }

export default BasicInfoRender;
