const km_names_br = {
    "id": "km-names-bottom-right",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': kms,
    },
    "minzoom": 11,
    "filter": [
        "all",
        [">=", "km", 1],
        ["<=", "km", 5]
    ],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "Arial Unicode MS Regular"
        ],
        "text-anchor": "top-left",
        "text-size": {
            "base": 1,
            "stops": [
              [11, 8],
              [18, 14]
            ]
        },
        "text-offset": {
            "base": 1,
            "stops": [
              [11, [0.4, -0.2]],
              [18, [1, 0]]
            ]
        }
    },
    "paint": {
        "text-color": "hsl(109, 1%, 44%)",
        "text-opacity": {
            "base": 1,
            "stops": [
              [10, 0],
              [11.5, 1]
            ]
        }
    },
    "interactive": true
}


const km_names_tl = {
    "id": "km-names-top-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': kms,
    },
    "minzoom": 11,
    "filter": [
        "all",
        [">=", "km", 7],
        ["<=", "km", 10]
    ],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "Arial Unicode MS Regular"
        ],
        "text-anchor": "bottom-right",
        "text-size": {
            "base": 1,
            "stops": [
              [11, 8],
              [18, 14]
            ]
        },
        "text-offset": {
            "base": 1,
            "stops": [
              [11, [-0.3, 0]],
              [18, [-1.4, 0]]
            ]
        }
    },
    "paint": {
        "text-color": "hsl(109, 1%, 44%)",
        "text-opacity": {
            "base": 1,
            "stops": [
              [10, 0],
              [11.5, 1]
            ]
        }
    },
    "interactive": true
}


const km_names_t = {
    "id": "km-names-top",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': kms,
    },
    "minzoom": 11,
    "filter": ["==", "km", 6],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "Arial Unicode MS Regular"
        ],
        "text-anchor": "bottom",
        "text-size": {
            "base": 1,
            "stops": [
              [11, 8],
              [18, 14]
            ]
        },
        "text-offset": {
            "base": 1,
            "stops": [
              [11, [-0.3, -0.5]],
              [18, [-1.4, -1.5]]
            ]
        }
    },
    "paint": {
        "text-color": "hsl(109, 1%, 44%)",
        "text-opacity": {"base": 1, "stops": [[10, 0], [11.5, 1]]}
    },
    "interactive": true
}

const km_names_bl = {
    "id": "km-names-bottom-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': kms,
    },
    "minzoom": 11,
    "filter": ["in", "km", 0, 11],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "Arial Unicode MS Regular"
        ],
        "text-anchor": "top-right",
        "text-size": {
            "base": 1,
            "stops": [
              [11, 8],
              [18, 14]
            ]
        },
        "text-offset": {
            "base": 1,
            "stops": [
              [11, [0, 0]],
              [18, [-0.5, 0.5]]
            ]
        }
    },
    "paint": {
        "text-color": "hsl(109, 1%, 44%)",
        "text-opacity": {
            "base": 1,
            "stops": [
              [10, 0],
              [11.5, 1]
            ]
        }
    },
    "interactive": true
}
