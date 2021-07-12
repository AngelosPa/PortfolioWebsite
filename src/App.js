import React, { useState, useEffect, useRef } from "react";
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
  const footerdisplayer = useRef(null);
  const turnoff = useRef(null);
  const vergrosser = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  function Enterthevoid() {
    vergrosser.current.style.transform = "scale(11)";
    vergrosser.current.style.transition = "2.1s";
    turnoff.current.style.display = "none";
    setTimeout(() => {
      vergrosser.current.style.transform = "scale(0.01)";
      vergrosser.current.style.transition = "0.2s";
      vergrosser.current.style.height = "10px";
      footerdisplayer.current.style.display = "flex";
    }, 2000);
  }

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
          <p className="guild" ref={turnoff}>
            {" "}
            enter the sphere and scroll
          </p>
          <div
            class="bigcicle"
            //style={divSstyle}
            onClick={Enterthevoid}
            ref={vergrosser}
          >
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
        <footer ref={footerdisplayer}>
          <h5>Made with ❤️ By Angelo&nbsp;</h5>
          <h6>All copyrights reserved ® {new Date().getFullYear()}</h6>
        </footer>
      </div>
    </Router>
  );
}
//for the vid https://nextjs.org/conf/tickets/jun21/AngelosPa
export default App;
