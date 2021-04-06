import React from 'react';

import './IconWithText.scss';

const IconWithText = ({ altText, clickable, imgSrc, style, text }) => {
  return (
    <div
      className={`IconWithText d-flex ${!!clickable ? 'cursor-pointer' : ''}`}
      style={style}
    >
      <img alt={altText} src={imgSrc} />
      <span>{text}</span>
    </div>
  );
};

export default IconWithText;
