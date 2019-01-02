const poi_cnames_l =   {
    "id": "poi-cname-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 12,
    "filter": [
      "all",
      [">=", "poi", 5],
      ["<=", "poi", 10],
      ["!=", "poi", 7]
    ],
    "layout": {
        "text-field": "{cname}",
        "text-font": [
            "Arial Unicode MS Regular"
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
              [11, [-0.5, 1.2]],
              [18, [-1, 2.3]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
            "base": 1,
            "stops": [
              [12, 0],
              [13, 1]
            ]
        }
    },
    "interactive": true
}


const poi_cnames_r = {
    "id": "poi-cnames-right",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 12,
    "filter": [
      "any",
      ["==", "poi", 7],
      [">=", "poi", 12]
    ],
    "layout": {
        "text-field": "{cname}",
        "text-font":  [
            "Arial Unicode MS Regular"
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
              [11, [0.2, 1.2]],
              [18, [1, 2.3]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
            "base": 1,
            "stops": [
              [12, 0],
              [13, 1]
            ]
        }
    },
    "interactive": true
}


const poi_cnames_tl = {
    "id": "poi-cnames-top-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 12,
    "filter": ["==", "poi", 4],
    "layout": {
        "text-field": "{cname}",
        "text-font": [
            "Arial Unicode MS Regular"
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
              [11, [-0.5, -0.2]],
              [18, [-1, 1.5]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
            "base": 1,
            "stops": [
              [12, 0],
              [13, 1]
            ]
        }
    },
    "interactive": true
}


const poi_cnames_bl = {
    "id": "poi-cnames-bottom-left",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 12,
    "filter": ["in", "poi", 1, 11.1],
    "layout": {
        "text-field": "{cname}",
        "text-font": [
            "Arial Unicode MS Regular"
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
              [12, [0, 1.3]],
              [18, [-0.5, 4]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
            "base": 1,
            "stops": [
              [12, 0],
              [13, 1]
            ]
        }
    },
    "interactive": true
}


const poi_cnames_br = {
    "id": "poi-cnames-bottom-right",
    "type": "symbol",
    "source": {
        'type': 'geojson',
        'data': pois,
    },
    "minzoom": 12,
    "filter": ["in", "poi", 2, 11.2],
    "layout": {
        "text-field": "{cname}",
        "text-font": ["Arial Unicode MS Regular"],
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
              [11, [0.6, 1.3]],
              [18, [0.8, 2.2]]
            ]
        }
    },
    "paint": {
        "text-opacity": {
            "base": 1,
            "stops": [
              [12, 0],
              [13, 1]
            ]
        }
    },
    "interactive": true
}
