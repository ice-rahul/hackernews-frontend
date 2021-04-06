import React from 'react';

import JobCard from './../JobCard';

import './JobListing.scss';

const JobListing = ({
  data = [
    {
      id: 'job#1',
      title: 'Job Title',
      description: 'Job Description',
      postedTime: '1w ago',
      likeCount: 13,
      commentCount: 9,
      postedBy: 'User Name',
    },
    {
      id: 'job#2',
      title: 'Job Title 2',
      description: 'Job Description 2',
      postedTime: '1w ago',
      likeCount: 15,
      commentCount: 8,
      postedBy: 'User Name 2',
    },
    {
      id: 'job#3',
      title: 'Job Title 3',
      description: 'Job Description 3',
      postedTime: '1w ago',
      likeCount: 12,
      commentCount: 4,
      postedBy: 'User Name 3',
    },
    {
      id: 'job#4',
      title: 'Job Title 4',
      description: 'Job Description 4',
      postedTime: '1w ago',
      likeCount: 33,
      commentCount: 19,
      postedBy: 'User Name 4',
    },
    {
      id: 'job#5',
      title: 'Job Title 5',
      description: 'Job Description 5',
      postedTime: '1w ago',
      likeCount: 27,
      commentCount: 12,
      postedBy: 'User Name 5',
    },
    {
      id: 'job#6',
      title: 'Job Title 6',
      description: 'Job Description 6',
      postedTime: '1w ago',
      likeCount: 23,
      commentCount: 19,
      postedBy: 'User Name 6',
    },
    {
      id: 'job#7',
      title: 'Job Title 7',
      description: 'Job Description 7',
      postedTime: '1w ago',
      likeCount: 14,
      commentCount: 5,
      postedBy: 'User Name 7',
    },
  ],
}) => {
  return (
    <div className="JobListing">
      <div className="JobListing-title">Job Listing</div>
      <div className="JobListing-container">
        {data.map((job) => (
          <JobCard key={job.id} jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListing;
