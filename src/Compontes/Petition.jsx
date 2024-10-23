import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { IoImageOutline } from "react-icons/io5";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";
import MyEditor from "../Page/MyEditor";

function Petition() {
    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     phoneNumber: '',
    //     whatsappNumber: '',
    //     email: '',
    //     state: '',
    //     district: '',
    //     WardNumber: '',
    //     Village: '',
    //     Title: '',
    //     Content: '',
    // });

    // const [errors, setErrors] = useState({});
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleCheckboxChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         termsAccepted: e.target.checked,
    //     });
    // };

    // const handleEditorChange = (state) => {
    //     setEditorState(state);
    //     setFormData({
    //         ...formData,
    //         Content: JSON.stringify(convertToRaw(state.getCurrentContent())),
    //     });
    // };

    // const validateForm = () => {
    //     const errors = {};
    //     if (!formData.fullName) errors.fullName = 'Full Name is required';
    //     if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) errors.phoneNumber = 'Valid Phone Number is required';
    //     if (!formData.whatsappNumber || !/^\d{10}$/.test(formData.whatsappNumber)) errors.whatsappNumber = 'Valid Whatsapp Number is required';
    //     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid Email ID is required';
    //     if (!formData.state) errors.state = 'State is required';
    //     if (!formData.district) errors.district = 'District is required';
    //     return errors;
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formErrors = validateForm();
    //     setErrors(formErrors);

    //     if (Object.keys(formErrors).length === 0) {
    //         setIsSubmitting(true);
    //         try {
    //             const response = await fetch('YOUR_API_ENDPOINT', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(formData),
    //             });
    //             if (response.ok) {
    //                 alert('Form submitted successfully');
    //             } else {
    //                 alert('Error submitting form');
    //             }
    //         } catch (error) {
    //             alert('Error submitting form');
    //         } finally {
    //             setIsSubmitting(false);
    //         }
    //     }
    // };

    return (
        <>
                <Topbar />
               
   
        <div className='Congresscommittee mt-5 mb-5' style={{ fontFamily: 'Roboto, sans-serif'}}>
            <Container>
                <Form >
                    <div className='card p-5' style={{ borderColor: '#203583', color: '#203583', borderRadius: '10px',marginTop:'10%'  }}>
                        <div className='d-flex justify-content-center mb-3'>
                            <img src={logo} alt="Logo" style={{ width: '40px' }} />
                        </div>
                        <div className='d-flex justify-content-center mb-4'>
                            <h4><b>Petition</b></h4>
                        </div>
                        <div className='row mt-5'>
                            <div className='col'>
                                <Form.Label><b>Full Name</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Full Name"
                                    name="fullName"
                                    // value={formData.fullName}
                                    // onChange={handleChange}
                                    // isInvalid={!!errors.fullName}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback> */}
                            </div>
                            <div className='col'>
                                <Form.Label><b>Phone Number</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    name="phoneNumber"
                                    // value={formData.phoneNumber}
                                    // onChange={handleChange}
                                    // isInvalid={!!errors.phoneNumber}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback> */}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <Form.Label><b>Whatsapp Number</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Whatsapp Number"
                                    name="whatsappNumber"
                                    // value={formData.whatsappNumber}
                                    // onChange={handleChange}
                                    // isInvalid={!!errors.whatsappNumber}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.whatsappNumber}</Form.Control.Feedback> */}
                            </div>
                            <div className='col'>
                                <Form.Label><b>Email ID</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="email"
                                    placeholder="Enter Email ID"
                                    name="email"
                                    // value={formData.email}
                                    // onChange={handleChange}
                                    // isInvalid={!!errors.email}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback> */}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <Form.Label><b>State</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Select State"
                                    name="state"
                                    // value={formData.state}
                                    // onChange={handleChange}
                                    // isInvalid={!!errors.state}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback> */}
                            </div>
                            <div className='col'>
                                <Form.Label><b>District</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Select District"
                                    name="district"
                                    // value={formData.district}
                                    // onChange={handleChange}
                                    // isInvalid={!!errors.district}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback> */}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <Form.Label><b>Ward Number</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Ward Number"
                                    name="WardNumber"
                                    // value={formData.WardNumber}
                                    // onChange={handleChange}
                                />
                            </div>
                            <div className='col'>
                                <Form.Label><b>Village/Town Name</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Village/Town Name"
                                    name="Village"
                                    // value={formData.Village}
                                    // onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <Form.Label><b>Title</b></Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Title"
                                    name="Title"
                                    // value={formData.Title}
                                    // onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <Form.Label><b>Content</b></Form.Label>
                                <div className="border p-2" style={{ minHeight: '200px' }}>
                                    {/* <Editor
                                        editorState={editorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                        toolbarClassName="toolbar"
                                        placeholder="Type Something...."
                                        onEditorStateChange={handleEditorChange}
                                    /> */}
                                    <MyEditor />
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5'>
                        <Form.Label><b>Upload Image</b></Form.Label>

                            <label htmlFor="editFiles" className="profilesphoto form-label btn rounded p-1"
                                style={{
                                    width: '30%',
                                    height: '80px',
                                    color: '#203583',
                                    borderColor: '#203583',
                                    borderStyle: 'dotted'
                                    
                                }}>
                               <p style={{color:'#203583'}}> <IoImageOutline /><br /> Upload Image</p> 
                                <input type="file" id="editFiles" style={{ display: 'none' }} />
                            </label>
                        </div>

                    </div>

                    <div className='d-flex justify-content-center'>
                    <a href='/home' style={{textDecoration:'none'}}>

               
                        <button
                            type="submit"
                            className="btn btn-primary mt-5 buttones"
                            style={{ width: '15rem', height: '4rem', borderRadius: '2rem' }}
                            // disabled={isSubmitting}
                        >
                            {/* {isSubmitting ? 'Submitting...' : 'Submit'} */}Submit
                        </button>
                        </a>
                    </div>
                </Form>
            </Container>
        </div>         <Footer /> 
        </>
    );
}



export default Petition