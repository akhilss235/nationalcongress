import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import { HiOutlineBars3 } from "react-icons/hi2";

function Hedsection({ toggle, isOpen }) {
  const location = useLocation();

  return (
    <Navbar className="navbar-custom" style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#FFFFFF' }}>
      <div className="top_section">
        <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
          <HiOutlineBars3 onClick={toggle} />
        </div>
      </div>
      <Navbar.Brand href="/" className='d-flex mx-2'>
        <img src={logo} alt="Logo" style={{ width: '40px' }} />
        <Nav className="me-auto m-2" style={{ color: '#203583' }}>
          <b>INDIAN NATIONAL CONGRESS</b>
        </Nav>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Hedsection;