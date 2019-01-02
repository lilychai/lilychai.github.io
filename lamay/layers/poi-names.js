const poi_names_l = {
    "id": "poi-names-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 11,
    "filter": [
      "all",
      [">=", "poi", 5],
      ["<=", "poi", 10],
      ["!=", "poi", 7]
    ],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "DIN Offc Pro Cond"
        ],
        "text-size": {
            "base": 1,
            "stops": [
              [13, 11],
              [16, 20]
            ]
        },
        "text-anchor": "right",
        "text-offset": {
            "base": 1,
            "stops": [
              [12, [-0.5, 0]],
              [18, [-1, 0]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
          "base": 1,
          "stops": [
            [11.5, 0],
            [12, 1]
          ]
        }
    },
    "interactive": true
}


const poi_names_r = {
    "id": "poi-names-right",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 11,
    "filter": [">=", "poi", 12],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "DIN Offc Pro Cond"
        ],
        "text-size": {
            "base": 1,
            "stops": [
              [13, 11],
              [16, 20]
            ]
        },
        "text-anchor": "left",
        "text-offset": {
            "base": 1,
            "stops": [
              [12, [0.5, 0]],
              [18, [1, 0]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
          "base": 1,
          "stops": [
            [11.5, 0],
            [12, 1]
          ]
        }
    },
    "interactive": true
}


const poi_names_r_long = {
    "id": "poi-names-right-long",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 12,
    "filter": ["==", "poi", 7],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "DIN Offc Pro Cond"
        ],
        "text-size": {
            "base": 1,
            "stops": [
              [13, 11],
              [16, 20]
            ]
        },
        "text-max-width": 20,
        "text-anchor": "left",
        "text-offset": {
            "base": 1,
            "stops": [
              [12, [0.5, 0]],
              [18, [1, 0]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
          "base": 1,
          "stops": [
            [12.4, 0],
            [12.5, 1]
          ]
        }
    },
    "interactive": true
}


const poi_names_tr= {
    "id": "poi-names-top-right",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 11,
    "filter": ["==", "poi", 3],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "DIN Offc Pro Cond"
        ],
        "text-size": {
            "base": 1,
            "stops": [
              [13, 11],
              [16, 20]
            ]
        },
        "text-anchor": "bottom-left",
        "text-offset": {
            "base": 1,
            "stops": [
              [12, [0, -0.3]],
              [18, [0, -1]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
          "base": 1,
          "stops": [
            [12.4, 0],
            [12.5, 1]
          ]
        }
    },
    "interactive": true
}


const poi_names_tl = {
    "id": "poi-names-top-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 11,
    "filter": ["==", "poi", 4],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "DIN Offc Pro Cond"
        ],
        "text-size": {
            "base": 1,
            "stops": [
              [13, 11],
              [16, 20]
            ]
        },
        "text-anchor": "bottom-right",
        "text-offset": {
            "base": 1,
            "stops": [
              [12, [-0.5, 0]],
              [18, [-1, 0]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
            "base": 1,
            "stops": [
              [11.5, 0],
              [12, 1]
            ]
        }
    },
    "interactive": true
}


const poi_names_bl = {
    "id": "poi-names-bottom-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 11,
    "filter": ["in", "poi", 1, 11.1],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "DIN Offc Pro Cond"
        ],
        "text-size": {
            "base": 1,
            "stops": [
              [13, 11],
              [16, 20]
            ]
        },
        "text-anchor": "top-right",
        "text-offset": {
            "base": 1,
            "stops": [
              [12, [-0.1, 0]],
              [18, [-0.2, 1.2]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
          "base": 1,
          "stops": [
            [12.4, 0],
            [12.5, 1]
          ]
        }
    },
    "interactive": true
}


const poi_names_br = {
    "id": "poi-names-bottom-right",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 11,
    "filter": ["in", "poi", 2, 11.2],
    "layout": {
        "text-field": "{name}",
        "text-font": [
            "Prater Serif Offc Pro Regular",
            "DIN Offc Pro Cond"
        ],
        "text-size": {
            "base": 1,
            "stops": [
              [13, 11],
              [16, 20]
            ]
        },
        "text-anchor": "top-left",
        "text-offset": {
            "base": 1,
            "stops": [
              [12, [0.5, 0]],
              [18, [1, 0]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
            "base": 1,
            "stops": [
              [11.5, 0],
              [12, 1]
            ]
        }
    },
    "interactive": true
}
