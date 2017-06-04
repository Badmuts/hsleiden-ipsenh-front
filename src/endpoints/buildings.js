import {ENDPOINT} from './../config.js';

export function buildings() {
    return fetch(`${ENDPOINT}/buildings`).then(res => res.json());
};

export function rooms(building) {
    return fetch(`${ENDPOINT}/buildings/${building.id || building }/rooms`).then(res => res.json());
}

export function room(building, room) {
    return fetch(`${ENDPOINT}/buildings/${building}/rooms/${room}`).then(res => res.json());
}