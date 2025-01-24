import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({userInput}) {
    const tableRows = calculateInvestmentResults(userInput);
    const initialInvestment =
        tableRows[0].valueEndOfYear -
        tableRows[0].interest -
        tableRows[0].annualInvestment

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
                        {tableRows.map((row) => {
                            const totalInterest =
                                row.valueEndOfYear - row.annualInvestment * row.year -
                                initialInvestment;

                            const totalAmountInvested =
                                row.valueEndOfYear - totalInterest;

                            return (
                                <tr key={row.year}>
                                    <td>{formatter.format(row.year)}</td>
                                    <td>{formatter.format(row.valueEndOfYear)}</td>
                                    <td>{formatter.format(row.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}