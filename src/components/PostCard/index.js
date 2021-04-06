import React from 'react';

import './PostCard.scss';

const PostCard = ({ cardTitle }) => {
  return (
    <div className="PostCard d-flex justify-content-center align-items-center text-align-center">
      {cardTitle}
    </div>
  );
};

export default PostCard;
