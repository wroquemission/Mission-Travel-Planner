const Map = require('./map.js');

const data = {
    'places': [
        {
            'name': 'Takashima',
            'type': 'station',
            'zone': 'Okayama'
        },
        {
            'name': 'Okayama',
            'type': 'home',
            'zone': 'Okayama'
        },
        {
            'name': 'Fukuyama',
            'type': 'station',
            'zone': 'Okayama'
        }
    ],
    'areas': [
        {
            'name': 'Fukuyama',
            'nearbyPlaces': [
                'Okayama', 'Takashima'
            ],
            'zone': 'Okayama'
        }
    ],
    'missionaries': [
        {
            'name': 'William Roque',
            'currentArea': 'Fukuyama',
            'targetArea': 'Okayama'
        },
        {
            'name': 'Drew Pistorius',
            'currentArea': 'Fukuyama',
            'targetArea': 'Fukuyama'
        },
 {
            'name': 'Briggs Kondel',
            'currentArea': 'Okayama',
            'targetArea': 'Okayama'
        },
        {
            'name': 'Kiyoto Yamaguchi',
            'currentArea': 'Okayama',
            'targetArea': 'Fukuyama'
        }
    ],
    'trainSchedule': {
        'Fukuyama': [
            {
                'from': 'Fukayama',
                'to': 'Takashima',
                'day': [0, 1, 2], // 0 = Sun
                'time': '10:30'
            },
            {
                'from': 'Fukuyama',
                'to': 'Izumo',
                'day': [0, 1, 2, 3],
                'time': '13:00'
            },
        ]
    }
};

console.log(Map)

const map = new Map(data);

console.log(map);
