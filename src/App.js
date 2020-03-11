import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

// const BoundaryHOC = ProtectedComponent =>
//   class Boundary extends Component {
//     state = {
//       hasError: false
//     }
//     componentDidCatch = () => {
//       this.setState({
//         hasError: true
//       });
//     };

//     render() {
//       const { hasError } = this.state;

//       if (hasError) return <ErrorFallBack />
//       else return <ProtectedComponent />
//     }
//   }

// class ErrorMaker extends Component {
//   state = {
//     friends: ["jinsoo", "binary"]
//   }
//   componentDidMount = () => {
//     setTimeout(() => {
//       this.setState({
//         friends: undefined
//       })
//     }, 2000);
//   };
//   render() {
//     const { friends } = this.state;
//     return friends.map(friend => `${friend}`);
//   }
// }

// const PErrorMaker =  BoundaryHOC(ErrorMaker);

// class Portals extends Component {
//   render() {
//     return createPortal(
//       <Message />, document.getElementById("touchme")
//     );
//   }
// }

// const PPortals =  BoundaryHOC(Portals);

// const Message = () => "Just touch me";

// class ReturnTypes extends Component {
//   render() {
//     return "HI"
//   }
// }

// const PReturnTypes =  BoundaryHOC(ReturnTypes);

// const ErrorFallBack = () => "something wrong"

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const { pizzas } = state;

  if (pizzas < MAX_PIZZAS) {
    return {
      pizzas: pizzas + 1
    }
  }
  else {
    return null;
  }
}

class Contolled extends Component {
  state = {
    pizzas: 10
  }
  render() {
    const { pizzas } = this.state;
    return (<button onClick={this._handleClick}>
      {`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}
    </button>);
  }

  _handleClick = () => {
    this.setState(eatPizza);
  }
}

class App extends Component {

  render() {
    return (
      <Contolled>
        {/* <PReturnTypes />
        <PPortals />
        <PErrorMaker /> */}
      </Contolled>
    );
  }

}

export default App;
