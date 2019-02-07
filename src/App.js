import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Button from 'react-bootstrap/Button'


//Component principale, 
class App extends Component {
  state = {
    index:0
  }

  previous = (size) => {
    const {index} = this.state;
    if(index === 0) this.setState({index: size - 1});
    else this.setState({index: index - 1});
  }

  next = (size) => {
    const {index} = this.state;
    if(index === size - 1) this.setState({index: 0});
    else this.setState({index: index + 1});
  }

  render() {
    const components = [
      {code:(
        <div className="row">
           <h1>React</h1>
           <img src={logo} alt="react"/>
        </div>
        )},
      {code:(
        <div>
          <h1>test2</h1>
        </div>
        )},
      {code:(
      <div>
        <h1>test3</h1>
      </div>
      )}
    ]
    return (
      <div className="App">
        {components[this.state.index].code}
          <Button variant="success" onClick={() => this.previous(components.length)}>Previous</Button>
          <Button variant="success" onClick={() => this.next(components.length)}>Next</Button>
      </div>
    );
  }
}

export default App;
