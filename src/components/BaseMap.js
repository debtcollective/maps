import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import config from "../config";

export default class BaseMap extends Component {
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
      feature => feature.layer.id === this.props.layerId
    )[0];

    this.setState({ feature });
  }

  render() {
    const { layerId, mapStyle, features } = this.props;

    return (
      <div>
        <ReactMapGL
          {...config}
          {...this.state.viewport}
          layerId={layerId}
          mapStyle={mapStyle}
          onViewportChange={viewport => this.setState({ viewport })}
          onHover={event => this.onHover(event)}
        />
        {features(this.state.feature)}
      </div>
    );
  }
}
