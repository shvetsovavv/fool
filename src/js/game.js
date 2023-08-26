"use strict"; // jshint ;_;
import {assert, delay} from "./helper.js";
import enterName from "./names.js";
import choosePlaceFunc from "./places.js";
import unoGameFunc from "./uno-game.js";

function stub(message) {
    console.log("Stub " + message);
}

const handlers = {
    'move': stub,
    'gameover': stub,
    'username': stub,
    'start': stub,
    'swap': stub,
    'uno-start': stub
}

let players = [];
let dealer = 0;

export default function game(window, document, settings) {

    function onChange(m) {
        stub(m);
    }

    function on(name, f) {
        handlers[name] = f;
    }

    const join = (ind, name, external_id) => {
        players[ind] = {"name": name, "external_id": external_id};
        choosePlaceFunc(window, document, settings, handlers, players);
    }

    const getState = () => {
        return {
            "players": players,
            "dealer": dealer
        }
    }

    const start = () => {
        handlers['start'](players);
    }

    const onStart = (p) => {
        players = p;
        const unoGame = unoGameFunc(window, document, settings, players, handlers);
    }

    const startButton = document.querySelector(".start");
    if (startButton) {
        startButton.addEventListener("click", start);
    }

    const onConnect = () => {
        enterName(window, document, settings, handlers);
    }

    const swap = (id1, id2) => {
        const temp = players[id1];
        players[id1] = players[id2];
        players[id2] = temp;
        choosePlaceFunc(window, document, settings, handlers, players);
    }
    const main = async (unoGame) => {
        await unoGame.chooseDealer();
        await delay(1000);
        await unoGame.deal();
        await unoGame.start();
    }

    const afterAllJoined = async () => {
       start();
       const unoGame = unoGameFunc(window, document, settings, players, handlers);
       console.log("Game init");
       await main(unoGame);
   }

    on('onSeatsFinished', afterAllJoined);


    return {
       on,
       onChange,
       join,
       start,
       onConnect,
       swap,
       onStart,
       main,
       afterAllJoined
    }
}
