import React, { Component, Fragment } from 'react';
import './App.css';
import { Button, Container, Row, Col, } from 'react-bootstrap'
import Page1 from './Page1.js'
import AppNav from './AppNav.js'


//Component principale, 
class App extends Component {

  state = {
    index: 0
  }

  previous = (size) => {
    const { index } = this.state;
    if (index === 0) this.setState({ index: size - 1 });
    else this.setState({ index: index - 1 });
  }

  next = (size) => {
    const { index } = this.state;
    if (index === size - 1) this.setState({ index: 0 });
    else this.setState({ index: index + 1 });
  }

  navigate = (id) => {
    this.setState({ index: id });
  }

  getComponents = () => {
    return [
      {
        id: 0,
        name: "Page 1",
        code: (
          <Page1 />
        )
      },
      {
        id: 1,
        name: "Page 2",
        code: (
          <Fragment>
          </Fragment>
        )
      },
      {
        id: 2,
        name: "Page 3",
        code: (
          <Fragment>
          </Fragment>
        )
      }
    ]
  }

  render() {
    return (
      <Container className="App">
        <AppNav components={this.getComponents()} navigate={this.navigate} />
        <h1>{this.getComponents()[this.state.index].name}</h1>
        <Row>
          <Col>
            <Button variant="secondary" onClick={() => this.previous(this.getComponents().length)}>&larr;</Button>
            <Button variant="secondary" onClick={() => this.next(this.getComponents().length)}>&rarr;</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.getComponents()[this.state.index].code}
          </Col>
        </Row>
        
      </Container >
    );
  }
}

export default App;
