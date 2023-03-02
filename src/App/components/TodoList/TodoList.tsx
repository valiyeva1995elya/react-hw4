import { ITodo } from "../../../types";
import TodoListItem from "../TodoListItem/TodoListItem";
import { FC } from "react"

interface ITodoListProps {
    todos: ITodo[]
    onDone: (id:number, newState:"done") => void
    onImportant: (id:number, newState:"important") => void
    onDelete: (id:number)=> void
}
// props: ITodoListProps

const TodoList: FC<ITodoListProps> = (props) => {
   
    return (
        <ul>
            {/* {props.todos.map(item => <TodoListItem 
            text={item.name}
            done={item.done}
            important={item.important} />)} */}
            
            {props.todos.map( item => (
                <TodoListItem key={item.id} {...item} 
                onDoneClick={() => props.onDone(item.id, "done")}
                onImportantClick={() => props.onImportant(item.id, "important")}
                onDeleteClick={() => props.onDelete(item.id)}
                />
            ))}
        </ul>
    )
}

export default TodoList