// @flow

import React, { Component } from 'react';

import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import Options from './components/Options';
import OptionModal from './components/OptionModal';

type Props = {};

type State = {
  options: Array<string>,
  selectedOption: ?string,
};

export default class IndecisionApp extends Component<Props, State> {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handleAddOption = (option: string) => {
    const { options } = this.state;

    if (!option) {
      return 'Enter valid value to add item';
    }
    if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option),
    }));

    return null;
  };

  render() {
    const { options, selectedOption } = this.state;

    return (
      <div>
        <Header />
        <Action hasOptions={options.length > 0} handlePick={this.handlePick} />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
