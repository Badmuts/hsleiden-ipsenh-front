import {ENDPOINT} from './../config.js';

export function buildings() {
    return fetch(`${ENDPOINT}/buildings`).then(res => res.json());
};

export function rooms(building) {
    return fetch(`${ENDPOINT}/buildings/${building.id}/rooms`).then(res => res.json());
}