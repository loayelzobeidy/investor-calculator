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
    <div className="container mt-5 p-4 bg-light rounded shadow" id="user-input">
    <h2 className="text-center text-primary mb-4">Investment Details</h2>
    <div className="row g-3">
      <div className="col-md-6">
        <label htmlFor="input1" className="form-label fw-bold">
          Initial Investment
        </label>
        <input
          type="number"
          className="form-control border-primary"
          id="input1"
          placeholder="Enter amount"
          value={initialValue}
          onChange={handleInitialValueChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="input2" className="form-label fw-bold">
          Annual Investment
        </label>
        <input
          type="number"
          className="form-control border-primary"
          id="input2"
          placeholder="Enter amount"
          value={annualValue}
          onChange={handleAnnualValueChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="input3" className="form-label fw-bold">
          Expected Return (%)
        </label>
        <input
          type="number"
          className="form-control border-primary"
          id="input3"
          placeholder="Enter percentage"
          value={expectedValue}
          onChange={handleExpectedValueChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="input4" className="form-label fw-bold">
          Duration (Years)
        </label>
        <input
          type="number"
          className="form-control border-primary"
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
