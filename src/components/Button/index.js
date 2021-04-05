import React from 'react';

import './Button.scss';

const Button = ({ btnText }) => {
  return (
    <button className="Button" type="button">
      {btnText}
    </button>
  );
};

export default Button;
