import React, { Component } from 'react';
import Timer from './Timer.js'
import logo from './logo.svg'
import NavList from './NavList.js'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class AppNav extends Component {
    render() {
        return(
        <Navbar collapseOnSelect bg="secondary" expand="md" className="Navbar">
            <Navbar.Brand><a href="#" onClick={() => this.props.navigate(0)}><img src={logo} alt="react" width="40" height="40" className="App-logo" /></a></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://github.com/CasualSpy/react-demo-code">Github</Nav.Link>
                    <NavList items={this.props.components} navigate={this.props.navigate} />
                </Nav>
                <Nav>
                    <NavItem><Timer /></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default AppNav