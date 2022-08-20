import React from "react";

interface Props {
    
}
 
interface State {
    text: string;
}
 
class FormEvent  extends React.Component<Props, State> {
    state: State ={
        text: "",
    }
    onChange: React.FormEventHandler<HTMLInputElement> = (e) : void =>{
        this.setState({text: e.currentTarget.value});
    }
    // or
    // onChange = (e: React.FormEvent<HTMLInputElement>) : void =>{
    //     this.setState({text: e.currentTarget.value});
    // }


    render() { 
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input type="text" value={this.state.text} onChange={this.onChange}/>
            </div>
        );
    }
}
 
export default FormEvent;