// @flow

import React, { Component } from 'react';

import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

type Props = {};

type State = {
  options: Array<string>,
};

class App extends Component<Props, State> {
  state = {
    options: [],
  };

  handleAddOption = (option: string) => {
    const { options } = this.state;
    if (!option) {
      return 'Enter valid value to add item';
    }
    if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState(prevState => ({ options: [...prevState.options, option] }));
    return null;
  };

  handleRemoveAllOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option);
  };

  render() {
    const { options } = this.state;
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Options
          options={options}
          handleRemoveAllOption={this.handleRemoveAllOptions}
        />
        <Action hasOptions={options.length > 0} handlePick={this.handlePick} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;
