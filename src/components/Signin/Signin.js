import React from 'react';
import './Signin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Signin = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };

  return (
    <PopupWithForm
      name='signin'
      title='Sign in'
      buttonText='Sign in'
      redirectText='Sign up'
      onSubmit={handleSubmit}
      isOpen={isOpen}>
      <fieldset className='popup__fieldset'>
        <div className='popup__input-container'>
          <label className='popup__label'>Email</label>
          <input
            className='popup__input popup__input_type_email'
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleChange}
            value={formData.email || ''}
          />
          <span className='popup__input-error'></span>
        </div>
        <div className='popup__input-container'>
          <label className='popup__label'>Password</label>
          <input
            className='popup__input popup__input_type_password'
            type='password'
            name='password'
            placeholder='Enter password'
            onChange={handleChange}
            value={formData.password || ''}
          />
          <span className='popup__input-error'></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signin;
