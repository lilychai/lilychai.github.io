// One layer for all trip trips.
var routes_layer = {
  "id": "routes-layer",
  "source": {
      'type': 'geojson',
      'data': {
        "type": "FeatureCollection",
        "features": []
      }
  },
  "type": "line",
  "filter": ["==", "$type", "LineString"],
  "paint": {
      "line-width": 2,
      "line-color": "hsl(0, 0%, 0%)",
      'line-dasharray': [1, 1]
  }
}
