
import React, { ChangeEvent, Component } from "react";
interface IAddItemProps {
    onAdd: (text:string) => void
}
export default class AddInput extends Component<IAddItemProps>{
    state={
        text: ""
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value})

    }
    onSubmit = () =>{
        this.props.onAdd(this.state.text)
        this.setState({text: ""})
    }

    render() {
       
        return (
            <div>
                <input 
                type="text" 
                value={this.state.text} 
                onChange={this.handleChange} />
                {/* <button onClick={() => onAdd(this.state.text)}>Add</button> */}
                <button 
                disabled={this.state.text.length === 0}
                onClick={this.onSubmit}>
                    Add
                </button>
            </div>
        )
    }
}