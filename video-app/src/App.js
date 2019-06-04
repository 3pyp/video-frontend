import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faVideo,
  faUsers,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/navbar";
import Videos from "./views/videos";
import PageTitle from "./components/pageTitle";

import "./App.css";

library.add(fab, faCheckSquare, faCoffee, faVideo, faBars, faUsers);
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container-fluid row col-12 p-0 m-0">
          <Navbar />
          <div className="Dashboard col">
            <PageTitle />
            <Route exact path="/videos" component={Videos} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
