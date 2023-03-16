import React from "react";

import Navbar from "./navbar";
import Home from "./pages/home";
import Digitization from "./pages/digitization";
import Publishing from "./pages/publishing";
import Faq from "./pages/faq"
import Dropoff from "./pages/dropoff.js"

// eslint-disable-next-line
import "./styles/App.css";

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Digitization" element={<Digitization />}></Route>
          <Route path="/Publishing" element={<Publishing />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/dropoff" element={<Dropoff />}></Route>
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
