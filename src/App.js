import React, { Component } from 'react';
import './App.css';


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
      {code:(<div><h1>test</h1><h2>test</h2></div>)},
      {code:<h1>test2</h1>},
      {code:<h1>test3</h1>}
    ]
    return (
      <div className="App">
        {components[this.state.index].code}
          <button type="button" onClick={() => this.previous(components.length)}>Previous</button>
          <button type="button" onClick={() => this.next(components.length)}>Next</button>
      </div>
    );
  }
}

export default App;
