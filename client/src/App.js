import React from "react";
import "./main.sass";
import GlobalNavbar from "./components/GlobalNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import NotFound from "./pages/NotFound";

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
    <Router>
      <GlobalNavbar isloggedin={false} />
      <Container className="py-5">
        <Header />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
