import React from 'react';
import './Signin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { usePopup } from '../../contexts/PopupsContext';
import { useFormWithValidation } from '../../utils/FormValidation';

const Signin = () => {
  const popupContext = usePopup();

  const [formData, setFormData] = React.useState({});
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setFormData({ ...formData, [name]: value });
  // };

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
      isOpen={popupContext.popupsState.signin}>
      <fieldset className='popup__fieldset'>
        <div className='popup__input-container'>
          <label className='popup__label'>Email</label>
          <input
            className='popup__input popup__input_type_email'
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleChange}
            required={true}
            value={values.email || ''}
          />
          <span className='popup__input-error'>
            {' '}
            {errors.email && 'Please enter a valid email'}
          </span>
        </div>
        <div className='popup__input-container'>
          <label className='popup__label'>Password</label>
          <input
            className='popup__input popup__input_type_password'
            type='password'
            name='password'
            placeholder='Enter password'
            onChange={handleChange}
            value={values.password || ''}
            required
          />
          <span className='popup__input-error'>
            {' '}
            {errors.password && 'Please enter a valid password'}
          </span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signin;
