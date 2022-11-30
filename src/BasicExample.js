import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



function BasicExample() {

  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    alert(searchInput);

  }


  const handleChange = (e) => {
    console.log(e);
    const searchInput = e.target.value;


  }


  return (


    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Eduonix</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">


              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="Certification Program in Full stack Developement">Certification Program in Full stack Developement</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="Certification Program in Business Strategy">
                  Certification Program in Business Strategy
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="Certification Program in Digital Marketing">Certification Program in Digital Marketing</NavDropdown.Item>
                <NavDropdown.Divider />

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={handleChange} />
            <Button variant="outline-light">Search</Button>
          </Form>

        </Container>

      </Navbar>
    </div>

  );
}

export default BasicExample;