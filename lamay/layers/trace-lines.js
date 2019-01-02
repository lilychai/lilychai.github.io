const trace_lines = {
    "id": "trace-lines",
    "type": "line",
    "source": {
        'type': 'geojson',
        'data': traces,
    },
    "minzoom": 11,
    "layout": {},
    "paint": {
        "line-color": "hsl(0, 0%, 96%)",
        "line-width": {
          "base": 1,
          "stops": [
            [11, 2],
            [22, 7]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [9, 0],
            [12, 1]
          ]
        }
    },
    "interactive": true
}
