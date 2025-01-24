import { formatter } from '../util/investment';
import { calculateInvestmentResults } from '../util/investment';

export default function Results({userInput}) {
    const tableRows = calculateInvestmentResults(userInput);

    return (
        <main>
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
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(row.annualInvestment)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}