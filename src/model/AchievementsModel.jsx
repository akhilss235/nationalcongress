import React from "react";
import Modal from "react-bootstrap/Modal";
import { CgCloseO } from "react-icons/cg";

const AchievementsModel = ({ isOpen, onClose, content }) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="d-flex justify-content-end">
          <CgCloseO
            style={{ fontSize: "25px", color: "red" }}
            onClick={onClose}
          />
        </div>

        <img src={content.img} alt={content.title} className="img-fluid mb-3" />
        <p style={{textAlign:'start'}}>{content.body} </p>
      </Modal.Body>
    </Modal>
  );
};

export default AchievementsModel;
