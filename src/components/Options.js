// @flow

import React from 'react';

import Option from './Option';

type Props = {
  options: Array<string>,
  handleDeleteOptions: Function,
  handleDeleteOption: Function,
};

const Options = ({
  options,
  handleDeleteOptions,
  handleDeleteOption,
}: Props) => (
  <div>
    <button type="button" onClick={handleDeleteOptions}>
      Remove All
    </button>
    {options.length === 0 && <p>Please add an option to get started!</p>}
    {options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
