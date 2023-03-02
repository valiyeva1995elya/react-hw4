import React, { Component } from "react"
import { ITodo } from "../types"
import { Header, TodoList, SearchInput, AddInput, FilterButtons } from "./components"
import "./style.css"

interface IAppState {
    todos: ITodo[]
    searchText: string
    filterText: string
}

export default class App extends Component<{}, IAppState> {
    state = {
        todos: [
            { id: 1, text: "lern React", done: false, important: false },
            { id: 2, text: "drink Coffee", done: false, important: false },
            { id: 3, text: "drink Soda", done: false, important: false },
        ],
        searchText: "",
        filterText: "all"
    }

    onSearch = (value: string) => {
        this.setState({ searchText: value })
    }
    onChangeStateTodos = (id: number, newState: "done" | "important") => {
        this.setState((state) => {
            const todoIdx = this.state.todos.findIndex(item => item.id === id)
            const newTodo = {
                ...state.todos[todoIdx],
                done: !state.todos[todoIdx].done,

            }
            console.log(newState);

            const newTodo2 = {
                ...state.todos[todoIdx],
                important: !state.todos[todoIdx].important
            }
            const before = state.todos.slice(0, todoIdx)
            const after = state.todos.slice(todoIdx + 1)

            if (newState === "done") {

                return {
                    todos: [...before, newTodo, ...after]
                }
            } else {
                return {
                    todos: [...before, newTodo2, ...after]
                }
            }
        })
    }
    onDelete = (id: number) => {
        this.setState((state) => {
            const newTodo3 = state.todos.filter(item => item.id !== id)
            return {
                todos: newTodo3
            }

        })
    }
    onAddTask = (text: string) => {

        this.setState((state) => {
            const newTodo: ITodo = {
                id: Math.random(),
                text,
                done: false,
                important: false

            }
            return {
                todos: [...state.todos, newTodo]
            }
        })
    }
    onFilter = (value: string) => {
        this.setState({ filterText: value })
    }
    filterData = (filteredTodos: ITodo) => {
        if (this.state.filterText === "all") {
            return true
        } else if (this.state.filterText === "done") {
            return filteredTodos.done === true
        } else if (this.state.filterText === "important") {
            return filteredTodos.important === true
        }
    }

    render() {
        const { searchText, todos } = this.state;
        const filteredTodos = todos.filter(
            todo => todo.text.toLowerCase().includes(searchText.toLowerCase())
        ).filter((item) => this.filterData(item))

        return (
            <div>
                <Header title="Hello" />
                <AddInput onAdd={this.onAddTask} />
                <SearchInput
                    search={this.state.searchText}
                    onSearch={this.onSearch}
                />
                <FilterButtons
                    onFilter={this.onFilter}
                />
                <TodoList
                    todos={filteredTodos}
                    onDone={this.onChangeStateTodos}
                    onImportant={this.onChangeStateTodos}
                    onDelete={this.onDelete}
                />

            </div>
        )
    }
}