import React, { useState } from 'react';
import congress3 from '../img/congress3.png';
import congress4 from '../img/congress4.png';
import congress5 from '../img/congress5.png';
import { IoTimeOutline } from "react-icons/io5";
import AchievementsModel from "../model/AchievementsModel";

function LatestEvents() {
  const contentData = [
    {
      body: "akhilLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.",
      img: congress5,
      time: '25/6/2024'
    },
    {
      body: "akkkkLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.",
      img: congress4,
      time: '25/6/2024'
    },
    {
      body: "Laaaorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.",
      img: congress3,
      time: '25/6/2024'
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <div>
      <div className='row mb-5' style={{ marginTop: '5%', marginBottom: '5%' }}>
        {contentData.map((item, index) => (
          <div className='col-lg-4' key={index}>
            <div className="card EVENTS" onClick={() => openModal(item)}>
              <img src={item.img} alt={`event${index + 1}`} className="img-fluid" />
              <div className="card-body">
                <p className="card-title">
                  <IoTimeOutline style={{ fontSize: '1.5rem' }} /> {item.time}
                </p>
                <h6 className="card-text" >
                <b style={{color:'#505050'}}>
                  {item.body.length > 150 
                    ? `${item.body.slice(0, 50)}... ` 
                    : item.body}
                  {item.body.length > 150 && (
                    <span
                      className="text-primary"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent modal from opening
                        openModal(item);
                      }}
                    >
                      Read More
                    </span>
                  )}</b>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AchievementsModel
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
      />
    </div>
  );
}

export default LatestEvents;
