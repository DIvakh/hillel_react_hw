import React from 'react';

class Task3 extends React.Component {
  constructor() {
    super();
    this.state = { showingButton: true };
    this.toggleContent = this.toggleContent.bind(this);
  }
  toggleContent() {
    this.setState((prevState) => ({
      showingButton: !prevState.showingButton
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleContent}>
          {this.state.showingButton ? 'Show' : 'Hide'}
        </button>
      </div>
    );
  }
}

export default Task3;
