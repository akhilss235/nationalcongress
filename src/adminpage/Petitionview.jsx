import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { Container, Row, Col } from 'react-bootstrap';  // Ensure Col is imported

function Petitionview() {
    return (
        <div>
            <div className='d-flex justify-content-between mx-3'>
                <div>
                    <a href="AdminPetitions" style={{ textDecoration: 'none', color: '#505050' }}>
                        <FaArrowLeftLong style={{ fontSize: '1.5rem' }} />
                    </a>
                </div>
                <div className='d-flex'>
                    <span className='mx-5'>
                        <CiSaveDown2 className='mx-4' style={{ fontSize: '1.5rem' }} /><p > Download</p>
                    </span>
                    <span >
                        <IoPrintOutline className='' style={{ fontSize: '1.5rem' }} /><p > Print</p>
                    </span>
                </div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='p-4'>
                <div className='d-flex justify-content-between  p-4'>
                    <div>
                        <h3><b>Petition</b></h3>

                    </div>
                    <div>
                        <span className='d-flex'>
                            <CiClock2 className='mx-2' style={{ fontSize: '1.5rem' }} /><p > 11 January 2023 | 10:30 AM</p>
                        </span>
                    </div>
                </div>
                <div className='row mx-3'>
                    <div className='col-sm-5'>
                        <Row>
                            <Col><p><b>Name</b></p>

                            </Col>
                            <Col>
                                <p>Abijith</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col><p><b>Whatsapp Number</b></p>

                            </Col>
                            <Col>
                                <p>+91 90876 54321</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col><p><b>State</b></p>

                            </Col>
                            <Col>
                                <p>Tamil Nadu</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col><p><b>Ward Number</b></p>

                            </Col>
                            <Col>
                                <p>34</p>
                            </Col>
                        </Row>
                    </div>

                    <div className='col-sm-5'>
                        <Row>
                            <Col><p><b>Phone Number</b></p>

                            </Col>
                            <Col>
                                <p>+91 90876 54321</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col><p><b>Email </b></p>

                            </Col>
                            <Col>
                                <p>akhill@gamil.com</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col><p><b>District</b></p>

                            </Col>
                            <Col>
                                <p>Kanniyakumari</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col><p><b>Village/Town</b></p>

                            </Col>
                            <Col>
                                <p>Ramayanpatti</p>
                            </Col>
                        </Row>


                    </div>
                    <h3 className='mt-3'><b>Title</b></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>


            </div>








            <div style={{ backgroundColor: '#FFFFFF' }} className='p-4 mt-5'>

                <div className='row mx-3'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus lorem. Pellentesque at nunc non ex gravida laoreet. Ut quis rhoncus lacus. Phasellus rhoncus feugiat venenatis. Integer varius odio a neque ornare cursus. Phasellus in metus quis orci malesuada sollicitudin nec ut arcu. Pellentesque eu pharetra justo. Quisque posuere magna nec ante accumsan, eu ultricies arcu suscipit. Sed quis lorem id justo facilisis mollis. Maecenas non tristique turpis, ut facilisis eros. Curabitur ut nunc non arcu viverra feugiat. Nam mauris lacus, commodo at diam non, hendrerit eleifend dolor. Mauris lacus felis, dictum a auctor at, dapibus eu dolor.
                        Pellentesque mattis feugiat urna suscipit semper. Phasellus sit amet elit vulputate, maximus ex vel, porta erat. Quisque pulvinar feugiat enim euismod suscipit. Etiam ullamcorper metus et mauris congue, vitae scelerisque neque vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum dolor eget imperdiet varius. Duis a urna tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed et sagittis nisl. Vivamus nibh mauris, viverra eget bibendum pretium, placerat nec ligula. Donec convallis quis lectus vitae lacinia. Maecenas a purus eu mi porttitor iaculis. In elementum augue id ligula accumsan, mattis blandit mauris pretium. Nunc elementum dolor nisl, ac venenatis ex molestie a. Fusce vitae erat sit amet magna posuere ullamcorper efficitur et neque.
                    </p>
                    <Row>
                        <Col>
                            <img src="" alt="" />

                        </Col>

                    </Row>

                </div>
            </div>
        </div>
    )
}

export default Petitionview
