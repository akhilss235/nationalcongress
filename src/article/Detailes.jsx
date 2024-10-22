import React from "react";
import congress2 from "../img/congress2.png";

function Detailes() {
  return (
    <div>
      <div className="row Background2 mb-5" style={{ borderRadius: "10px" }}>
        <div className=" col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={congress2}
            alt="congress1"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-start justify-content-center  p-4">
          <h2 className="text-start boss" style={{ color: "white" }}>
            <b>Lorem ipsum dolor </b>
          </h2>
          <h2 className="text-start boss mb-5" style={{ color: "white" }}>
            <b> consectetur adipiscing </b>
          </h2>
          <p style={{ width: "80%", color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non
            ultricies nibh. Quisque eu ante dolor.
          </p>

          <a href="Joinvolunteer">
            <button
              type="button"
              className="btn btn-light mt-5 buttones3"
              style={{ width: "15rem", height: "4rem", borderRadius: "2rem" }}
            >
              Join Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detailes;
