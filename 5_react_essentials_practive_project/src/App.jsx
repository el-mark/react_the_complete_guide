import { formatter } from './util/investment';

function App() {
  return (
    <main>
      <div id="user-input">
        <div className="input-group" style={{ marginBottom: "2rem", marginTop: "1rem" }}>
          <div>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input type="number" name="initial-investment"/>
          </div>
          <div>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input type="number" name="annual-investment"/>
          </div>
        </div>
        <div className="input-group" style={{ marginBottom: "1rem" }}>
          <div>
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" name="expected-return"/>
          </div>
          <div>
            <label htmlFor="duration">duration</label>
            <input type="number" name="duration"/>
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
