import React, { Component } from 'react'

interface IFilterButton {
    onFilter: (value: string) => void
    
}
export default class FilterButtons extends Component <IFilterButton> {
  render() {

    return (
      <div>
        <button onClick={() => this.props.onFilter("all")}>All</button>
        <button onClick={() => this.props.onFilter("done")}>Done</button>
        <button onClick={() => this.props.onFilter("important")}>Important</button>
        
      </div>
    )
  }
}




