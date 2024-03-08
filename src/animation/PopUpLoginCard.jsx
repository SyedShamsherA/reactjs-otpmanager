import React from 'react';
import './Popup.css'

const PopUpLoginCard = ({ children }) => {
  return (
    <div className="pop-up-card">
      {children}
    </div>
  );
};

export default PopUpLoginCard;
