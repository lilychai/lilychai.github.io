const poi_dots = {
    "id": "poi-dots",
    "type": "circle",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 11,
    "layout": {},
    "paint": {
        "circle-radius": {
          "base": 1,
          "stops": [
            [12, 2],
            [18, 10]
          ]
        },
        "circle-color": "hsl(0, 83%, 76%)",
        "circle-opacity": {
          "base": 1,
          "stops": [
            [11.5, 0],
            [12, 1]
          ]
        }
    },
    "interactive": true
}
