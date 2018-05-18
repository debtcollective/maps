import React from "react";
import BaseMap from "./BaseMap";
import { formatNumber } from "../utils";

const Features = feature => {
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
      <h2>US Total Debt by State</h2>
      {content}
    </div>
  );
};

const TotalDebtMap = () => {
  return (
    <BaseMap
      layerId="debtbystate-8czcfj"
      mapStyle="mapbox://styles/orlandodelaguila/cjh9j9u7s08j52roznsij3cra"
      features={Features}
    />
  );
};

export default TotalDebtMap;
