import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Admingallerybar() {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    const homeNavbarColor = "#FFFFFF";
    const isHomePage = location.pathname === '/';

    const getNavLinkClass = (path) => {
        const activeClass = location.pathname === path ? 'nav-linkss active' : 'nav-linkss';
        return isHomePage ? `${activeClass} home-active` : activeClass;
    };

    const handleNavClick = () => {
        setExpanded(false);
    };
    
    const disableRightClick = (event) => {
        event.preventDefault();
    };

    return (
        <div onContextMenu={disableRightClick}>
            <Navbar  style={{ backgroundColor: homeNavbarColor,boxShadow:' 0 5px 6px rgba(0, 0, 0, 0.1)' }} >
                <Container>
  
                    <Navbar.Collapse >
                        <Nav className="me-auto">
                            <ul className="navbar-nav hello">
                                <li className="menu3 nav-item">
                                    <Link to="/AdminGallery" className={getNavLinkClass('/AdminGallery')} style={{ color: '#345261', textDecoration: 'none' }} onClick={handleNavClick}>Photos</Link>
                                </li>
                                <li className="menu2 nav-item">
                                    <Link to="/AdminVideo" className={getNavLinkClass('/AdminVideo')} style={{ color: '#345261', textDecoration: 'none' }} onClick={handleNavClick}>Videos</Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Admingallerybar;



