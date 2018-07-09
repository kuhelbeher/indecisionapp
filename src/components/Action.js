// @flow

import React from 'react';

type Props = {
  hasOptions: boolean,
  handlePick: Function,
};

const Action = ({ hasOptions, handlePick }: Props) => (
  <div>
    <button
      className="big-button"
      type="button"
      disabled={!hasOptions}
      onClick={handlePick}>
      What should I do?
    </button>
  </div>
);

export default Action;
