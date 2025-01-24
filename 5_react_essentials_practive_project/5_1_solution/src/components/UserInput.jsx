export default function UserInput(onInvestmentChange, initialInvestment, onAnnualInvestmentChange, annualInvestment, onExpectedReturnChange, expectedReturn, onDurationChange, duration) {
    function handleInvestmentChange(event) {
        onInvestmentChange(event);
    }

    return (
        <div id="user-input">
            <div className="input-group" style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                <div>
                <label htmlFor="initial_investment">Initial Investment</label>
                <input type="number" id="initial_investment" onChange={handleInvestmentChange} value={initialInvestment} />
                </div>
                <div>
                <label htmlFor="annual-investment">Annual Investment</label>
                <input type="number" id="annual-investment" onChange={onAnnualInvestmentChange} value={annualInvestment} />
                </div>
            </div>
            <div className="input-group" style={{ marginBottom: "1rem" }}>
                <div>
                <label htmlFor="expected-return">Expected Return</label>
                <input type="number" id="expected-return" onChange={onExpectedReturnChange} value={expectedReturn} />
                </div>
                <div>
                <label htmlFor="duration">duration</label>
                <input type="number" id="duration" onChange={onDurationChange} value={duration}/>
                </div>
            </div>
        </div>
    )
}