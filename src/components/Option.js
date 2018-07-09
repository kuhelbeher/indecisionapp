// @flow

import React from 'react';

type Props = {
  optionText: string,
  handleDeleteOption: Function,
  count: number,
};

const Option = ({ optionText, handleDeleteOption, count }: Props) => (
  <div className="option">
    <p className="option__text">
      {count}. {optionText}
    </p>
    <button
      className="button button--link"
      type="button"
      onClick={() => {
        handleDeleteOption(optionText);
      }}>
      remove
    </button>
  </div>
);

export default Option;
