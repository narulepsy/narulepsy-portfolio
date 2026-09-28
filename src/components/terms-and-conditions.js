const TemrsAndConditions = ({currentState}) => {
    return (
        <div
            style={{ display: currentState === 'termsandconditions' ? 'block' : 'none' }}
            >
            <div className={"container"}>
                <h2>TERMS & CONDITIONS</h2>
                <p>To ensure that business proceeds smoothly, I've defined a few terms and conditions regarding my services.</p>
                <h3>README</h3>
                <h2>I. PAYMENT METHOD</h2>
                <ul>
                    <li>Can do full-payments or half payments</li>
                    <li>Payments will be made through PayPal / Ko-Fi</li>
                    <li>Refunds can only be made if I am unable to complete the commission</li>
                </ul>

                <h2>II. COMMISSION</h2>
                <ul>
                    <li>All prices listed are starting prices</li>
                    <li>Prices may be adjusted based on time, complexity, and additional requests made</li>
                    <li>Complexity fees range from $20 - $100.</li>
                    <li>Character design commissions have an additional fee ranging from $20 - $100</li>
                    <li>Commercial use commissions will have an additional fee</li>
                    <li>I reserve the right to refuse a commission request</li>
                    <li>Do not use my art for AI training, NFTs, or Crypto</li>
                </ul>

                <h2>III. TURNAROUND TIME</h2>
                <ul>
                    <li>Commissions are expected to take no longer than a month</li>
                    <li>If requested, I can speed up a commission for an additional fee</li>
                    <li>To ensure you are updated, I will be sending WIPs after the first sketch throughout the commission phase</li>
                </ul>
               </div>
        </div>
    )
}

export default TemrsAndConditions;