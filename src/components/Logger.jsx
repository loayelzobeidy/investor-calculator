
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import { calculateInvestmentResults } from "../util/investment";


let annualData = []
function Logger({  }) {

 
  // Access state values from Redux
  const {
    initialValue,
    annualValue,
    expectedValue,
    durationValue
  } = useSelector((state) => state.investment);
  
  useEffect(() => {

    annualData =   calculateInvestmentResults({
        initialInvestment: initialValue,
        annualInvestment: annualValue,
        expectedReturn: expectedValue,
        duration: durationValue,
      })
  }, [initialValue, annualValue, expectedValue, durationValue]);
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div className="container mt-4" id="result">
  
      <table className="table table-striped table-hover table-bordered align-middle shadow-sm">
        <thead className="bg-primary text-white text-center">
          <tr>
            <th>Year</th>
            <th>Interest Earned</th>
            <th>Value at End of Year</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((row, index) => (
            <tr key={index} className="text-center">
              <td>{row.year}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Logger;
