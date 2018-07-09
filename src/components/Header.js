// @flow

import React from 'react';

type Props = {
  title: string,
  subtitle: string,
};

const Header = ({
  title = 'Indecision',
  subtitle = 'Put your life in the hands of a computer',
}: Props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{title}</h1>
      <h2 className="header__subtitle">{subtitle}</h2>
    </div>
  </div>
);

export default Header;
