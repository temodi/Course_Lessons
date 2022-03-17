import React from "react";

class FilteredListState extends React.Component {
  /* state = {
    searchString: '',
  }
   */

  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      searchString: ''
    }
  }
  onChangeHandler = (event) => {
    this.setState({
      searchString: event.target.value
    })
  }

  filterList = () => {
/*     return this.props.list
    .filter(item => item.toLowerCase().includes(this.state.searchString.toLowerCase())) */

    return this.state.list
    .filter(item => item.toLowerCase().includes(this.state.searchString.toLowerCase()))
  }

  render() {
    return (
      <div className="">
        <input type="text" onChange={ this.onChangeHandler } />
        <ul>
          { this.filterList().map((item, index) => <li key={ `list_${index}` }>{ item }</li>) }      
        </ul>
      </div>
    )
  }
}

export default FilteredListState