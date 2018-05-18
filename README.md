# Maps

Here we host Debt maps created using Mapbox + React.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Install

1. `yarn install`

# Tasks

* `yarn start`: Starts the development server
* `yarn build`: Builds the project

# Deploy

We are using S3 + CloudFront to host the site. I used this guide to do
the deployment https://hackernoon.com/hosting-static-react-websites-on-aws-s3-cloudfront-with-ssl-924e5c134455

# How to create a custom map

## Mapbox Concepts

### [Tilesets](https://www.mapbox.com/studio/tilesets/)

A tileset is a collection of raster or vector data broken up into a uniform grid of square tiles at 22 preset zoom levels. [Read more](https://mapbox.com/help/define-tileset)

### [Styles](https://www.mapbox.com/studio/styles/)

Styles are customized maps, we can change colors or add layers (and
customize these too).

## Approach

We create maps by adding **properties** to a GeoJSON file.
```json
{
	"type": "FeatureCollection",
	"features": [{
			"type": "Feature",
			"id": "01",
			"properties": {
			  "name": "Alabama",
				"auto": 19717404400,
        "creditCard": 9776202600,
        "mortage": 86624580000,
        "studentLoan": 19222406800,
        "totalDebt": 135340593800
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": [
					[
						[-87.359296, 35.00118],
						[-85.606675, 34.984749],
						[-85.431413, 34.124869],
						[-85.184951, 32.859696],
						[-85.069935, 32.580372],
...
```

These GeoJSON files can be converted to Tilesets in [Mapbox](https://www.mapbox.com/studio/tilesets/).

![tilesets](http://g.recordit.co/OESAgSADbV.gif)

Tilesets can be used as layers in a custom Style (Map). Before we can use
it, we need to create a Style.

![style](https://monosnap.com/image/twv5xRmETKtaNWfz9e5bSyPm38HzUm.png)

After you create a style, next is to add the tileset layer with the data
we need to map

![style 2](https://monosnap.com/image/U4G5IFXcEPyNUUk3dey95UkM2rponk.png)

Once you have your layer ready, you can customize colors of each feature
in the GeoJSON using the **properties** you add to it.

gif -> [tileset custom](http://recordit.co/yAwQ0ZzW9z.gif)

Once you are ready with the modifications, we publish the style

![publish](https://monosnap.com/image/KzOGVdfZFE1aBAS8mVRiOqLxHvzwBZ.png)

Then we need two attributes that are used to render the map,
**mapStyle** URL and **layerId**. To get the mapStyle URL just copy it
from the Styles page

![mapStyle url](https://monosnap.com/image/d4EZkMz5Tt2FwQJ47t5ER9trad1pbf.png)

**layerId** is the name of the layer you created in your Style.

![layerId](https://monosnap.com/image/Q9RTh5ti9SDmjmIkNyAD77KlvG1gFr.png)

## Rendering a map

We have a `BaseMap` class that can be used to render the map and display
**properties** of the GeoJSON when hovering, to use this you need both
**mapStyle** and **layerId**

```js
// This component is called with feature
// everytime you hover over a valid GeoJSON Feature area
// Use this to display properties
const Features = feature => {
  return (
    <div className="feature map-overlay">
      <h2>Auto Debt Per Capita</h2>
    </div>
  );
};

const TotalDebtMap = () => {
  return (
    <BaseMap
      layerId="yourLayerId"
      mapStyle="yourMapboxStyleURL"
      features={Features}
    />
  );
};
```

## GeoJSON files

These can be found in the internet, we are only using the [US States](https://leafletjs.com/examples/choropleth/us-states.js) one. Here's a list of websites that provide these files.

* http://eric.clst.org/tech/usgeojson/
* https://github.com/jgoodall/us-maps/tree/master/geojson
* https://github.com/OpenDataDE/State-zip-code-GeoJSON
* https://catalog.data.gov/dataset
