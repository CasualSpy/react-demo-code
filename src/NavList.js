import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap';

class NavList extends Component {


    render(props) {
        const items = this.props.items;
        const listItems = items.map((item) =>
            <NavDropdown.Item href="#" onClick={() => this.props.navigate(item.id)}>{item.name}</NavDropdown.Item>);
        return <NavDropdown title="Pages">{listItems}</NavDropdown>
    }
}

export default NavList