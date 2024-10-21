import React from 'react';
import Headerbar from '../adminnavbar/Headerbar';
import Form from 'react-bootstrap/Form';
import { IoImageOutline } from "react-icons/io5";
import congress16 from '../img/congress16.png';
import { Dropdown } from 'react-bootstrap';
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { LuPenLine } from 'react-icons/lu';
import { RiDeleteBin6Line } from "react-icons/ri";

const Achievementssection = () => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <PiDotsThreeOutlineVertical ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }} />
    ));
    return (
        <div className="container-fluid"style={{ fontFamily: 'Roboto, sans-serif' }} >
            <Headerbar />
            <div className="main-content">
                <div style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="p-3">
                        <h3><b>New Slide</b></h3>
                    </div>
                    <div className="p-3">
                        <Form.Label><b>Heading</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter your Heading" />
                        <Form.Label className="mt-3"><b>Sub Heading</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter your Sub Heading" />
                    </div>
                    <Form.Label className="mt-5 p-3"><b>Button</b></Form.Label>
                    <div className="d-flex p-3">
                        <label className="black-radio">
                            <input type="radio" name="option" value="1" />
                        </label>
                        <Form.Label className="mx-3" style={{ color: '#203583' }}><b>Join Us</b></Form.Label>
                        <label className="black-radio">
                            <input type="radio" name="option" value="2" />
                        </label>
                        <Form.Label className="mx-3" style={{ color: '#203583' }}><b>Contribute</b></Form.Label>
                        <label className="black-radio">
                            <input type="radio" name="option" value="3" />
                        </label>
                        <Form.Label className="mx-3" style={{ color: '#203583' }}><b>None</b></Form.Label>
                    </div>
                    <div className="row mt-5 p-3">
                        <Form.Label><b>Upload Image</b></Form.Label>
                        <label htmlFor="editFiles" className="profilesphoto form-label btn rounded p-1 mx-3"
                            style={{
                                width: '30%',
                                height: 'auto',
                                color: '#203583',
                                borderColor: '#203583',
                                borderStyle: 'dotted'
                            }}>
                            <p style={{ color: '#203583' }} className="p-3"><IoImageOutline /><br /> Upload Image</p>
                            <input type="file" id="editFiles" style={{ display: 'none' }} />
                        </label>
                    </div>
                    <div className="d-flex justify-content-end p-5">
                        <button type="submit" className="btn btn mt-5 p-3 buttones6" style={{ width: '200px' }}>
                            Upload
                        </button>
                    </div>
                    <hr />
                </div>

                <div className="p-3 " style={{ backgroundColor: '#FFFFFF' }}>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3><b>Slide 01</b></h3>
                        </div>

                        <div>
                        <Dropdown className="custom-dropdown">
                                <Dropdown.Toggle as={CustomToggle} />
                                <Dropdown.Menu>
                                    <Dropdown.Item><LuPenLine style={{color:'green'}}/>   Edit</Dropdown.Item>
                                    <Dropdown.Item><RiDeleteBin6Line style={{color:'red'}}/>   Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h6><b>Heading</b></h6>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla .</p>
                    </div>
                    <div>
                        <h6><b>Sub Heading</b></h6>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla .</p>
                    </div>

                    <div>
                        <h6><b>Button</b></h6>
                        <p><b>Join Us</b></p>
                        <img src={congress16} alt="" style={{ width: '200px' }} />
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Achievementssection
