import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./App.css"
import '@fontsource-variable/hubot-sans';
import {useState} from "react";
import Commission from "./components/commission";
import Portfolio from "./components/portfolio";
import TermsAndConditions from "./components/terms-and-conditions";
function App() {
    const [currentState, setCurrentState] = useState("commission")
    const isMobileWidth = window.innerWidth <= 768;
    
    return (
      <div>
          <nav 
             style={{display: isMobileWidth ? "none" : "flex"}} 
              id={"container-buttons"} className={"banner-buttons"}>
              <div className={"banner-name-container"}>
                  <h1>Narulepsy</h1>
              </div>
              <div className={"banner-buttons-container"}>
                  <button
                      className={currentState === "commission" ? "active" : ""}
                      onClick={() => setCurrentState("commission")}>COMMISSION</button>
                  <button
                      className={currentState === "portfolio" ? "active" : ""}
                      onClick={() => setCurrentState("portfolio")}>PORTFOLIO</button>
                  <button
                      className={currentState === "termsandconditions" ? "active" : ""}
                      onClick={() => setCurrentState("termsandconditions")}>TERMS & CONDITIONS</button>
              </div>
          </nav>
          <div id={"container-top-nav"} className={"container banner"}>
              <div
                  style={{display: isMobileWidth ? "block" : "none"}}
              >
                  <div className={"home-banner-buttons"}>
                      <button
                          className={currentState === "commission" ? "active" : ""}
                          onClick={() => setCurrentState("commission")}>COMMISSION</button>
                      <button
                          className={currentState === "portfolio" ? "active" : ""}
                          onClick={() => setCurrentState("portfolio")}>PORTFOLIO</button>
                      <button
                          className={currentState === "termsandconditions" ? "active" : ""}
                          onClick={() => setCurrentState("termsandconditions")}>TERMS & CONDITIONS</button>
                  </div>
              </div>
              <img src={"./images/NARULEPSY_calling_card_4.jpg"} className={"banner-img"} alt={"BANNER"}/>
              <div id={"container-buttons"} className={"social-buttons"}>
                  <>
                      <button onClick={() => window.open("https://x.com/narulepsy", "_blank")}>
                          <i className="fab fa-x"></i>
                          narulepsy
                      </button>

                      <button onClick={() => window.location.href = "mailto:narulepsy@gmail.com"}>
                          <i className="fa-brands fa-google"></i>
                          narulepsy@gmail.com
                      </button>

                      <button onClick={() => window.open("https://discord.com/users/1433506343444283452", "_blank")}>
                          <i className="fa-brands fa-discord"></i>
                          narulepsy
                      </button>
                  </>
              </div>
          </div>
          <Commission
              currentState = {currentState} 
              setCurrentState = {setCurrentState}
          />
          <Portfolio currentState={currentState}/>
          <TermsAndConditions currentState={currentState}/>
          <Analytics />
      </div>
  );
}

export default App;
