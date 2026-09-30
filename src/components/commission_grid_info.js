const CommissionGridInfo = ({renderStyle, priceRange, turnaroundTime, background, setCurrentState}) => {
    return (
        <div>
            <div id={"full-render grid"} className={"container-grid"}>
                <div>
                    <h2><i class="fa-solid fa-palette"></i> Render Style</h2>
                    <p>{renderStyle}</p>
                </div>
                <div>
                    <h2><i class="fa-solid fa-tags"></i> Price Range</h2>
                    <p>{priceRange}</p>
                </div>
                <div>
                    <h2><i class="fa-solid fa-clock"></i> Turnaround Time</h2>
                    <p>{turnaroundTime}</p>
                </div>
                <div>
                    <h2><i class="fa-solid fa-pen-nib"></i> Background</h2>
                    <p>{background}</p>
                </div>
            </div>
            {/*<button*/}
            {/*    onClick= {() => setCurrentState("termsandconditions")}*/}
            {/*>*/}
            {/*Read More*/}
            {/*</button>*/}
        </div>
    )
}

export default CommissionGridInfo;