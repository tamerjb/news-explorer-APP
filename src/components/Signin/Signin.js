import React, { useState } from 'react';
import './Signin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { usePopup } from '../../contexts/PopupsContext';
import { useFormWithValidation } from '../../utils/FormValidation';
import { useAuth } from '../../contexts/CurrentUserContext';
// function useForm(inputValues) {
//   const [values, setValues] = useState(inputValues);

//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setValues({ ...values, [name]: value });
//   };
//   return { values, handleChange, setValues };
// }

const Signin = () => {
  const popupContext = usePopup();
  const [error, setError] = useState('');

  const auth = useAuth();
  const signinUser = auth.signinUser;
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  // const [formData, setFormData] = React.useState({});
  // const { values, handleChange, errors, isValid } = useFormWithValidation();

  // // const handleChange = (evt) => {
  // //   const { name, value } = evt.target;
  // //   setFormData({ ...formData, [name]: value });
  // // };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   console.log(formData);
  // };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    popupContext.closeAllPopups();

    try {
      const res = await signinUser(values);
      if (res._id) {
        console.log('res._id', res._id);

        popupContext.closeAllPopups();
        window.location.reload();
      } else {
        setError(res.message);
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PopupWithForm
      name='signin'
      title='Sign in'
      buttonText='Sign in'
      redirectText='Sign up'
      buttonDisabled={isValid ? false : true}
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
            onInput={handleChange}
            required={true}
            value={values.email || ''}
          />
          <span className='popup__input-error'>
            {' '}
            {errors.email && 'Invalid email address'}
          </span>
        </div>
        <div className='popup__input-container'>
          <label className='popup__label'>Password</label>
          <input
            className='popup__input popup__input_type_password'
            type='password'
            name='password'
            placeholder='Enter password'
            onInput={handleChange}
            value={values.password || ''}
            required
          />
          <span className='popup__input-error'> {errors.password}</span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signin;
