// @flow

import React from 'react';

type Props = {
  optionText: string,
  handleDeleteOption: Function,
};

const Option = ({ optionText, handleDeleteOption }: Props) => (
  <div>
    {optionText}
    <button
      type="button"
      onClick={() => {
        handleDeleteOption(optionText);
      }}>
      remove
    </button>
  </div>
);

export default Option;
