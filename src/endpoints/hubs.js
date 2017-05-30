import {ENDPOINT} from './../config.js';

export function hubs() {
    return fetch(`${ENDPOINT}/hubs`).then(res => res.json());
};