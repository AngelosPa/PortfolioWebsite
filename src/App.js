import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Browserrouter aka Router to wrap everything
//switch to looks through its children <Route>s and renders the first one that matches the current URL. ad lets go

import Aboutme from "./components/Aboutme";
import Getintouch from "./components/Getintouch";
import Mywork from "./components/Mywork";
import "./scss/Main.scss";

function App() {
  return (
    <Router>
      <div className="body-container">
        {/* you will need it for the pics */}
        {/* <img src={`${process.env.PUBLIC_URL}/${data[0].img}`} alt="Sushi" /> */}
        <h1>Welcome to the official website of Angelo</h1>{" "}
        <Switch>
          <Route path="/PortfolioWebsite" exact>
            <Aboutme />
          </Route>
          <Route path="/mywork" exact>
            <Mywork />
          </Route>
          <Route path="/getintouch" exact>
            <Getintouch />
          </Route>
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            wrong way..
          </Route>
        </Switch>
        <footer>
          <h5>Made with ❤️ By Angelo&nbsp;</h5>
          <h6>All copyrights reserved ® {new Date().getFullYear()}</h6>
        </footer>
      </div>
    </Router>
  );
}
//for the vid https://nextjs.org/conf/tickets/jun21/AngelosPa
export default App;
