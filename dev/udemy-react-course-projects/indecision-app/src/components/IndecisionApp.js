import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options:[] }));
        //equates to the below, keep for reference
        //     this.setState(() => {
        //         return {
        //             options: []
        //         };
        //     });
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleSelectOption =() => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        console.log('this is the option', option);
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
        //calling indexOf: if negative value it means it doesn't exist
    };

    handleRemoveModal = () => {
        this.setState(() => ({selectedOption:undefined}));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div className='container'>
                <Header subtitle={subtitle} />
                <div>
                <Action
                hasOptions={this.state.options.length > 0}
                handleSelectOption={this.handleSelectOption}
                />
                <div className='widget'>
                <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
                </div>
            </div>
            <OptionModal
                selectedOption={this.state.selectedOption}
                handleRemoveModal={this.handleRemoveModal}
            />
            </div>
        );
    }
}
