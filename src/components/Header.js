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
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default Header;
