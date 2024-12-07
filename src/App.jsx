import { useState, useEffect } from "react";
import UserInput from "./components/UserInput";
import "bootstrap/dist/css/bootstrap.min.css";
import Logger from "./components/Logger";
import Header from "./components/Header";
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
<Header/>
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
    </>
  );
}

export default App;
