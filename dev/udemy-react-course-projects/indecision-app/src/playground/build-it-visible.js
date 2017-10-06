console.log ("vis toggle is running");

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        console.log (this.state);
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            }
        });
    }


    render() {
        return (
            <div>
            <h1>Vis Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? "Hide details:" : "Show Details"}
            </button>
            {this.state.visibility && (
                <div>
                    <p>Hey. These are some deets.</p>
                </div>
            )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
