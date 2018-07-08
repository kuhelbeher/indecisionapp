// @flow

import React from 'react';

import Option from './Option';

type Props = {
  options: Array<string>,
  handleRemoveAllOption: Function,
};

const Options = ({ options, handleRemoveAllOption }: Props) => (
  <div>
    <button type="button" onClick={handleRemoveAllOption}>
      Remove All
    </button>
    {options.map(option => <Option key={option} option={option} />)}
  </div>
);

export default Options;
