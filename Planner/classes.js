class Place {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Event {
    constructor(place, type, time, duration, missionaries) {
        this.place = place;
        this.type = type;
        this.time = time;
        this.duration = duration;
        this.missionaries = missionaries;
    }
}

class Area {
    constructor(name, nearbyPlaces) {
        this.name = name;
        this.nearbyPlaces = nearbyPlaces;
    }
}

class Missionary {
    constructor(name, currentArea, targetArea) {
        this.name = name;
        this.currentArea = currentArea;
        this.targetArea = targetArea;
        this.events = [];
    }
}

module.exports = {
    Place: Place,
    Event: Event,
    Area: Area,
    Missionary: Missionary
};
