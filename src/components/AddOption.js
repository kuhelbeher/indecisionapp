// @flow

import React, { Component } from 'react';

type Props = {
  handleAddOption: Function,
};

type State = {
  error: ?string,
};

class AddOption extends Component<Props, State> {
  state = {
    error: null,
  };

  handleAddOption = (e: SyntheticInputEvent<HTMLFormElement>) => {
    const { handleAddOption } = this.props;
    e.preventDefault();

    const option: string = e.target.elements.option.value.trim();

    const error = handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p className="add-option-error">{error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
