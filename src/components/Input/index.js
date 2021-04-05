import React from 'react';

import './Input.scss';

const Input = ({ placeholder }) => {
  return <input className="Input" type="text" placeholder={placeholder} />;
};

export default Input;
