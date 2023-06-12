import React from 'react';
import uniqid from 'uniqid';

const FormRenderField = (props) => {
  const propsArray = [...props.infoArray];
  const entry = propsArray.map((prop) => {
    return (
      <div key={uniqid()} className="form-show-info">
        <RenderObj key={uniqid()} props={prop} />
        <button
          key={uniqid()}
          onClick={() => props.editForm(propsArray.indexOf(prop))}
          id={propsArray.indexOf(prop)}
          className="edit-form"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
              className="svg-edit"
            >
              <path d="M480-120v-71l216-216 71 71-216 216h-71ZM120-330v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29 29ZM120-495v-60h470v60H120Zm0-165v-60h470v60H120Z" />
            </svg>
            <span></span>
            Edit
          </span>
        </button>
      </div>
    );
  });
  return <>{entry}</>;
};

const RenderObj = ({ props }) => {
  return (
    <div className="entry">
      {Object.entries(props).map(([key, value]) => {
        if (
          value !== props.form &&
          key != 'city' &&
          key != 'country' &&
          key != 'startDate' &&
          key != 'endDate'
        ) {
          return (
            <p key={key} className={key}>
              {props[key]}
            </p>
          );
        }
      })}
      <div className="form-city-country">
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
      <div className="form-dates">
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
    </div>
  );
};

export default FormRenderField;
