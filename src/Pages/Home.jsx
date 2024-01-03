import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import DrxTokenRoadMap from "../Components/DrxTokenRoadMap";
import DrxToken from "../Components/DrxToken";
import EventDocumentation from "../Components/EventDocumentation";
import DrxTokenTeam from "../Components/DrxTokenTeam";
import DrxTokenParnert from "../Components/DrxTokenParnert";
import Footer from "../Components/Footer";
import SmartContract from "../Components/SmartContract";
import Corousel from "../Components/Corousel";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <DrxTokenRoadMap />
      <DrxToken />
      <EventDocumentation />
      <Corousel />
      <DrxTokenTeam />
      <DrxTokenParnert />
      <Footer />
    </div>
  );
}
