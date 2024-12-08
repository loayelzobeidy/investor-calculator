
import { useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { calculateInvestmentResults } from "../util/investment";

function Logger({  }) {

 
  // Access state values from Redux
  const {
    initialValue,
    annualValue,
    expectedValue,
    durationValue
  } = useSelector((state) => state.investment);

  const [annualData, setAnnualData] = useState([]);

  useEffect(() => {
    let calculatedData =   calculateInvestmentResults({
        initialInvestment: initialValue,
        annualInvestment: annualValue,
        expectedReturn: expectedValue,
        duration: durationValue,
      })
      setAnnualData(calculatedData); 
  }, [initialValue, annualValue, expectedValue, durationValue]);
  



  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div className="container mx-auto mt-4 p-4" id="result">
  <table className="w-full table-auto border-collapse border border-gray-300 shadow-sm">
    <thead>
      <tr className="bg-blue-600 text-white text-center">
        <th className="px-4 py-2 border border-gray-300">Year</th>
        <th className="px-4 py-2 border border-gray-300">Interest Earned</th>
        <th className="px-4 py-2 border border-gray-300">
          Value at End of Year
        </th>
        <th className="px-4 py-2 border border-gray-300">Annual Investment</th>
      </tr>
    </thead>
    <tbody>
      {annualData.map((row, index) => (
        <tr
          key={index}
          className="text-center odd:bg-gray-100 even:bg-white hover:bg-gray-200"
        >
          <td className="px-4 py-2 border border-gray-300">{row.year}</td>
          <td className="px-4 py-2 border border-gray-300">
            {formatter.format(row.interest)}
          </td>
          <td className="px-4 py-2 border border-gray-300">
            {formatter.format(row.valueEndOfYear)}
          </td>
          <td className="px-4 py-2 border border-gray-300">
            {formatter.format(row.annualInvestment)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default Logger;
