import { useState } from 'react';
import { formatter } from './util/investment';
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [ initialInvestment, setInitialInvestment] = useState(1000);
  function handleInvestmentChange(event) {
    setInitialInvestment(event.target.value);
  }

  const [ annualInvestment, setAnnualInvestment] = useState(1200);
  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(event.target.value);
  }

  const [ expectedReturn, setExpectedReturn] = useState(10);
  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  const [ duration, setDuration] = useState(10);
  function handleDurationChange(event) {
    setDuration(event.target.value);
  }


  return (
    <main>
      <div id="user-input">
        <div className="input-group" style={{ marginBottom: "2rem", marginTop: "1rem" }}>
          <div>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input type="number" name="initial-investment" onChange={handleInvestmentChange} value={initialInvestment} />
          </div>
          <div>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input type="number" name="annual-investment" onChange={handleAnnualInvestmentChange} value={annualInvestment} />
          </div>
        </div>
        <div className="input-group" style={{ marginBottom: "1rem" }}>
          <div>
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" name="expected-return" onChange={handleExpectedReturnChange} value={expectedReturn} />
          </div>
          <div>
            <label htmlFor="duration">duration</label>
            <input type="number" name="duration" onChange={handleDurationChange} value={duration}/>
          </div>
        </div>
      </div>
      <div id="result">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{formatter.format(17000)}</td>
              <td>{formatter.format(900)}</td>
              <td>{formatter.format(900)}</td>
              <td>{formatter.format(1000)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App
