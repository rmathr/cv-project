import React, { useState, useEffect } from 'react';
import expandMore from '../assets/icons/expand-more.png';
import expandLess from '../assets/icons/expand-less.png';
import personal from '../assets/icons/personal.png';

const BasicInfo = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [form, setForm] = useState('basicForm');
  const [isShown, setIsShown] = useState(false);

  if (props.isEditing) {
    useEffect(() => {
      setFullName(props.infoToEdit.fullName);
      setEmail(props.infoToEdit.email);
      setPhone(props.infoToEdit.phone);
      setAddress(props.infoToEdit.address);
      setIsShown(true);
    }, []);
  }

  const isFormValid = () => {
    return fullName.length && email.length && phone.length && address.length;
  };

  const toggleForm = (e) => {
    setIsShown(!isShown);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'address':
        setAddress(value);
        break;
    }
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
      form: form,
      isShown: isShown,
    };
    props.saveInputValue(formData);
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setIsShown(false);
  };

  return (
    <div className="filling-form general-information">
      <div className="form-header">
        <div className="form-header-title">
          <img className="form-header-img" src={personal} />
          <p>General Information</p>
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
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              id="fullName"
              value={fullName}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              id="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="address">City and province</label>
            <input
              type="text"
              name="address"
              placeholder="City, Province"
              id="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <span></span>
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

export default BasicInfo;
