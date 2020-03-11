import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    }
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };

    render() {
      const { hasError } = this.state;

      if (hasError) return <ErrorFallBack />
      else return <ProtectedComponent />
    }
  }

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

const PErrorMaker =  BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(
      <Message />, document.getElementById("touchme")
    );
  }
}

const PPortals =  BoundaryHOC(Portals);

const Message = () => "Just touch me";

class ReturnTypes extends Component {
  render() {
    return "HI"
  }
}

const PReturnTypes =  BoundaryHOC(ReturnTypes);

const ErrorFallBack = () => "something wrong"

class App extends Component {

  render() {
    return (
      <>
        <PReturnTypes />
        <PPortals />
        <PErrorMaker />
      </>
    );
  }

}

export default BoundaryHOC(App);
