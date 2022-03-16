import React from "react";

class SubTitle extends React.Component {
  // constructor nélkül state kezdőállapot beállítása
  state = {
    className: 'blue'
  }
  // mikor hasznaljuk
  // utolso allapot a komponensrol elmenti
  // eliratkozni valamilyen esemenykezelorol
  // clearTimeout / clearInterval-t itt hivjuk meg
  componentWillUnmount() {
    console.log('SubTitle componentWillUnmount called')
  }

  render() {
    console.log('SubTitle render')
    return <h2>{ this.props.title }</h2>
  }
}

export default SubTitle;