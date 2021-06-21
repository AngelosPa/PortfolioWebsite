import { Link } from "react-router-dom";
import data from "../data.json";
//import React, { useState } from "react";
function Mywork() {
  // const [hovi, setHovi] = useState({});
  // const stylestwo = {
  //   width: "100px",
  //   height: "100px",
  // };

  let titlei = data.map((titlos) => titlos.title);
  let linki = data.map((e) => e.link);
  let imgi = data.map((e) => e.img);
  let descriptioni = data.map((e) => e.description);

  return (
    <div className="mywork-container">
      <div class="portfolio">
        <nav>
          <ul>
            <li>
              <a href={linki[0]} target="_blank" rel="noreferrer">
                <img
                  className="enlighter"
                  src={`${process.env.PUBLIC_URL}./img/${imgi[0]}`}
                  alt={`pic of ${titlei[0]}`}
                ></img>
                <h5>{titlei[0]}</h5>
                <p>{descriptioni[0]}</p>
              </a>
            </li>
            <li>
              <a href={linki[1]} target="_blank" rel="noreferrer">
                <img
                  className="enlighter"
                  src={`${process.env.PUBLIC_URL}./img/${imgi[1]}`}
                  alt={`pic of ${titlei[1]}`}
                ></img>
                <h5>{titlei[1]}</h5>
                <p>{descriptioni[1]}</p>
              </a>
            </li>
            <li>
              <a href={linki[2]} target="_blank" rel="noreferrer">
                <img
                  className="enlighter"
                  src={`${process.env.PUBLIC_URL}./img/${imgi[2]}`}
                  alt={`pic of ${titlei[2]}`}
                ></img>
                <h5>{titlei[2]}</h5>
                <p>{descriptioni[2]}</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="box-for-menu">
        <p>Back</p>
        <Link to="/aboutme">
          <div className="angelov2-menu">
            <div className="txt"></div>
            <div className="orbit"></div>
          </div>
        </Link>
      </div>
      <div class="portfolio">
        <nav>
          <ul>
            <li>
              <a href={linki[3]} target="_blank" rel="noreferrer">
                <img
                  className="enlighter"
                  src={`${process.env.PUBLIC_URL}./img/${imgi[3]}`}
                  alt={`pic of ${titlei[3]}`}
                ></img>
                <h5>{titlei[3]}</h5>
                <p>{descriptioni[3]}</p>
              </a>
            </li>
            <li>
              <a href={linki[4]} target="_blank" rel="noreferrer">
                <img
                  className="enlighter"
                  src={`${process.env.PUBLIC_URL}./img/${imgi[4]}`}
                  alt={`pic of ${titlei[4]}`}
                ></img>
                <h5>{titlei[4]}</h5>
                <p>{descriptioni[4]}</p>
              </a>
            </li>
            <li>
              <a href={linki[5]} target="_blank" rel="noreferrer">
                <img
                  className="enlighter"
                  src={`${process.env.PUBLIC_URL}./img/${imgi[5]}`}
                  alt={`pic of ${titlei[5]}`}
                ></img>
                <h5>{titlei[5]}</h5>
                <p>{descriptioni[5]}</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Mywork;
