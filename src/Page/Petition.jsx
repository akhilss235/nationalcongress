import React from 'react';
import robot from '../img/robot1.png';
import Footer from "../Compontes/Footer";

function Petition() {
    return (
        <>
            <a href="Petitionform" style={{ textDecoration: 'none',fontFamily: 'Roboto, sans-serif'  }} >
                <div className="stickyexample d-flex">
                    <img src={robot} alt="robot" className="robot-image" />
                    <p className='hover-text mt-3'>Rise Your Petition</p>
                </div>
            </a>
        </>
    );
}

export default Petition;
