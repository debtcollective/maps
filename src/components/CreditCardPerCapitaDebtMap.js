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
            <strong>Total: {formatNumber(properties.creditCard)}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="feature map-overlay">
      <h2>Credit Card Debt Per Capita</h2>
      {content}
    </div>
  );
};

const CreditCardPerCapitaDebtMap = () => {
  return (
    <BaseMap
      layerId="percapitadebtbystate-bnppzb"
      mapStyle="mapbox://styles/orlandodelaguila/cjhca043x0psk2sqnil29bkx4"
      features={Features}
    />
  );
};

export default CreditCardPerCapitaDebtMap;
