import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setInitialValue,
  setAnnualValue,
  setExpectedValue,
  setDurationValue
} from './../investimentSlice';

function UserInput() {
  const dispatch = useDispatch();

  // Access state values from Redux
  const {
    initialValue,
    annualValue,
    expectedValue,
    durationValue
  } = useSelector((state) => state.investment);


  // Handlers to dispatch actions
  const handleInitialValueChange = (e) => {
    dispatch(setInitialValue(Number(e.target.value)));
  };

  const handleAnnualValueChange = (e) => {
    dispatch(setAnnualValue(Number(e.target.value)));
  };

  const handleExpectedValueChange = (e) => {
    dispatch(setExpectedValue(Number(e.target.value)));
  };

  const handleDurationValueChange = (e) => {
    dispatch(setDurationValue(Number(e.target.value)));
  };

  return (
    <div
    className="container mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg"
    id="user-input"
  >
    <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
      Investment Details
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label
          htmlFor="input1"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Initial Investment
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          id="input1"
          placeholder="Enter amount"
          value={initialValue}
          onChange={handleInitialValueChange}
        />
      </div>
      <div>
        <label
          htmlFor="input2"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Annual Investment
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          id="input2"
          placeholder="Enter amount"
          value={annualValue}
          onChange={handleAnnualValueChange}
        />
      </div>
      <div>
        <label
          htmlFor="input3"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Expected Return (%)
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          id="input3"
          placeholder="Enter percentage"
          value={expectedValue}
          onChange={handleExpectedValueChange}
        />
      </div>
      <div>
        <label
          htmlFor="input4"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Duration (Years)
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          id="input4"
          placeholder="Enter years"
          value={durationValue}
          onChange={handleDurationValueChange}
        />
      </div>
    </div>
  </div>
  
  );
}

export default UserInput;
