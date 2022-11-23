import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { usePopup } from '../../contexts/PopupsContext';
import { useFormWithValidation } from '../../utils/FormValidation';
import userApi from '../../utils/MainApi';

const Signup = () => {
  const popupContext = usePopup();

  const [dataExist, setDataExist] = useState({
    exist: false,
    message: '',
  });

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   console.log(values);
  // };
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await userApi.signup(values);
    console.log(values);

    if (!res.message) {
      popupContext.openPopup('success');
      return;
    }
    setDataExist({ exist: true, message: res.message });
    setTimeout(() => {
      setDataExist({ exist: false, message: '' });
    }, 2000);
  }

  return (
    <PopupWithForm
      name='signup'
      title='Sign up'
      buttonText='Sign up'
      redirectText='Sign in'
      buttonDisabled={isValid ? false : true}
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
            required
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
            required
            placeholder='Enter password'
            onInput={handleChange}
            value={values.password || ''}
          />
          <span className='popup__input-error'>
            {' '}
            {errors.password && 'Please enter a valid password'}
          </span>
        </div>
        <div className='popup__input-container'>
          <label className='popup__label'>Username</label>
          <input
            className='popup__input popup__input_type_username'
            type='name'
            name='name'
            required
            placeholder='Enter username'
            onInput={handleChange}
            value={values.name || ''}
          />
          <span className='popup__input-error'>
            {' '}
            {dataExist.exist && dataExist.message}
          </span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signup;
