import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Topbar from "../Compontes/Topbar";

function Gallerybar() {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    const homeNavbarColor = "#FFFFFF";
    const isHomePage = location.pathname === '/';

    const getNavLinkClass = (path) => {
        const activeClass = location.pathname === path ? 'nav-links active' : 'nav-links';
        return isHomePage ? `${activeClass} home-active` : activeClass;
    };

    const handleNavClick = () => {
        setExpanded(false);
    };
    
    const disableRightClick = (event) => {
        event.preventDefault();
    };

    return (
        <div onContextMenu={disableRightClick} style={{ fontFamily: 'Roboto, sans-serif' }}>
            <Navbar expanded={expanded} expand='lg' style={{ backgroundColor: homeNavbarColor }} >
                <Container>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => setExpanded(!expanded)}
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <ul className="navbar-nav hello">
                                <li className="menu3 nav-item">
                                    <Link to="/Gallery" className={getNavLinkClass('/Gallery')} style={{ color: '#345261', textDecoration: 'none' }} onClick={handleNavClick}>Photos</Link>
                                </li>
                                <li className="menu2 nav-item">
                                    <Link to="/Videos" className={getNavLinkClass('/Videos')} style={{ color: '#345261', textDecoration: 'none' }} onClick={handleNavClick}>Videos</Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Gallerybar;
