console.log ("app.js running");

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
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

    handleDeleteOptions() {
        this.setState(() => ({ options:[] }));
        //equates to the below, keep for reference
        //     this.setState(() => {
        //         return {
        //             options: []
        //         };
        //     });
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleSelectOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        console.log('this is the option', option);
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
        //calling indexOf: if negative value it means it doesn't exist
    }

    render() {
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
            <Header subtitle={subtitle} />
            <Action
            hasOptions={this.state.options.length > 0}
            handleSelectOption={this.handleSelectOption}
            />
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};
//example of Header as class-based component, keep for reference
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }


const Action = (props) => {
    return (
        <button onClick={props.handleSelectOption}
        disabled={!props.hasOptions}
        >
        What should I do?</button>
    );
}

const Options = (props) => {
    return (
        <div>
        {props.options.length === 0 && <p>Please add an option to get started.</p>}
        {
            props.options.map((option) => (
                <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />))
            }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    };

    const Option = (props) => {
        return (
            <div id="option-text">{props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            Remove
            </button>
            </div>
        );
    }

    class AddOption extends React.Component {
        constructor(props) {
            super(props);
            this.handleAddOption = this.handleAddOption.bind(this);
            this.state = {
                error: undefined
            };
        }
        handleAddOption(e) {
            e.preventDefault();

            const option = e.target.elements.option.value.trim();
            const error = this.props.handleAddOption(option);

            this.setState(() => ({ error }));

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
        render() {
            return (
                <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
                </div>
            );
        }
    }

    ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


//JSX EARLY CODE
// console.log ("app.js is running");
//
// const app = {
//     title:"Indecision App",
//     subtitle:"put your life in the hands of comp",
//     options: []
// }
//
// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = "";
//         renderOptions();
//         //rerender
//     }
// };
//
// const removeOptions = () => {
//     app.options.length = 0;
//     //COULD ALSO BE app.options = [];
//     renderOptions();
// }
//
// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// }
//
// var appRoot = document.getElementById("app");
//
// //const numbers = [55, 101, 1000];
//
// const renderOptions = () => {
//     const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length>0 ? "Here are your options:" : "No Options"}</p>
//         <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
//
//         <button onClick={removeOptions}>Remove All</button>
//         <ol>
//             {app.options.map((option) => {
//                 return <li key={option}>{option}</li>;
//             })
//             }
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// renderOptions();
