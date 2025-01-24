import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputsNotValid = userInput.duration < 1;

  function handleChange(inputIdentifier, newValue) {
      setUserInput(prevUserInput => (
          {...prevUserInput, [inputIdentifier]: +newValue}
      ));
  }

  return (<div>
    <Header></Header>
    <UserInput userInput={userInput} handleChange={handleChange}></UserInput>
    { inputsNotValid ? (<p className="center">Duration can't be less than 1.</p>) : <Results userInput={userInput} />}
  </div>)
}

export default App
