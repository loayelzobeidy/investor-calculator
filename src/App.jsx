import { useState, useEffect } from "react";
import UserInput from "./components/userInput";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/investment-calculator-logo.png";
import Logger from "./components/logger";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  let duration = 1;
  let initialInvestiment = 500;
  let annualInvestiment = 10000;
  let expectedInvestiment = 2000;

  const [initialValue, setInitialValue] = useState(initialInvestiment);
  const [annualValue, setAnnualValue] = useState(annualInvestiment);
  const [expectedValue, setExpectedValue] = useState(expectedInvestiment);
  const [durationValue, setDurationValue] = useState(duration);
  const [annualData, setAnnualData] = useState([]);

  const handleIntialChange = (event) => {
    setInitialValue(event.target.value);
    console.log("A", annualData, initialValue, annualValue);
  };

  const handleDurationChange = (event) => {
    setDurationValue(event.target.value);
  };

  const handleAnnualChange = (event) => {
    setAnnualValue(event.target.value);
  };

  const handleExpectedChange = (event) => {
    setExpectedValue(event.target.value);
  };

  useEffect(() => {
    setAnnualData(
      calculateInvestmentResults({
        initialInvestment: initialValue,
        annualInvestment: annualValue,
        expectedReturn: expectedValue,
        duration: durationValue,
      })
    );
  }, [initialValue, annualValue, expectedValue, durationValue]);

  return (
    <>
      <nav className="navbar bg-light shadow-sm py-3">
  <div className="container d-flex align-items-center justify-content-between">
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img
        src={logo}
        alt="Logo"
        width="50"
        height="50"
        className="d-inline-block me-2"
      />
      <span className="fw-bold text-primary">Investment Pro</span>
    </a>

    <h1 className="text-center text-secondary flex-grow-1">React Investment Calculator</h1>
    
    <div className="container d-flex flex-column align-items-center mt-4">
  <UserInput
    initialInvestiment={initialValue}
    handleIntialChange={handleIntialChange}
    annualInvesiment={annualValue}
    handleAnnualChange={handleAnnualChange}
    expectedReturn={expectedValue}
    handleExpectedChange={handleExpectedChange}
    duration={durationValue}
    handleDurationChange={handleDurationChange}
  />
  <div className="mt-4 text-center">
    <Logger annualData={annualData} />
  </div>
</div>
  </div>

</nav>

    </>
  );
}

export default App;
