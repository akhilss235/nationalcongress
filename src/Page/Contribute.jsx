import React from 'react';
import logo from '../img/logo.png';
import { Container } from 'react-bootstrap';
import qrcode from '../img/qrcode.png';
import Petition from "./Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";

function Contribute() {
    return (
        <>
            <Topbar />
            <Petition />

            <div className='Congresscommittee mt-5 mb-5' style={{ fontFamily: 'Roboto, sans-serif' }}>
                <Container>
                    <div className='card p-5' style={{ borderColor: '#203583', color: '#203583', borderRadius: '10px',marginTop:'10%' }}>
                        <div className='d-flex justify-content-center mb-3'>
                            <img src={logo} alt="Logo" style={{ width: '40px' }} />
                        </div>
                        <div className='d-flex justify-content-center mb-4'>
                            <h2><b>Contribute Munificently To Empower Democracy</b></h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 mb-5'>
                                <p><b>Tirunelveli Congress Committee</b></p>
                                <p><b>A/c. No: 098765430000076</b></p>
                                <p><b>Indian Bank</b></p>
                                <p><b>Tirunelveli Branch</b></p>
                                <p><b>Tirunelveli</b></p>
                                <p><b>IFSC: INDB0000543</b></p>
                            </div>
                            <div className='col-md-6 d-flex justify-content-center'>
                                <img src={qrcode} alt="QR Code" className='img-fluid' style={{ width: '50%' }} />
                            </div>
                        </div>
                    </div>
                </Container>
            </div> 
            <Footer />
            </>
    );
}

export default Contribute;
