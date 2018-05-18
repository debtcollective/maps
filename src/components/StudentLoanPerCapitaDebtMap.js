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
          <p>
            <strong>Total: {formatNumber(properties.studentLoan)}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="feature map-overlay">
      <h2>Student Loan Debt Per Capita</h2>
      {content}
    </div>
  );
};

const StudentLoanPerCapitaDebtMap = () => {
  return (
    <BaseMap
      layerId="percapitadebtbystate-bnppzb"
      mapStyle="mapbox://styles/orlandodelaguila/cjhcakydj0n3v2smmqhbg5ay2"
      features={Features}
    />
  );
};

export default StudentLoanPerCapitaDebtMap;
