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
              <th>Person</th>
              <th>Most interest in</th>
              <th>Age</th>
              <th>Age</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chris</td>
              <td>HTML tables</td>
              <td>22</td>
              <td>22</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Dennis</td>
              <td>Web accessibility</td>
              <td>45</td>
              <td>22</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App
