import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
      setUserInput(prevUserInput => (
          {...prevUserInput, [inputIdentifier]: newValue}
      ));
  }

  // let totalInterest = 0;
  // let totalAnnualInvestment = 0;

  return (<div>
    <Header></Header>
    <UserInput userInput={userInput} handleChange={handleChange}></UserInput>
    <Results userInput={userInput} ></Results>
  </div>)
}

export default App
