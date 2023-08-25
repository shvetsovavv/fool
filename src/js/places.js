"use strict"; // jshint ;_;
import {assert} from "./helper.js";


export default function choosePlace(window, document, settings, handlers, players) {
    const box = document.querySelector(".places");
    box.replaceChildren();
    const places = document.createElement("ul");
    places.classList.add('circle-wrapper');
    box.appendChild(places);
    const increaseDeg = 360 / players.length;
    let angleDeg = 90;
    let selected = null;
    function onSelect(e) {
        console.log(e.target, e.target.dataset.id);
        e.preventDefault();
        if (!e.target || e.target.dataset.id === null) {
            console.log("WRONG TARGET");
            return;
        }
        if (selected) {
            selected.classList.remove('selected');
            handlers['swap'](selected.dataset.id, e.target.dataset.id);
            selected = null;
            return;
        }

        selected = e.target;
        selected.classList.add('selected');
    }

    function onAllSeated(e) {
        e.preventDefault();
        box.replaceChildren();
        handlers['onSeatsFinished']();
    }

    places.addEventListener("click", onSelect);
    for (let i = 0; i < players.length; ++i) {
        const elem = document.createElement("li");
        elem.innerText = players[i].name;
        elem.dataset.id = i;
        elem.dataset.angle = angleDeg + 'deg';
        elem.style.setProperty('--angle-deg', angleDeg + 'deg');
        elem.classList.add('circle');
        angleDeg += increaseDeg;
        places.appendChild(elem);
    }

    const start = document.createElement("button");
    start.classList.add('start-button');
    start.addEventListener("click", onAllSeated);
    box.appendChild(start);
}
