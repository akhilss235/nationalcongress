import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; // Import Container if needed
import { GoFilter } from "react-icons/go";
import { IconContext } from 'react-icons';
import { IoEyeSharp } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

function AdminPetitions() {
  return (
    <Container style={{ backgroundColor: 'white', color: '#505050' }} className='p-3'>
      <div className='row mb-3 '>
        <div className='col-lg-3 mt-2'>
          <h3><b>Petition</b></h3>
        </div>
        <div className='col-lg-6 mt-2 d-flex align-items-center '>
          <div className='card d-flex align-items-center' style={{ flexDirection: 'row', height: '36px', marginRight: '5px', padding: '1px', color: '#505050' }}>
            <IconContext.Provider value={{ className: 'react-icons', size: '1.5em' }}>
              <GoFilter className='mt-1' /><span style={{ padding: '2px' }}>Filter</span>
            </IconContext.Provider>
          </div>
          <Form.Select style={{ width: 'auto', height: '36px' }} aria-label="District">
            <option value=''>District All:</option>
            <option value="District">District</option>
          </Form.Select>
          <Form.Select className='mx-3' style={{ width: 'auto', height: '36px' }} aria-label="Status">
            <option value=''>Status All:</option>
            <option value="Status">Status</option>
          </Form.Select>
        </div>
        <div className='col-lg-3 mt-2'>
          <Form.Control
            id="Search"
            type="text"
            placeholder="Search"
            name="Search"
            style={{
              width: '100%',
              maxWidth: '300px',
              height: '36px'
            }}
          />
        </div>


      </div>

      <div className='table-responsive'>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th style={{ color: '#505050' }}>Sl.no.</th>
              <th style={{ color: '#505050' }}>Name</th>
              <th style={{ color: '#505050' }}>Phone Number</th>
              <th style={{ color: '#505050' }}>Email ID</th>
              <th style={{ color: '#505050' }}>District</th>
              <th style={{ color: '#505050' }}>Ward Number</th>
              <th style={{ color: '#505050' }}>Town/Village</th>
              <th style={{ color: '#505050' }}>Status</th>
              <th style={{ color: '#505050' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ cursor: 'pointer' }}>
              <td style={{ color: '#505050' }}>01</td>
              <td style={{ color: '#505050' }}>Abijith</td>
              <td style={{ color: '#505050' }}>+91 90876 54321</td>
              <td style={{ color: '#505050' }}>abi@gmail.com</td>
              <td style={{ color: '#505050' }}>Kanniyakumari</td>
              <td style={{ color: '#505050' }}>23</td>
              <td style={{ color: '#505050' }}>Ramayanpatti</td>
              <td style={{ color: '#505050' }}>Open</td>
           
      <td style={{ color: '#203583' }}>    <a href="Petitionview">  <IoEyeSharp /> </a></td>
             
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default AdminPetitions;
