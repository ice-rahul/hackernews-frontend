import React from 'react';

import Button from './../Button';
import Input from './../Input';

import './Header.scss';

const Header = () => {
  return (
    <header className="header d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">HN</div>
        <Input placeholder="Search Hacker News Here..." />
        <Button btnText="Login" />
      </div>
    </header>
  );
};

export default Header;
