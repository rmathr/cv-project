import React from 'react';
import uniqid from 'uniqid';

const RenderField = ({ props }) => {
  if (Array.isArray(props)) {
    const propsArray = [...props];
    const entry = propsArray.map((prop) => <RenderObj key={uniqid()} props={prop} />);
    return <>{entry}</>;
  } else {
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

    // return <RenderObj props={props} />;
  }
};

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

// function RenderField({ props }) {
//   if (Array.isArray(props)) {
//     const propsArray = [...props];
//     const entry = propsArray.map((prop) => <RenderObj props={prop} />);
//     return <>{entry}</>;
//   } else {
//     return (
//       <>
//         {Object.entries(props).map(([key, value]) => {
//           if (value !== props.form) {
//             return (
//               <p key={key} className={key}>
//                 {props[key]}
//               </p>
//             );
//           }
//         })}
//       </>
//     );

//     // return <RenderObj props={props} />;
//   }
// }

// function RenderObj({ props }) {
//   return (
//     <div className="entry">
//       {Object.entries(props).map(([key, value]) => {
//         if (value !== props.form) {
//           return (
//             <p key={key} className={key}>
//               {props[key]}
//             </p>
//           );
//         }
//       })}
//     </div>
//   );
// }

export default RenderField;
