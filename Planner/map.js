const { Place, Event, Area, Missionary } = require('./classes.js');

class Map {
    constructor(data) {
        this.stations = {};
        this.homes = {};
        this.events = [];
        this.areas = {};
        this.missionaries = {};
        this.trainSchedule = {};

        for (const place of data.places) {
            if (place.type === 'station') {
                this.stations[place.name] = new Place(
                    place.name,
                    place.type
                );
            } else if (place.type === 'home') {
                this.homes[place.name] = new Place(
                    place.name,
                    place.type
                );
            }
        }

        for (const area of data.areas) {
            this.areas[area.name] = new Area(
                area.name,
                area.nearbyPlaces
            );
        }

        for (const missionary of data.missionaries) {
            this.missionaries[missionary.name] = new Missionary(
                missionary.name,
                missionary.currentArea,
                missionary.targetArea
            );
        }

        this.trainSchedule = data.trainSchedule;
    }

    findComps(missionary) {
        let comps = [];

        for (const potentialComp of this.missionaries) {
            if (missionary.targetArea === potentialComp.targetArea) {
                comps.push(potentialComp);
            }
        }

        return comps;
    }

    // findMeeting(comps) {
    //     for (comp of comps) {
    //         if (comp)
    //     }
    // }
}

module.exports = Map;
