import React from "react";
import clone from "../img/clone.png";
import congress1 from "../img/Congress1.png";

function Contributedetailes() {
  return (
    <div>
      <div className="row Background3 ">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={congress1}
            alt="congress1"
            className="congress1 img-fluid d-none d-md-block"
            style={{ maxHeight: "640px" }}
          />
          <img
            src={clone}
            alt="congress2"
            className="congress2 img-fluid rounded-circle d-block d-md-none"
            style={{ maxHeight: "600px" }}
          />
        </div>
        <div className="col-12 col-md-6  d-flex flex-column align-items-start justify-content-center p-5">
          <h2 className="text-start boss pt-5 px-3 text-white">
            <b>Lorem ipsum dolor </b>
          </h2>
          <h2 className="text-start boss mb-3 px-3  text-white">
            <b>consectetur adipiscing </b>
          </h2>
          <a href="Contribute">
            <button
              type="button"
              className="btn btn-light mt-5 mx-4 buttones5 px-5 "
              style={{ width: "15rem", height: "4rem", borderRadius: "2rem" }}
            >
              {" "}
              Contribute{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contributedetailes;
