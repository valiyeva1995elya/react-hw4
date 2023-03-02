import React, { Component } from 'react'

interface IFilterButton {
    onFilter: (value: string) => void
    filter: string
}
export default class FilterButtons extends Component <IFilterButton> {
  render() {
const {filter} = this.props
    return (
      <div>
        <button  onClick={() => this.props.onFilter("all")} className={filter === "all"? "pressed" : "button"}>All</button>
        <button onClick={() => this.props.onFilter("done")} className={filter === "done"? "pressed" : "button"}>Done</button>
        <button onClick={() => this.props.onFilter("important")} className={filter === "important"? "pressed" : "button"}>Important</button>
        
      </div>
    )
  }
}




