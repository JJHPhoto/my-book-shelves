import React from "react";

import "./main.sass";
import GloabalNavbar from "./components/GloabalNavbar";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";

// import "bootstrap/scss/bootstrap.scss";
// import "bootstrap/scss/_utilities.scss";
// import "bootstrap/scss/_variables.scss";
// import "bootstrap/scss/_mixins.scss";
// import "bootstrap/scss/_functions.scss";
// import "bootstrap/scss/bootstrap-reboot.scss";
// import "bootstrap/scss/bootstrap-grid.scss";
// import "bootstrap/scss/_navbar.scss";

function App() {
  return (
    <div>
      <GloabalNavbar />
      <Container className="py-5">
        <Header />
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
