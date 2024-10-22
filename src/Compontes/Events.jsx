import React from "react";
import { Container } from "react-bootstrap";
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";
import Contributedetailes from "../article/Contributedetailes";
import Eventsection from "../header/Eventsection";
import Latestevents from "../card/Latestevents ";
function Events() {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <Topbar />
      <Petition />
      <Eventsection />
      <Container>
        <Latestevents />
      </Container>
      <Contributedetailes />
      <Footer />
    </div>
  );
}

export default Events;
