import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ["jinsoo", "binary"]
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      })
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => `${friend}`);
  }
}

class Portals extends Component {
  render() {
    return createPortal(
      <Message />, document.getElementById("touchme")
    );
  }
}

const Message = () => "Just touch me";

class ReturnTypes extends Component {
  render() {
    return "HI"
  }
}

const ErrorFallBack = () => "something wrong"

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    console.log(`error is ${error}, info is ${info}`);
    this.setState({
      hasError: true
    })
  }
  render() {
    const { hasError } = this.state;
    return (
      <>
        <ReturnTypes></ReturnTypes>
        <Portals></Portals>
        {hasError ? <ErrorFallBack /> : <ErrorMaker />}
      </>
    );
  }

}

export default App;
