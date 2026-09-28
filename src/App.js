import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./App.css"
import '@fontsource-variable/hubot-sans';
import {useState} from "react";

function App() {
    const [activeTab, setActiveTab] = useState('full-render');
    
    return (
      <div>
          <div id={"container-top-nav"} className={"container banner"}>
              <h1><mark>NARULEPSY'S CORNER</mark></h1>
              <div id={"container-buttons"} className={"banner-buttons"}>
                  <button onClick={() => {}}>COMMISSION</button>
                  <button onClick={() => {}}>PORTFOLIO</button>
                  <button onClick={() => {}}>TERMS & CONDITIONS</button>
              </div>
              <img src={"./images/NARULEPSY_calling_card_4.jpg"} className={"banner-img"}/>
          </div>
          <div id={"container"} className={"container"}>
              <h2>ABOUT</h2>
              <p>
                  Narulepsy is a freelance digital illustrator. I am Narulepsy, but you can call me Naru. Looking forward to becoming your go-to artist for your finest older men.
              </p>
              <p>
                  Interested? Send me a message on Discord or contact me through Email!
              </p>
          </div>
          <div id={"container"} className={"container"}>
              <h3>PACKS [COMMISSIONS OPEN]</h3>
                  <div id={"container-buttons"} className={"container-buttons"}>
                      <button 
                          className={activeTab === 'full-render' ? 'active' : ''}
                          onClick={() => setActiveTab('full-render')}>FULL-RENDER</button>
                      <button
                          className={activeTab === 'sketch' ? 'active' : ''}
                          onClick={() => setActiveTab('sketch')}>SKETCH</button>
                      <button
                          className={activeTab === 'sticker' ? 'active' : ''}
                          onClick={() => setActiveTab('sticker')}>EMOTE/STICKER</button>
                  </div>
          </div>
          <div className={"gallery-container"}
               id={"full-render-comms"}
               style={{ display: activeTab === 'full-render' ? 'block' : 'none' }}
          >
                  <div className={"gallery"}>
                      <div className={"gallery-item"}>
                          <img src={"images/headshot.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                          <div className={"desc"}><h3>$50 HEADSHOT</h3></div>
                      </div>
                      <div className={"gallery-item"}>
                          <img src={"images/NARULEPSY_a5_tenebris.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                          <div className={"desc"}><h3>$70 HALF-BODY</h3></div>
                      </div>
                      <div className={"gallery-item"}>
                          <img src={"images/NARULEPSY_a5_themis.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                          <div className={"desc"}><h3>$80 FULL-BODY</h3></div>
                      </div>
                  </div>
              </div>
              <div className={"gallery-container"}  
                   id={"sketch-comms"}
                   style={{ display: activeTab === 'sketch' ? 'block' : 'none' }}
              >
                  <div className={"gallery"}>
                      <div className={"gallery-item"}>
                          <img src={"images/kage_1.jpg"} alt={"SKETCH-EXAMPLE"}/>
                          <div className={"desc"}><h3>$10 HEADSHOT</h3></div>
                      </div>
                      <div className={"gallery-item"}>
                          <img src={"images/venom president.jpg"} alt={"SKETCH-EXAMPLE"}/>
                          <div className={"desc"}><h3>$25 HALF-BODY</h3></div>
                      </div>
                      <div className={"gallery-item"}>
                          <img src={"images/galahad wife.jpg"} alt={"SKETCH-EXAMPLE"}/>
                          <div className={"desc"}><h3>$35 FULL-BODY</h3></div>
                      </div>
                  </div>
              </div>
          <div className={"gallery-container"}
               id={"sketch-comms"}
               style={{ display: activeTab === 'sticker' ? 'block' : 'none' }}
          >
                  <div className={"gallery"}>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                  </div>
              
                  <h3>$10 - ONE EMOTE</h3>
                  <div className={"gallery"}>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                      <div className={"gallery-item-small-square"}>
                          <img src={"images/emoji test.jpg"} alt={"EMOTE"}/>
                      </div>
                  </div>
                  <h3>$20 - ONE STICKER</h3>
              </div>
      </div>
  );
}

export default App;
