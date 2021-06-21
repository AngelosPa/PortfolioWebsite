import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  // https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
  //
  //https://icongr.am/simple
  const divSstyle = {
    display: `none`,
  };
  if (loading)
    return (
      <Router>
        <Route path="/">
          <div className="body-container">
            <p className="loading">Loading...</p>

            <Loadingpart />
          </div>
        </Route>
      </Router>
    );
  return (
    <Router>
      <Link className="text-link" to="/aboutme">
        <div className="body-container">
          <h1>Welcome to the official website of Angelo</h1>
          <div class="bigcicle" style={divSstyle}>
            <div class="innercycle"></div>
            <div class="innercycle"></div>
            <div class="innercycle"></div>
            <div class="innercycle"></div>
          </div>
        </div>
      </Link>
      <div className="body-container">
        <Switch>
          <Route path="/aboutme" exact>
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
