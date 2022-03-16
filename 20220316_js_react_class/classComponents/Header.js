import React from 'react';
import SubTitle from './SubTitle';

class Header extends React.Component {

  // Ez az alap constructur, ami "kotelezo", de ez jon a React.Componentbol, ez hívodik meg elsonek
  constructor(props) {
    console.log('Constructor called');
    super(props);
    // state-et alapallapotba akarjuk hozni
    // this.state egy objektum kell hogy legyen
    // this.state-en beluli property-k lesznek az allapotok
    // ez az egyetlen kivetel, amikor state valtozot közvetlenül módosíthatok
    this.state = {
      className: 'red',
      showSubTitle: true,
    }

    this.handleClick = this.handleClick.bind(this); 
    // Letrehoz egy új függvényt amihez kötti a this-t
    // Az eredeti eventHandler fv-t irja felul egy olyan új függvénnyel ahol létezni fog a this.
  }

  // (MOUNTING), 1x amikor létrejött az componens és lefutott az első render, utána hívodik meg
  componentDidMount() {
    console.log('componentDidMount called')

    // state beallitasa uj ertekkel
    // setState param az egy objektum
    // nem felulirja az this.state propertyt, hanem updateli/mergeli
    this.setState({
      className: 'blue'
    })
  }

  // (UNMOUNTING) 1x hivodik meg amikor megszunik a componens 
  componentWillUnmount() {
    console.log('componentWillUnmount called')
  }

  // (UPDATE) Amikor lefutott a Render utanna hivodik meg
  componentDidUpdate() {
    console.log('componentDidUpdate called');
  }
 


  // ES5
  handleClick(event) {
    console.log('handleClick called', event.target)
    this.setState({
      showSubTitle: false
    })
  }

  // ES6 (arrow function) callback function a eventHandlernek
  handleClick2 = (event) => {
    console.log('handleClick called', event.target)
    this.setState({
      showSubTitle: false
    })
  }

  handleInput = (event) => {
    console.log(event)
  }
  // kotelezo metodus
  render() {
    // props destructuring
    const { title, subTitle } = this.props;
    // state destructuring
    const { className, showSubTitle } = this.state;

    console.log('Header render called', this.state)
    
    // EZ HIBBAS (mert se renderben, se közvetlenül nem módosítjuk) this.state.className = 'brown';

    return (<header>
      { /* <h1>{ this.props.title }</h1> */ }
      
      <h1 className={ className }>{ title }</h1>
      
      {showSubTitle && <SubTitle title={ subTitle } />}

      {/* <div>{ this.state.className } </div> */}
      
      <div>{ className }</div>
      <input type="text" onChange={ this.handleInput } />
      <button type="button" onClick={ this.handleClick2 }>Click Me!</button>
  
    </header>) 
  }
}

export default Header;