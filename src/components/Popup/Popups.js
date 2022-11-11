import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import PopupSuccess from './PopupSuccess';
import { React, useState } from 'react';

const Popups = ({}) => {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);

  const handleSigninPopup = () => {
    setIsSignInPopupOpen(!isSignInPopupOpen);
  };
  return (
    <>
      <Signin isOpen={handleSigninPopup} />
      {/* <Signup />
      <PopupSuccess /> */}
    </>
  );
};

export default Popups;
