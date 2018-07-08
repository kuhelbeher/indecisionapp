// @flow

import React from 'react';

type Props = {
  title: string,
  subtitle: string,
};

const Header = ({ title, subtitle }: Props) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default Header;
