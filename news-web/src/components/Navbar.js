import React, { Component } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="local">Local</Nav.Link>
            <Nav.Link href="international">international</Nav.Link>
            <Nav.Link href="sports">Sports</Nav.Link>
            <Nav.Link href="entertainment">Entertainment</Nav.Link>
            <Nav.Link href="political">Political</Nav.Link>
            <Nav.Link href="addnews">Add News</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default NavbarPage;
