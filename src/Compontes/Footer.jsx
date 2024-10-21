import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../img/logo2.png';
import location from '../img/location.png';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import fa from '../img/fa.png';
import xxx from '../img/xxx.png';
import you from '../img/you.png';
import inst from '../img/inst.png';
import call from '../img/call.png';
import mail from '../img/mail.png';
function Footer() {
    return (
        <div style={{ backgroundColor: '#203583',fontFamily: 'Roboto, sans-serif'  }} >
            <Container >
                <div className='d-flex '>
                    <img src={logo} alt="Logo" style={{ width: '40px' }} className='mt-5' />
                    <h3 className='mx-3  mt-5' style={{ color: 'white' }}><b> INDIAN NATIONAL CONGRESS</b></h3>
                </div>
                <div className='row mt-5   '>
                    <div className='col-sm-6'>
                        <div className='row ' style={{ color: 'white', width: '90%' }}>
                            <div className='col-1'>
                                <img src={location} alt="Logo" style={{ width: '1rem' }} />
                            </div>
                            <div className='col'>
                                <p><b>Address</b></p>
                                <p className='mt-3'>No.40, Jawahar Nagar, NGO New Colony,
                                    Perumalpuram post,, Tirunelveli, India, Tamil Nadu</p>
                            </div>
                        </div>
                        <div className='row ' style={{ color: 'white', width: '90%' }}>
                            <div className='col-1'>
                                <img src={location} alt="Logo" style={{ width: '1rem' }} />
                            </div>
                            <div className='col'>
                                <p><b>Address</b></p>
                                <p className='mt-3'>No.40, Jawahar Nagar, NGO New Colony,
                                    Perumalpuram post,, Tirunelveli, India, Tamil Nadu</p>
                            </div>
                        </div>
                        <div className='row mt-5 mb-5' style={{ color: 'white', fontSize: '2rem' }} >
                            <div className='d-flex mx-4'>
                                <img src={inst} alt="Logo" className='mx-4' style={{ width: '2rem' }} />
                                <img src={fa} alt="Logo" className='mx-4' style={{ width: '2rem' }} />
                                <img src={xxx} alt="Logo" className='mx-4' style={{ width: '2rem' }} />
                                <img src={you} alt="Logo" className='mx-4' style={{ width: '2rem' }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 '>
                        <div className='row ' style={{ color: 'white', width: '90%' }}>
                            <div className='col-1 '>
                                <img src={call} alt="Logo" style={{ width: '1.3rem' }}  />
                            </div>
                            <div className='col mx-2'>
                                <p><b>Call Us</b></p>
                                <p className=''>+91 90876 54321
                                </p>
                                <p >+91 90876 54321
                                </p>
                            </div>
                        </div>
                        <div className='row ' style={{ color: 'white', width: '90%' }}>
                            <div className='col-1'>
                                <img src={mail} alt="Logo" style={{ width: '1.3rem' }} />
                            </div>
                            <div className='col mx-2'>
                                <p><b>Email Us </b></p>
                                <p className=''>Congress@gmail.com
                                </p>
                                <p>Congress@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 px-5' style={{ color: 'white' }}>
                        <p><b>Quick Links</b></p>
                        <a href="/" style={{ textDecoration: 'none', color: 'white' }}> <p>Home</p></a>
                        <a href="/Events" style={{ textDecoration: 'none', color: 'white' }}> <p>Events</p></a>
                        <a href="/Achievement" style={{ textDecoration: 'none', color: 'white' }}> <p>Achievement</p></a>
                        <a href="/News" style={{ textDecoration: 'none', color: 'white' }}> <p>News</p></a>
                        <a href="/Gallery" style={{ textDecoration: 'none', color: 'white' }}> <p>Gallery</p></a>
                    </div>


                </div>

                <hr style={{ color: 'white' }} />
                <div style={{ textAlign: 'center', color: 'white' }} >
                    <p className='p-4'>© Copyright 2023 indiannationalcongress.com , All rights reserved. | Designed by spangles</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer

