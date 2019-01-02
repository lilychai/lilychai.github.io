const km_dots = {
    "id": "km-dots",
    "type": "circle",
    "source": {
        'type': 'geojson',
        'data': kms,
    },
    "minzoom": 11,
    "layout": {},
    "paint": {
        "circle-color": "hsl(0, 0%, 45%)",
        "circle-radius": {
          "base": 1,
          "stops": [
            [11, 1], [18, 8]
          ]}
    },
    "interactive": true
}
