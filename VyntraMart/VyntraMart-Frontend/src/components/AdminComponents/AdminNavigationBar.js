import React from 'react'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap'

function AdminNavigationBar() {
    return (

<React.Fragment>
  
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Vyntra Admin</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/admin">Dashboard</Nav.Link>
      <Nav.Link href="/admin/products">Products</Nav.Link>
      <Nav.Link href="#user">User</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  


</React.Fragment>
    )
}

export default AdminNavigationBar
