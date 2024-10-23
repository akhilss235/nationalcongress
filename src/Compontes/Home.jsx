import React from "react";
import bg1 from "../img/bg1.png";
import congress1 from "../img/Congress1.png";
import congress2 from "../img/congress2.png";
import underline from "../img/underline.png";
import TimelineCarousel from "../Page/TimelineCarousel";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";
import Latestevents from "../card/Latestevents ";
import About from "./About";
import Joinwavadetailes from "../article/Joinwavedetailes";
import Achievements from "../card/Achievements";
import Detailes from "../article/Detailes";
import Homesection from "../header/Homesection";

function Home() {
  return (
    <div className="home" style={{ fontFamily: "Roboto, sans-serif" }}>
      <Topbar />
      <Petition />
     <Homesection />
      <Container>
        <div
          className="text-center "
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <h2 className="title">
            <b>LATEST EVENTS</b>
          </h2>
          <img
            src={underline}
            alt="underline"
            className="img-fluid"
            style={{ width: "17rem", height: "0.3rem" }}
          />
        </div>

        <Latestevents />
        <div
          className="d-flex align-items-start justify-content-center "
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <a href="Events">
            <button
              type="button"
              class="btn btn-outline-primary buttones1"
              style={{ width: "15rem", height: "3rem" }}
            >
              View All
            </button>
          </a>
        </div>
        <Detailes />

        <About />
      </Container>


      <Joinwavadetailes />
      <Container>
        <TimelineCarousel />
      </Container>

      <Container>
        <div
          className="text-center "
          style={{ marginTop: "10%", marginBottom: "5%" }}
        >
          <h2 className="title">
            <b>ACHIEVEMENTS </b>
          </h2>
          <img
            src={underline}
            alt="underline"
            className="img-fluid"
            style={{ width: "17rem", height: "0.3rem" }}
          />
        </div>

        <Achievements />

        <div
          className="d-flex align-items-start justify-content-center "
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <a href="Achievement">
            <button
              type="button"
              class="btn btn-outline-primary buttones2"
              style={{ width: "15rem", height: "3rem" }}
            >
              View All
            </button>
          </a>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
