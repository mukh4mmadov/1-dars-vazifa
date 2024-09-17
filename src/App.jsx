import React from "react";
import "./index.css";
import image from "./image/Frame 1000009354.png";
import jjj from "./image/Group 7844.png";
import inb from "./image/.png";
import jjjjjj from "./image/Image.png";
import hhhhh from "./image/Title.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="ota">
        <div className="routex">
          <img className="img" src={image} alt="bj" />
        </div>
        <div className="home">
          <h3 className="hjj">HOME</h3>
          <h3>ABOUT US</h3>
          <h3>SERVICES</h3>
          <h3>PROJECTS</h3>
          <h3>BLOG</h3>
        </div>
        <div className="need">
          <img src={jjj} alt="" />
        </div>
      </div>

      <header>
        <div className="ona">
          <div className="with">
            <div className="nnn">
              <h1 className="our">Journey with Confidence</h1>
            </div>
            <div className="migrate">
              <h2 className="sss">Migrate</h2>
              <h2>With Us</h2>
            </div>
            <div className="span">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet rcus nunc. Duis egestas ac ante sed tincidunt.
              </span>
            </div>
            <div className="duis">
              <h1 className="more">
                Learn More <img className="app" src={inb} alt=""></img>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="classs">
        <div className="css">
          <div className="div1">
            <img src={jjjjjj} alt="jhku" />
          </div>
          <div className="div2">
            <div className="imggg">
              <img src={hhhhh} alt="" />
              <div className="zzzz">
                <div className="zz1">
                  <input type="checkbox" />
                  <h1>Safety Guides</h1>
                </div>
                <div className="zz1">
                  <input type="checkbox" />
                  <h1>Passport Assistance</h1>
                </div>
              </div>
              <div className="mmmmm">
                <div className="yyy">
                  <span>
                    Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.
                  </span>
                </div>
                <div className="yyy">
                  <span>
                    Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
                  </span>
                </div>
              </div>
              <div className="duim">
                <h1 className="more">
                  Learn More <img className="app" src={inb} alt=""></img>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
