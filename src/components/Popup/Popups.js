import { React } from 'react';

import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import PopupSuccess from './PopupSuccess';
import MobilePopup from '../MobileMenu/MobileMenu';

const Popups = () => {
  return (
    <>
      <Signin />
      <Signup />
      <PopupSuccess />
      <MobilePopup />
    </>
  );
};

export default Popups;
