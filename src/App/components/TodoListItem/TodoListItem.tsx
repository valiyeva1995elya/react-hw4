import React, { Component } from "react";
import { ITodo } from "../../../types";
import "./TodoListItem.css"

interface ITodoListItemProps extends ITodo {
    onDoneClick: () => void
    onImportantClick: () => void
    onDeleteClick:() => void
}

export default class TodoListItem extends Component<ITodoListItemProps> {

    

    render() {
        const { text, done, important } = this.props;
        let classNames = "";
        if(done){
            classNames += " done";
        }
        if(important){
            classNames += " important"
        }
        console.log(classNames);
        
        return (
            <li className={classNames}>
                {text}
                <button onClick={() => this.props.onDoneClick()}>Done</button>
                <button onClick={() => this.props.onImportantClick()}>Important</button>
                <button onClick={() => this.props.onDeleteClick()}>Delete</button>

            </li>
        )
    }

}