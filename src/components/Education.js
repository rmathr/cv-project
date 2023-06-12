import React, { useState, useEffect } from 'react';
import expandMore from '../assets/icons/expand-more.png';
import expandLess from '../assets/icons/expand-less.png';
import { format } from 'date-fns';
import education from '../assets/icons/education.png';

const Education = (props) => {
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndtDate] = useState('');
  const [form, setForm] = useState('educationForm');
  const [isShown, setIsShown] = useState(false);

  if (props.isEditing) {
    useEffect(() => {
      setDegree(props.infoToEdit.degree);
      setSchool(props.infoToEdit.school);
      setCity(props.infoToEdit.city);
      setCountry(props.infoToEdit.country);
      setStartDate(format(new Date(props.infoToEdit.startDate), 'yyyy-MM-dd'));
      setEndtDate(format(new Date(props.infoToEdit.endDate), 'yyyy-MM-dd'));
      setIsShown(true);
    }, []);
  }

  const isFormValid = () => {
    return (
      degree.length &&
      school.length &&
      city.length &&
      country.length &&
      startDate.length &&
      endDate.length
    );
  };

  const toggleForm = (e) => {
    setIsShown(!isShown);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case 'degree':
        setDegree(value);
        break;
      case 'school':
        setSchool(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndtDate(value);
        break;
    }
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      degree: degree,
      school: school,
      city: city,
      country: country,
      startDate: format(new Date(startDate.replaceAll('-', '/')), "MMM',' yyyy"),
      endDate: format(new Date(endDate.replaceAll('-', '/')), "MMM',' yyyy"),
      form: form,
      isShown: isShown,
    };
    props.saveInputValue(formData);
    setDegree('');
    setSchool('');
    setCity('');
    setCountry('');
    setStartDate('');
    setEndtDate('');
    setIsShown(false);
  };

  return (
    <div className="filling-form">
      <div className="form-header">
        <div className="form-header-title">
          <img className="form-header-img" src={education} />
          <p>Education Experience</p>
        </div>
        <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
        />
      </div>

      {isShown && (
        <form onSubmit={onSubmitForm}>
          <div className="input-container">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              placeholder="Enter Degree / Field of Study"
              id="degree"
              value={degree}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              placeholder="Enter school / university"
              id="school"
              value={school}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              id="city"
              value={city}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country"
              id="country"
              value={country}
              onChange={handleChange}
            />
          </div>
          <div className="input-dates">
            <div className="input-container">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                placeholder="mm / dd / yy"
                id="startDate"
                value={startDate}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                placeholder="mm / dd / yy"
                id="endDate"
                value={endDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-buttons">
            {!props.isEditing && <span></span>}

            {props.isEditing && (
              <button
                type="button"
                className="delete-form"
                onClick={() =>
                  props.deleteValue({
                    degree,
                    school,
                    city,
                    country,
                    startDate,
                    endDate,
                    form,
                    isShown,
                  })
                }
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 -960 960 960"
                    width="48"
                    className="svg-delete"
                  >
                    <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
                  </svg>
                  <span></span>
                  Delete
                </span>
              </button>
            )}

            <button className="save-form" type="submit" disabled={!isFormValid()}>
              <span>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="svg-right"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                </svg>{' '}
                <span></span>
                Save
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Education;
