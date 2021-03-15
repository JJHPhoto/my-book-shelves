import React from "react";

import "./_colors.sass";

import "bootstrap/scss/bootstrap.scss";
import GloabalNavbar from "./components/GloabalNavbar";

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
      <div className="container">
        <div className="row">
          <h3> Find me books!</h3>
        </div>
        {/* <Container className="py-5">
        <Header />
      </Container> */}
      </div>
    </div>
  );
}

export default App;
