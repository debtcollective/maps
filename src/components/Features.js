import React from "react";

const formatNumber = number =>
  number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

export default ({ feature }) => {
  let content = <p>Hover over a state!</p>;

  if (feature) {
    const { properties } = feature;

    content = (
      <div>
        <h3 className="feature-name">
          <strong>{properties.name}</strong>
        </h3>
        <div>
          <p>Auto: {formatNumber(properties.auto)}</p>
          <p>Credit Card: {formatNumber(properties.creditCard)}</p>
          <p>Mortage: {formatNumber(properties.mortage)}</p>
          <p>Student Loan: {formatNumber(properties.studentLoan)}</p>
          <br />
          <p>
            <strong>Total: {formatNumber(properties.totalDebt)}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="feature map-overlay">
      <h2>US Debt by State</h2>
      {content}
    </div>
  );
};
