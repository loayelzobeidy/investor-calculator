import { useState } from "react";

function UserInput({
  initialInvestiment,
  handleIntialChange,
  annualInvesiment,
  handleAnnualChange,
  expectedReturn,
  handleExpectedChange,
  duration,
  handleDurationChange,
}) {
  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
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
          value={initialInvestiment}
          onChange={handleIntialChange}
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
          value={annualInvesiment}
          onChange={handleAnnualChange}
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
          value={expectedReturn}
          onChange={handleExpectedChange}
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
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
    </div>
  </div>
  
  );
}

export default UserInput;
