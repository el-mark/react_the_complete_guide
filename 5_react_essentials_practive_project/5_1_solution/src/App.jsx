import { useState } from 'react';
import { formatter } from './util/investment';
import { calculateInvestmentResults } from './util/investment';

import Header from './components/Header';

function App() {
  const [ initialInvestment, setInitialInvestment] = useState(10000);
  function handleInvestmentChange(event) {
    setInitialInvestment(event.target.value);
  }

  const [ annualInvestment, setAnnualInvestment] = useState(1200);
  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(event.target.value);
  }

  const [ expectedReturn, setExpectedReturn] = useState(6);
  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  const [ duration, setDuration] = useState(10);
  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  const tableRows = calculateInvestmentResults({
    initialInvestment, annualInvestment, expectedReturn, duration
  });

  let totalInterest = 0;
  let totalAnnualInvestment = 0;

  return (
    <main>
      <Header></Header>
      <div id="user-input">
        <div className="input-group" style={{ marginBottom: "2rem", marginTop: "1rem" }}>
          <div>
            <label htmlFor="initial_investment">Initial Investment</label>
            <input type="number" id="initial_investment" onChange={handleInvestmentChange} value={initialInvestment} />
          </div>
          <div>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input type="number" id="annual-investment" onChange={handleAnnualInvestmentChange} value={annualInvestment} />
          </div>
        </div>
        <div className="input-group" style={{ marginBottom: "1rem" }}>
          <div>
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" id="expected-return" onChange={handleExpectedReturnChange} value={expectedReturn} />
          </div>
          <div>
            <label htmlFor="duration">duration</label>
            <input type="number" id="duration" onChange={handleDurationChange} value={duration}/>
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
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{formatter.format(row.year)}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest += row.interest)}</td>
                <td>{formatter.format(totalAnnualInvestment += row.annualInvestment)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App
