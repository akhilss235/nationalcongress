import React, { useState } from 'react';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../Styles/Sidebar.css';
import { BsCalendar3Event } from "react-icons/bs";
import { PiCalendarStarLight } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Hedsection from '../adminnavbar/hedsection';
import { IoNewspaperOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { TiGroupOutline } from "react-icons/ti";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refresh_token');
        const accessToken = localStorage.getItem('access_token');

        if (!refreshToken) {
            console.error('No refresh token found');
            return;
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/logout/',
                { refresh_token: refreshToken },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );

            if (response.status === 200) {
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('access_token');
                navigate('/Login');
            } else {
                console.error('Logout failed with status:', response.status);
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                if (error.response.data.code === 'token_not_valid') {
                    console.error('The provided token is not valid.');
                    localStorage.removeItem('refresh_token');
                    localStorage.removeItem('access_token');
                    navigate('/Login');
                }
            } else {
                console.error('Error during logout:', error);
            }
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuItem = [
        {
            path: "/Header",
            name: "Header",
            icon: <BsCalendar3Event style={{ width: '25px' }} />,
        },
        {
            path: "/AdminEvents",
            name: "Events",
            icon: <PiCalendarStarLight style={{ width: '25px' }} />,
        },
        {
            path: "/Adminachievements",
            name: "Achievements",
            icon: <GiAchievement style={{ width: '25px' }} />,
        },
        {
            path: "/Adminnews",
            name: "News",
            icon: <IoNewspaperOutline style={{ width: '25px' }} />,
        },
        {
            path: "/AdminGallery",
            name: "Gallery",
            icon: <GrGallery style={{ width: '25px' }} />,
        },
        {
            path: "/AdminPetitions",
            name: "Petitions",
            icon: <TfiWrite style={{ width: '25px' }} />,
        },
        {
            path: "/AdminVolunteer",
            name: "Volunteer",
            icon: <TiGroupOutline style={{ width: '25px' }} />,
        }
    ];

    return (
        <>
            <Hedsection toggle={toggle} isOpen={isOpen} />
            <div className="section d-flex " style={{ fontFamily: 'Roboto, sans-serif' }}>
                <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="linkss" activeClassName="active">
                            <div className="icon mt-1 mb-1">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1">
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                    <div className="link  d-flex " style={{ marginTop: '10%' }} onClick={handleShow}>
                        <div className="icon"><FaSignOutAlt /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text d-flex">
                            Logout
                        </div>
                    </div>
                </div>
                <main className="content">{children}</main>
            </div>

            <Modal show={show} centered onHide={handleClose}>
                <Modal.Body style={{ height: '180px' }}>
                    <div>
                        <h6 style={{ textAlign: 'center', marginTop: '30px' }}>
                            Are you sure you want to logout?
                        </h6>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
                        <Button variant="success" onClick={handleClose}>Close</Button>
                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const withSideBarLayout = (component) => {
    return <Sidebar>{component}</Sidebar>;
};

export default withSideBarLayout;
