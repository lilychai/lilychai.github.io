// One layer for each transportation.
const transportations = ['air', 'car', 'train']

const transportation_layers = []
transportations.forEach(function(transportation) {
  transportation_layers.push({
    "id": transportation + "-layer",
    "source": {
        'type': 'geojson',
        'data': {
          "type": "FeatureCollection",
          "features": []
        }
    },
    "type": "symbol",
    "filter": ["==", "$type", "Point"],
    "layout": {
        "visibility": "none",
        "icon-image": transportation + "-30",
        "icon-rotate": ["get", "bearing"],
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
    }
  });
});
