import { React } from 'react';

import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import PopupSuccess from './PopupSuccess';

const Popups = () => {
  return (
    <>
      <Signin />
      <Signup />
      <PopupSuccess />
    </>
  );
};

export default Popups;
