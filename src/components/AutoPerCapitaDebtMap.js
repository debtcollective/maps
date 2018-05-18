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
            <strong>Total: {formatNumber(properties.auto)}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="feature map-overlay">
      <h2>Auto Debt Per Capita</h2>
      {content}
    </div>
  );
};

const AutoPerCapitaDebtMap = () => {
  return (
    <BaseMap
      layerId="percapitadebtbystate-bnppzb"
      mapStyle="mapbox://styles/orlandodelaguila/cjhc90nwg0n6w2rpl523tf4v7"
      features={Features}
    />
  );
};

export default AutoPerCapitaDebtMap;
