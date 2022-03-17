
import React from "react";
import FilteredListState from "./FilteredListState";

class ListContainer extends React.Component {
  state = {
    list: ["Batmano", "Supermano", "Hamupipelo", "Batwomano"],
    text: '',
  }
  onChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
    })
  }
  onClickHandler = (event) => {
    this.setState(prev => {
      console.log('prev', prev)
      const newList = [...prev.list];
      newList.push(this.state.text);
      return {
        list: newList
      }
    })
  }
  render() {
    const { list } = this.state;

    return (
      <div>
        <input type="text" onChange={ this.onChangeHandler } />
        <button type="button" onClick={ this.onClickHandler  }>Add</button>
        <hr />
        { this.state.list }
        <hr />

        <FilteredListState list={ list } />
      </div>
    )
  }
}

export default ListContainer;