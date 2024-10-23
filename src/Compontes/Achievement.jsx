import React from "react";
import { Container } from "react-bootstrap";
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";
import Contributedetailes from "../article/Contributedetailes";
import Achievementsection from "../header/Achievementsection";
import Achievements from "../card/Achievements";

function Achievement() {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <Topbar />
      {/* <Petition /> */}
      <Achievementsection />

      <Container>
        <Achievements />
      </Container>

      <Contributedetailes />

      <Footer />
    </div>
  );
}

export default Achievement;
