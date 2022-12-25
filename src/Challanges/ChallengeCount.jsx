import React from "react";

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 *
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

class ChallengeCount extends React.Component {
  //   const [count, setCount] = React.useState(0);

  state = {
    count: 0,
  };

  //   function add() {
  //     setCount((prevCount) => prevCount + 1);
  //   }

  add = () => {
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1,
      };
    });
  };
  //   function subtract() {
  //     setCount((prevCount) => prevCount - 1);
  //   }
  subtract = () => {
    this.setState((prevCount) => {
      return {
        count: prevCount.count - 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1 className="state--title">Challenge # 1</h1>
        <div className="counter">
          <button className="counter--minus" onClick={this.subtract}>
            –
          </button>
          <div className="counter--count">
            <h1>{this.state.count}</h1>
          </div>
          <button className="counter--plus" onClick={this.add}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default ChallengeCount;
