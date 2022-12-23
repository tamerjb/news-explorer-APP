import React from "react";
import "./Tooltip.css";

import sucessIcon from "./successful_icon.svg";
import unsucessIcon from "./unsuccessful_icon.svg";
import { useStore } from "../../globalContext/GlobalContext";

export default function Tooltip() {
  const { closeTooltip  } = useStore().tooltip;
  const { setRegisteredTrue } = useStore().userRegistration;
  const { isSucess } = useStore().currentUser;

  function navigateToForm() {
    closeTooltip();
    setRegisteredTrue();
  }

  return (
    <>
      <div className="tooltip__container">
        <img
          src={isSucess ? sucessIcon : unsucessIcon}
          alt="sucess"
          className="tooltip__image"
        />
        <h2 className="popup__title">
          {isSucess
            ? "Registration successfully completed!"
            : "Oops Something Went Wrong !"}
        </h2>
      </div>

      {isSucess && (
        <div className="tooltip__login-container" onClick={navigateToForm}>
          <div className="b">L</div>
          <div className="o">o</div>
          <div className="u">g</div>
          <div className="n">i</div>
          <div className="c">n</div>
        </div>
      )}
    </>
  );
}
