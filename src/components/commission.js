import {useState} from "react";
import CommissionGridInfo from "./commission_grid_info";
const Commission = ({currentState, setCurrentState}) => {
    const [activeTab, setActiveTab] = useState('full-render');

    return (
        <div
            style={{ display: currentState === 'commission' ? 'block' : 'none' }}
        >
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
                <CommissionGridInfo 
                    renderStyle={"Full Render"} 
                    background={"Simple"} 
                    priceRange={"$50  -  $80 USD"} 
                    turnaroundTime={"1 - 2 weeks based on complexity"}
                    setCurrentState={setCurrentState}
                />
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
                <CommissionGridInfo 
                    renderStyle={"Sketch"} 
                    background={"No Background"} 
                    priceRange={"$10  -  $35 USD"} 
                    turnaroundTime={"Less than 1 week"}
                    setCurrentState={setCurrentState}
                />
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
                        <img src={"images/tenebris_standing.png"} alt={"EMOTE"}/>
                    </div>
                    <div className={"gallery-item-small-square"}>
                        <img src={"images/themis_standing.png"} alt={"EMOTE"}/>
                    </div>
                    <div className={"gallery-item-small-square"}>
                        <img src={"images/tenebris_and_themis_standing.png"} alt={"EMOTE"}/>
                    </div>
                    <div className={"gallery-item-small-square"}>
                        <img src={"images/galahad_drink.png"} alt={"EMOTE"}/>
                    </div>
                    <div className={"gallery-item-small-square"}>
                        <img src={"images/atlas_king_standing.png"} alt={"EMOTE"}/>
                    </div>
                </div>
                <h3>$20 - ONE STICKER</h3>
            </div>
        </div>
    )
}

export default Commission;