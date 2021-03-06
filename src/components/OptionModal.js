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
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal">
    <h3 className="modal__title">Selected Option</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button
      className="button"
      type="button"
      onClick={handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
