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

  handleAddOption = (e: SyntheticEvent<HTMLFormElement>) => {
    const { handleAddOption } = this.props;
    e.preventDefault();

    const option: string = e.target.elements.option.value.trim();

    const error = handleAddOption(option);
    e.target.elements.option.value = '';

    this.setState(() => ({
      error,
    }));
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
