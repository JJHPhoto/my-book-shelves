import React from "react";
import "./App.css";
import GloabalNavbar from "./components/GloabalNavbar";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <GloabalNavbar />
      <Container className="py-5">
        <Header />
      </Container>
    </div>
  );
}

export default App;
