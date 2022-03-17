import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
 
class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: props.defaultIndex,
      navLeftClassName: '',
      navRightClassName: '',
    }
  }

  onClickLeft = (event) => {
    event.preventDefault();
 
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      })
    }

  }
  onClickRight = (event) => {
    event.preventDefault();
 
    if (this.state.index < this.props.images.length - 1) {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }

  onMouseEnterLeft = (event) => {
    this.setState({
      navLeftClassName: 'active'
    })
  }

  onMouseLeaveLeft = (event) => {
    this.setState({
      navLeftClassName: ''
    })
  }

  onMouseEnterRight = (event) => {
    this.setState({
      navRightClassName: 'active'
    })
  }

  onMouseLeaveRight = (event) => {
    this.setState({
      navRightClassName: ''
    })
  }

  render() {
    const { images } = this.props;
    const { index, navLeftClassName, navRightClassName } = this.state;
 
    return (
      <div className="slider">
        <div className={ `nav-left ${navLeftClassName}` } onMouseEnter={ this.onMouseEnterLeft } onMouseLeave={ this.onMouseLeaveLeft }>
          <a href="/" onClick={ this.onClickLeft }><FontAwesomeIcon icon={ faChevronLeft } className="color-icon"/></a>
        </div>
        <img src={ images[index] } />
        <div className={ `nav-right ${navRightClassName}` } onMouseEnter={ this.onMouseEnterRight } onMouseLeave={ this.onMouseLeaveRight }>
          <a href="/" onClick={ this.onClickRight }><FontAwesomeIcon icon={ faChevronRight }  className="color-icon" /></a>
        </div>
      </div>
    )
  }
}

export default Slider;