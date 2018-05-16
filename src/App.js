import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import Features from "./components/Features";
import config from "./config";

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
