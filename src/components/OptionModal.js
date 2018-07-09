// @flow

import React from 'react';
import Modal from 'react-modal';

type Props = {
  selectedOption: ?string,
  handleClearSelectedOption: Function,
};

const OptionModal = ({ selectedOption, handleClearSelectedOption }: Props) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleClearSelectedOption}
    contentLabel="Selected Option">
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button type="button" onClick={handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
