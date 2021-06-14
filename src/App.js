import React, { useState } from "react";
import Aboutme from "./components/Aboutme";
import Getintouch from "./components/Getintouch";
import Mywork from "./components/Mywork";
//import "./scss/Main.scss";

function App() {
  return (
    <div>
      <Aboutme />
      <Getintouch />
      <Mywork />
    </div>
  );
}

export default App;
