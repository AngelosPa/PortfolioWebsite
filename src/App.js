import React, { useState } from "react";
import Aboutme from "./components/Aboutme";
import Getintouch from "./components/Getintouch";
import Mywork from "./components/Mywork";
import "./scss/Main.scss";

function App() {
  return (
    <div>
      {/* <img src={`${process.env.PUBLIC_URL}/${data[0].img}`} alt="Sushi" /> */}

      <Aboutme />
      <Getintouch />
      <Mywork />
    </div>
  );
}

export default App;
