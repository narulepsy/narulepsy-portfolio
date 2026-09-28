const Portfolio = ({currentState}) => {
    return (
        <div
            style={{ display: currentState === 'portfolio' ? 'block' : 'none' }}
        >
            <div id={"portfolio-container"} className={"container"}>
                <h2>PORTFOLIO</h2>
                <p>Below are examples of both commission work as well as personal work across the years.</p>
                <p>My artstyle is still in the process of constant improvement and change, so discrepancies in styles may be present.</p>
            </div>
            <div className={"gallery-container"}>
                <div className={"gallery"}>
                    <div className={"gallery-item"}>
                        <img src={"images/NARULEPSY_a5_tenebris.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/NARULEPSY_a5_themis.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/NARULEPSY_a5_galahad.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/NARULEPSY_a5_atlas_king.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/headshot.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/atlasss king compressed.png"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/narulepsy halfbody patch comm1.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/patch adjusted compressed.png"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/narulepsy halfbody enfy comm1.jpg"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/hason hrothgar compressed.png"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                    <div className={"gallery-item"}>
                        <img src={"images/vilhelm new compressed.png"} alt={"FULL-RENDER-EXAMPLE"}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio