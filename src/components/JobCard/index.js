import React from 'react';
import IconWithText from '../../elements/IconWithText';

import clockIcon from './../../global/assets/icons/clock.svg';
import likeIcon from './../../global/assets/icons/like.svg';
import messageIcon from './../../global/assets/icons/message.svg';
import userIcon from './../../global/assets/icons/user.svg';

import './JobCard.scss';

const JobCard = ({
  jobData: {
    title,
    description,
    postedTime,
    likeCount,
    commentCount,
    postedBy,
  },
}) => {
  return (
    <div className="JobCard d-flex justify-content-between">
      <div className="JobCard-left d-flex flex-direction-col justify-content-between">
        <div className="JobCard-left__top">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="JobCard-left__bottom d-flex">
          <IconWithText
            altText="Like"
            imgSrc={likeIcon}
            text={likeCount}
            style={{ marginRight: '12px' }}
            clickable
          />
          <IconWithText
            altText="Comment"
            imgSrc={messageIcon}
            text={commentCount}
          />
        </div>
      </div>
      <div className="JobCard-right d-flex flex-direction-col justify-content-between align-items-end">
        <div className="JobCard-right__top">
          <IconWithText
            altText="Posted Time"
            imgSrc={clockIcon}
            text={postedTime}
          />
        </div>
        <div className="JobCard-right__bottom">
          <IconWithText altText="Username" imgSrc={userIcon} text={postedBy} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
