import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { usePopup } from '../../contexts/PopupsContext';
import { useFormWithValidation } from '../../utils/FormValidation';

const Signup = () => {
  const popupContext = usePopup();

  const [formData, setFormData] = React.useState({});

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  return (
    <PopupWithForm
      name='signup'
      title='Sign up'
      buttonText='Sign up'
      redirectText='Sign in'
      onSubmit={handleSubmit}
      isOpen={popupContext.popupsState.signup}>
      <fieldset className='popup__fieldset'>
        <div className='popup__input-container'>
          <label className='popup__label'>Email</label>
          <input
            className='popup__input popup__input_type_email'
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleChange}
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
          />
          <span className='popup__input-error'> </span>
        </div>
        <div className='popup__input-container'>
          <label className='popup__label'>Username</label>
          <input
            className='popup__input popup__input_type_username'
            type='username'
            name='username'
            placeholder='Enter username'
            onChange={handleChange}
            value={values.username || ''}
          />
          <span className='popup__input-error'> {errors.username}</span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signup;
