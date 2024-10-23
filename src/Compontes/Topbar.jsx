import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';

function Topbar() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom" style={{ fontFamily: 'Roboto, sans-serif', position: 'fixed', width: '100%', top: '0', left: '0', zIndex: '1000' }}>
      <Container>
        <Navbar.Brand href="/" className='d-flex align-items-center'>
          <img src={logo} alt="Logo" style={{ width: '40px' }} />
          <Nav className="me-auto m-2" style={{ color: '#203583' }}>
            <b>INDIAN NATIONAL CONGRESS</b>
          </Nav>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ color: '#203583' }}>
            <LinkContainer to="/">
              <Nav.Link className={getNavLinkClass('/')}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Events">
              <Nav.Link className={getNavLinkClass('/Events')}>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Achievement">
              <Nav.Link className={getNavLinkClass('/Achievement')}>Achievement</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/News">
              <Nav.Link className={getNavLinkClass('/News')}>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Gallery">
              <Nav.Link className={getNavLinkClass('/Gallery')}>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Petition">
              <Nav.Link className={getNavLinkClass('/Petition')}>Petition</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
