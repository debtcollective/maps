import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

class Features extends Component {
  render() {
    const feature = this.props.feature;
    let content = <p>Hover over a state!</p>;

    if (feature) {
      content = (
        <div>
          <h3>
            <strong>{feature.name}</strong>
          </h3>,
          <ul>
            <li>Auto - {feature.auto}</li>
            <li>Credit Card - {feature.creditCard}</li>
            <li>Mortage - {feature.mortage}</li>
            <li>Student Loan - {feature.studentLoan}</li>
            <li>Total - {feature.totalDebt}</li>
          </ul>
        </div>
      );
    }

    return (
      <div className="feature map-overlay">
        <h2>Debt by State</h2>
        {content}
      </div>
    );
  }
}

class App extends Component {
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
    // This is the id of the tileset in Mapbox
    const feature = features.filter(
      feature => feature.layer.id === "debtbystate-8czcfj"
    )[0];

    this.setState({ feature });
  }

  render() {
    const config = {
      mapboxApiAccessToken:
        "pk.eyJ1Ijoib3JsYW5kb2RlbGFndWlsYSIsImEiOiJjamc1ZGtrZDcxbGd1MnF4ZnFibnl3bDluIn0.G1MeRIupgM46SBq9ptWlnw",
      mapStyle: "mapbox://styles/orlandodelaguila/cjh9j9u7s08j52roznsij3cra"
    };

    return (
      <div>
        <ReactMapGL
          {...config}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          onHover={event => this.onHover(event)}
        />
        <Features feature={this.state.feature} />
      </div>
    );
  }
}

export default App;
