import React from 'react';

class Task2 extends React.Component {
  constructor() {
    super();
    this.state = { showingParagraph: true };
    this.toggleShowing = this.toggleShowing.bind(this);
  }
  toggleShowing() {
    this.setState((prevState) => ({
      showingParagraph: !prevState.showingParagraph
    }));
  }
  render() {
    return (
      <div>
        <p className={!this.state.showingParagraph ? 'hidden' : ''}>
          Name: Stepan, age: 25
        </p>
        <button onClick={this.toggleShowing}>Click on me</button>
      </div>
    );
  }
}

export default Task2;
