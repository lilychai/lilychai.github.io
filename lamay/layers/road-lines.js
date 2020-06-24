const road_lines = {
    "id": "road-lines",
    "type": "line",
    "source": {
        "type": "vector",
        "url": "mapbox://mapbox.mapbox-streets-v8"
    },
    "source-layer": "road",
    "minzoom": 10,
    "filter": [
        "any",
        ["==", "class", "primary"],
        ["==", "class", "secondary"],
        ["==", "class", "tertiary"],
        ["==", "class", "street"]
    ],
    "layout": {},
    "paint": {
        "line-color": "hsl(162, 50%, 33%)",
        "line-width": {
          "base": 1,
          "stops": [
            [0, 2],
            [22, 2]
          ]
        },
        "line-dasharray": [100, 0],
        "line-opacity": {
          "base": 1,
          "stops": [
            [10, 0],
            [11.5, 0.35]
          ]
        }
    },
    "interactive": true
}
