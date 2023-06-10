import React from 'react';
import uniqid from 'uniqid';

const RenderEducationCV = ({ props }) => {
  const propsArray = [...props];
  const entry = propsArray.map((prop) => <RenderObj key={uniqid()} props={prop} />);
  return <>{entry}</>;
};

const RenderObj = ({ props }) => {
  return (
    <div className="entry">
      <div className="cv-degree-school">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form) {
            if (key == 'degree' || key == 'school') {
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
            if (key == 'startDate' || key == 'endDate') {
              return (
                <p key={key} className={key}>
                  {props[key]}
                </p>
              );
            }
          }
        })}
      </div>
      <div className="cv-city-country">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form) {
            if (key == 'city' || key == 'country') {
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

export default RenderEducationCV;
