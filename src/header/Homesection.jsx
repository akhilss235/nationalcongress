import React from "react";
import congress1 from "../img/Congress1.png";

function Homesection() {
  return (
    <div>
      <div className="row Background p-2">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src={congress1}
            alt="congress1"
            className="homepageimg mt-5"
          />
        </div>
        <div className="col d-flex flex-column align-items-start justify-content-center">
          <h2 className="text-start boss" style={{ color: "#203583" }}>
            <b>Indian National Congress</b>
          </h2>
          <h2 className="boss" style={{ color: "#203583" }}>
            <b>Member of Parliament, Tirunelveli Constituency</b>
          </h2>
          <p style={{ width: "80%" }} className="bosslorem ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non
            ultricies nibh. Quisque eu ante dolor.
          </p>
          <a href="Joinvolunteer">
            <button
              type="button"
              className="btn btn-primary mt-5 buttones"
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

export default Homesection;
