import React, { useState } from 'react';
import congress6 from "../img/congress6.png";
import underline from "../img/underline.png";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div>
      <div className="text-center" style={{ margin: "5% 0" }}>
        <h2 className="title"><b>ABOUT</b></h2>
        <img
          src={underline}
          alt="Decorative underline"
          className="img-fluid"
          style={{ width: "10rem", height: "0.3rem" }}
        />
      </div>
      <div className="row" style={{ margin: "5% 0 15%" }}>
        <div className="col-sm-6">
          <h2 style={{ color: "#203583" }}>
            <b>Adv. Robert Bruce</b>
            <span style={{ fontSize: "1.5rem" }}>
              {" "}B.Sc., M.L <br /> (Member of Parliament, Tirunelveli Constituency)
            </span>
          </h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh Quisque eu ante dolor. Quisque volutpat velit justo, vel varius sem ultricies sed. Vestibulum turpis est, consectetur eu nibh quis, tincidunt accumsan nulla. Donec non convallis mauris.
            {isExpanded && (
              <span>
                {' '}
                Aenean eget orci maximus, dignissim elit sit amet, semper leo. In quis tincidunt erat, quis maximus ante. Curabitur at ante bibendum, volutpat turpis ut, efficitur neque. Aliquam pretium nulla quis fringilla imperdiet. Duis varius enim orci, euismod consectetur odio malesuada vel. Aenean quam nibh, cursus eu maximus tincidunt, maximus at tortor. Aliquam sagittis aliquam augue ac ullamcorper.
              </span>
            )}
          </p>
          <div className="d-flex align-items-start justify-content-start mt-5 mb-3">
            <button
              type="button"
              className="btn btn-outline-primary buttones1"
              style={{ width: "15rem", height: "3rem" }}
              aria-label={isExpanded ? "Show less" : "Read more about Adv. Robert Bruce"}
              onClick={handleToggle}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="card">
            <img src={congress6} alt="Adv. Robert Bruce at Congress" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
