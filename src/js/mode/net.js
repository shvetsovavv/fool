"use strict";

import connectionFunc from "../connection/client.js";
import actionsFunc from "../actions.js";
import {removeElem, log} from "../helper.js";

function toObjJson(v, method) {
    const value = {
        'method': method
    };
    value[method] = v;
    return JSON.stringify(value);
}

export default function netMode(window, document, settings, gameFunction) {
    return new Promise((resolve, reject) => {
        const connection = connectionFunc(settings, window.location);
        const logger = document.getElementsByClassName('log')[0];
        connection.on('error', (e) => {
            log(settings, e, logger);
        });
        connection.on('socket_open', () => {
            const grid = document.getElementsByClassName('grid')[0];
            grid.style.backgroundColor = "#AA0000";
            connection.on('socket_close', () => {
                grid.style.backgroundColor = "black";
            });
        });

        connection.on('open', () => {
            const game = gameFunction(window, document, settings);
            const actions = actionsFunc(game);
            connection.on('recv', (data) => {
                // console.log(data);
                const obj = JSON.parse(data);
                const res = obj[obj.method];
                const callback = actions[obj.method];
                if (typeof callback === 'function') {
                    callback(res);
                }
            });
            for (const [handlerName, callback] of Object.entries(actions)) {
                game.on(handlerName, (n) => connection.sendMessage(toObjJson(n, handlerName)));
            }
            resolve(game);
        });

        try {
            connection.connect();
        } catch (e) {
            log(settings, e, logger);
            reject(e);
        }
    });
}