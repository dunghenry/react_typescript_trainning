import React from "react";

interface IProps {
    message: string;
}

interface IState {
    count: number;
}

class ClassCpn extends React.Component<IProps, IState> {
    state: IState = {
        count: 0
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    incrementValue = (num: number) => {
        // this.setState({ count: this.state.count + num })
        this.setState((prevState) => {
            return {count: prevState.count + num}
        })
        this.setState((prevState) => {
            return {count: prevState.count + num}
        })

    }
    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
                <button onClick={this.increment}>increment</button>
                <button onClick={() => this.incrementValue(2)}>increment</button>
            </div>
        );
    }
}

export default ClassCpn;