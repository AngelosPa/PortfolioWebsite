import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Browserrouter aka Router to wrap everything
//switch to looks through its children <Route>s and renders the first one that matches the current URL. ad lets go
import Aboutme from "./components/Aboutme";
import Mywork from "./components/Mywork";
import Getintouch from "./components/Getintouch";

import Loadingpart from "./components/Loadingpart";
import "./scss/Main.scss";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading)
    return (
      <Router>
        <Route path="/PortfolioWebsite">
          <div className="body-container">
            <p className="loading">Loading...</p>

            <Loadingpart />
          </div>
        </Route>
      </Router>
    );
  return (
    <Router>
      <div className="body-container">
        <div class="stars"></div>
        <div class="twinkling"></div>
        {/* you will need it for the pics */}
        {/* <img src={`${process.env.PUBLIC_URL}/${data[0].img}`} alt="Sushi" /> */}
        <h1>Welcome to the official website of Angelo</h1>

        <Switch>
          <Route path="/PortfolioWebsite" exact>
            <div class="bigcicle">
              <div class="innercycle"></div>
              <div class="innercycle"></div>
              <div class="innercycle"></div>
              <div class="innercycle"></div>
            </div>

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
