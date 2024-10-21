import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";

function Joinvolunteer() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        whatsappNumber: '',
        email: '',
        state: '',
        district: '',
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
        contribution: '',
        termsAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            termsAccepted: e.target.checked
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = 'Full Name is required';
        if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) errors.phoneNumber = 'Valid Phone Number is required';
        if (!formData.whatsappNumber || !/^\d{10}$/.test(formData.whatsappNumber)) errors.whatsappNumber = 'Valid Whatsapp Number is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid Email ID is required';
        if (!formData.state) errors.state = 'State is required';
        if (!formData.district) errors.district = 'District is required';
        if (!formData.termsAccepted) errors.termsAccepted = 'You must accept the terms and conditions';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            try {
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    alert('Form submitted successfully');
                } else {
                    alert('Error submitting form');
                }
            } catch (error) {
                alert('Error submitting form');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            <Topbar />
            <div className='Congresscommittee mt-5 mb-5' style={{ fontFamily: 'Roboto, sans-serif' }}>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <div className='card p-5' style={{ borderColor: '#203583', color: '#203583', borderRadius: '10px' }}>
                            <div className='d-flex justify-content-center mb-3'>
                                <img src={logo} alt="Logo" style={{ width: '40px' }} />
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <h4><b>JOIN AS VOLUNTEER</b></h4>
                            </div>
                            <div className='row mt-5'>
                                <div className='col'>
                                    <Form.Label><b>Full Name</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter Full Name"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.fullName}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                                </div>
                                <div className='col'>
                                    <Form.Label><b>Phone Number</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        isInvalid={!!errors.phoneNumber}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
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
                                        value={formData.whatsappNumber}
                                        onChange={handleChange}
                                        isInvalid={!!errors.whatsappNumber}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.whatsappNumber}</Form.Control.Feedback>
                                </div>
                                <div className='col'>
                                    <Form.Label><b>Email ID</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="email"
                                        placeholder="Enter Email ID"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
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
                                        value={formData.state}
                                        onChange={handleChange}
                                        isInvalid={!!errors.state}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                                </div>
                                <div className='col'>
                                    <Form.Label><b>District</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Select District"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                        isInvalid={!!errors.district}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    <Form.Label><b>Facebook Handle</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter URL"
                                        name="facebook"
                                        value={formData.facebook}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col'>
                                    <Form.Label><b>Instagram Handle</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter URL"
                                        name="instagram"
                                        value={formData.instagram}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    <Form.Label><b>Twitter Handle</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter URL"
                                        name="twitter"
                                        value={formData.twitter}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col'>
                                    <Form.Label><b>Youtube Handle</b></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter URL"
                                        name="youtube"
                                        value={formData.youtube}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3 mb-4'>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Tell us how you can contribute?</b></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Type Something...."
                                        name="contribution"
                                        value={formData.contribution}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="form-check custom-checkbox p-5">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="customCheck1"
                                checked={formData.termsAccepted}
                                onChange={handleCheckboxChange}
                                isInvalid={!!errors.termsAccepted}
                            />
                            <label className="form-check-label" htmlFor="customCheck1">
                                I accept the membership Terms and Conditions & Constitution as specified in the INC constitution. I agree to be communicated to by the party via phone, SMS, email and other means. I am above 18 years of age and not a member of any other Political Party.
                            </label>
                            {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
                        </div>

                        <div className='d-flex justify-content-center'>
                            <button
                                type="submit"
                                className="btn btn-primary mt-5 buttones"
                                style={{ width: '15rem', height: '4rem', borderRadius: '2rem' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </Form>
                </Container>
            </div>
            <Footer /> </>
    );
}

export default Joinvolunteer
