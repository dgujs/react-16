import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

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

function App() {
  return (
    <>
      <ReturnTypes></ReturnTypes>
      <Portals></Portals>
    </>
  );
}

export default App;
