import React, { useState } from "react";
import congress7 from "../img/congress7.png";
import congress8 from "../img/congress8.png";
import congress9 from "../img/congress9.png";
import congress10 from "../img/congress10.png";
import AchievementsModel from "../model/AchievementsModel";

const contentData = [
  {
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.",
    img: congress7,
  },
  {
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus.",
    img: congress8,
  },
  {
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus.",
    img: congress9,
  },
  {
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus.",
    img: congress10,
  },
];

function Achievements() {
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
      <div className="row mb-5" style={{ marginTop: "5%", marginBottom: "5%" }}>
        {contentData.map((item, index) => (
          <div className="col-lg-3" key={index}>
            <div className="card EVENTS" onClick={() => openModal(item)}>
              <img
                src={item.img}
                alt={`congress${index + 1}`}
                className="img-fluid"
              />
              <div
                className="card-body"
                style={{ color: "#203583"}}
              >
                <h5> <b   style={{ color: "#203583"}}> {item.title}</b>   </h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  {item.body.length > 200
                    ? `${item.body.slice(0, 150)}... `
                    : item.body}
                  {item.body.length > 100 && (
                    <span
                      className="text-primary"
                      onClick={() => openModal(item)}
                    >
                      Read More
                    </span>
                  )}
                </p>
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

export default Achievements;
