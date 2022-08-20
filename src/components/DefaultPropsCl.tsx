import React from "react";
type IProps = {
    age?: number;
} & typeof defaultProps;

const defaultProps = {
    age: 24
}

interface IState { }

class DefaultPropsCl extends React.Component<IProps, IState> {
    static defaultProps = {
        age: 100
    }
    render() {
        // const { age = 22 } = this.props;

        //use default props
        const { age } = this.props;
        return <div>{age}</div>;
    }
}

export default DefaultPropsCl;
