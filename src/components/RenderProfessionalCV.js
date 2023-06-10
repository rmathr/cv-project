import React from 'react';
import uniqid from 'uniqid';

const RenderProfessionalCV = ({ props }) => {
  const propsArray = [...props];
  const entry = propsArray.map((prop) => <RenderObj key={uniqid()} props={prop} />);
  return <>{entry}</>;
};

const RenderObj = ({ props }) => {
  return (
    <div className="entry">
      <div className="cv-jobTitle-company">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form) {
            if (key == 'jobTitle' || key == 'company') {
              return (
                <p key={key} className={key}>
                  {props[key]}
                </p>
              );
            }
          }
        })}
      </div>
      <div className="cv-dates">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form) {
            if (key == 'startDatePro' || key == 'endDatePro') {
              return (
                <p key={key} className={key}>
                  {props[key]}
                </p>
              );
            }
          }
        })}
      </div>
      <div className="cv-mainTasks">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form) {
            if (key == 'mainTasks') {
              return (
                <p key={key} className={key}>
                  {props[key]}
                </p>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default RenderProfessionalCV;
