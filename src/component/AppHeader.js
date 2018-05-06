import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from './comp.svg';
import './AppHeader.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "DJ"
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
       <Navbar className="App-header" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="m-2 App-logo" alt="logo" />
            <div className="offset">
            <h1 className="App-title">Computer Shop</h1>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">{ this.state.name }</NavLink>
              </NavItem>
             <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Sell With us
                  </DropdownItem>
                  <DropdownItem>
                    Whole Sale
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Cart</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default App;
