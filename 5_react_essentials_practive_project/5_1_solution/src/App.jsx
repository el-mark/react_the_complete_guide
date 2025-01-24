import { useState } from 'react';
import { formatter } from './util/investment';
import { calculateInvestmentResults } from './util/investment';

import Header from './components/Header';
import UserInput from './components/UserInput';

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
      <UserInput
        onInvestmentChange={handleInvestmentChange}
        initialInvestment={initialInvestment}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        annualInvestment={annualInvestment}
        onExpectedReturnChange={handleExpectedReturnChange}
        expectedReturn={expectedReturn}
        onDurationChange={handleDurationChange}
        duration={duration}
      ></UserInput>
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
