import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import congress16 from '../img/congress16.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import AchievementsForm from '../adminpage/AchievementsForm';
import Achievementsupdating from '../adminpage/Achievementsupdating';
import AchievementsDetailes from '../adminpage/AchievementsDetailes';
import DeletAchievements from '../adminpage/DeletAchievements';
import { Container } from 'react-bootstrap';

function Adminachievements() {
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };
  const openForm2 = () => {
    setShowForm2(true);
  };

  const openForm3 = () => {
    setShowForm3(true);
  };
  const openForm4 = () => {
    setShowForm4(true);
  };
  const closeForm = () => {
    setShowForm(false);
    setShowForm2(false);
    setShowForm3(false);
    setShowForm4(false);

  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
 
      <div className='d-flex justify-content-between' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='m-2 mt-3'>
          <h3><b>Achievements</b></h3>
        </div>
        <div className='m-2'>
          <button type="button" className="btn btn buttones6" style={{ width: 'auto' }} onClick={openForm}>
            <GoPlus /> New Achievements
          </button>
        </div>
      </div>
      <div className="table-responsive"> {/* Ensure table responsiveness */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="d-none d-md-table-cell">Sl.no.</th> {/* Hide on mobile */}
              <th>Date</th>
              <th>Image</th>
              <th>Title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-none d-md-table-cell">01</td> {/* Hide on mobile */}
              <td>15-07-2024</td>
              <td><img src={congress16} alt="Event" style={{ maxWidth: '100%', height: '30px' }} /></td> {/* Responsive image */}
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit..Lorem ipsum dolor sit amet, consectetur</td>
              <td className='d-flex'>
                <div className='p-2 mx-2' style={{ color: 'rgb(71, 69, 59)', backgroundColor: '#f7d9b6', borderRadius: '5px' }} onClick={openForm3}>
                  <FaRegEye />
                </div>
                <div className='p-2 mx-2' style={{ color: 'blue', backgroundColor: '#b8d0e4', borderRadius: '5px' }} onClick={openForm2}>
                  <LuPencilLine />
                </div>
                <div className='p-2 mx-2' style={{ color: '#ed5555', backgroundColor: '#f8acac', borderRadius: '5px' }} onClick={openForm4}>
                  <RiDeleteBin6Line />
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {showForm && <AchievementsForm onClose={closeForm} />}
      {showForm2 && <Achievementsupdating onClose={closeForm} />}
      {showForm3 && <AchievementsDetailes onClose={closeForm} />}
      {showForm4 && <DeletAchievements onClose={closeForm} />}
    </div>
  );
}

export default Adminachievements;


