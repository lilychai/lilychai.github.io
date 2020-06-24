// One layer for names of all cities.
const names = {}
const cities = []
trips.forEach(function(trip) {
  trip.features.forEach(function(city) {
    if (!names[city.properties.place]) {
      names[city.properties.place] = 1;
      cities.push(city);
    }
  });
});

const names_layer = {
  "id": "names-layer",
  "source": {
      'type': 'geojson',
      'data': {
        "type": "FeatureCollection",
        "features": cities
      }
  },
  "type": "symbol",
  "layout": {
    "text-field": "{place}",
    "text-font": [
        "Prater Serif Offc Pro Regular",
        "Arial Unicode MS Regular"
    ],
    "text-anchor": "center",
    "text-size": {
        "base": 1,
        "stops": [
          [0, 8],
          [11, 24]
        ]
    },
  }
}
