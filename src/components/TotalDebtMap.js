import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import config from "../config";
import { formatNumber } from "../utils";

const Features = ({ feature }) => {
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

class TotalDebtMap extends Component {
  // This is the id of the tileset in Mapbox
  layerId = "debtbystate-8czcfj";
  mapStyle = "mapbox://styles/orlandodelaguila/cjh9j9u7s08j52roznsij3cra";

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 39.001025,
      longitude: -97.324023,
      zoom: 4.8
    },
    feature: null
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.updateDimensions();
    });
  }

  updateDimensions() {
    const viewport = {
      ...this.state.viewport,
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.setState({ viewport });
  }

  onHover({ features = [], lngLat }) {
    const feature = features.filter(
      feature => feature.layer.id === this.layerId
    )[0];

    this.setState({ feature });
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...config}
          {...this.state.viewport}
          mapStyle={this.mapStyle}
          onViewportChange={viewport => this.setState({ viewport })}
          onHover={event => this.onHover(event)}
        />
        <Features feature={this.state.feature} />
      </div>
    );
  }
}

export default TotalDebtMap;
