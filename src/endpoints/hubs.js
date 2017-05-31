import {ENDPOINT} from './../config.js';

export function hubs() {
    return fetch(`${ENDPOINT}/hubs`).then(res => res.json());
};

export function save(hub) {
    return fetch(`${ENDPOINT}/hubs/${hub.id}`, {
        method: 'PUT',
        body: JSON.stringify(hub)
    }).then(res => res.json());
}