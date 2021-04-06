import React from 'react';

import { POST_TYPES } from './../../constants';

import Header from './../../components/Header';
import JobListing from './../../components/JobListing';
import PostCard from './../../components/PostCard';

import newsIllustration from './../../global/assets/images/newsIllustration.svg';

import './Main.scss';

const Main = () => (
  <div className="Main">
    <Header />
    <div className="Main-content">
      <section className="Main-content__illustration d-flex justify-content-between">
        <img alt="hacker news" src={newsIllustration} />
        <div className="Main-content__illustration-title d-flex flex-direction-col">
          <div className="title">Hacker News</div>
          <div className="tagline">The Online News Portal</div>
        </div>
      </section>
      <section className="Main-content__cardsJobs d-flex justify-content-between">
        <div className="Main-content__cardsJobs-cards d-flex justify-content-between">
          {POST_TYPES.map(({ postType }, index) => (
            <PostCard cardTitle={postType} />
          ))}
        </div>
        <div className="Main-content__cardsJobs-jobList d-flex justify-content-between">
          <JobListing />
        </div>
      </section>
    </div>
  </div>
);

export default Main;
