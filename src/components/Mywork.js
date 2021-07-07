import { Link } from "react-router-dom";
import data from "../data.json";
//import React, { useState } from "react";
function Mywork() {
  // const [hovi, setHovi] = useState({});
  // const stylestwo = {
  //   width: "100px",
  //   height: "100px",
  // };

  return (
    <div className="mywork-container">
      <div class="portfolio">
        <nav>
          <ul>
            {data.map((el) => {
              if (el.id < 4)
                return (
                  <li key={el.id}>
                    <a href={el.link} target="_blank" rel="noreferrer">
                      <img
                        className="enlighter"
                        src={`${process.env.PUBLIC_URL}/img/${el.img}`}
                        alt={`pic of ${el.title}`}
                      ></img>
                      <h5>{el.title}€</h5>
                      <p>{el.description}</p>
                    </a>
                  </li>
                );
            })}
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
            {data.map((el) => {
              if (el.id > 3 && el.id < 7)
                return (
                  <li key={el.id}>
                    <a href={el.link} target="_blank" rel="noreferrer">
                      <img
                        className="enlighter"
                        src={`${process.env.PUBLIC_URL}/img/${el.img}`}
                        alt={`pic of ${el.title}`}
                      ></img>
                      <h5>{el.title}€</h5>
                      <p>{el.description}</p>
                    </a>
                  </li>
                );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Mywork;
