import React from 'react';

class Task1 extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Stepan', age: 25 };
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({ name: 'Mykola', age: 30 });
  }

  render() {
    return (
      <div>
        <p>
          Name: {this.state.name}, age: {this.state.age}
        </p>
        <button onClick={this.changeName}>Click on me</button>
      </div>
    );
  }
}

export default Task1;
