"use strict"; // jshint ;_;

import {shuffleArray} from "./shuffle.js";

function newDeck() {
    const deck = [ ...Array(112).keys()];
    deck.splice(56, 1); //56
    deck.splice(69, 1); //70
    deck.splice(82, 1); //84
    deck.splice(95, 1); //98
    return deck;
}

async function newShuffledDeck(handlers) {
    let deck = newDeck();
    shuffleArray(deck);
    await handlers['shuffle'](deck);

    function deal() {
        const card = deck.pop();
        // console.log(card);
        return card;
    }

    function setDeck(d) {
        deck = d;
    }

    function addCard(card) {
        deck.push(card)
    }

    async function addCardAndShuffle(card) {
        addCard(card);
        shuffleArray(deck);
        await handlers['shuffle'](deck);
    }

    return {deal, addCardAndShuffle, setDeck};
}


function newExternalDeck(d, handlers) {
    let deck = d;

    function deal() {
        const card = deck.pop();
        // console.log(card);
        return card;
    }

    function setDeck(d) {
        deck = d;
    }

    function addCard(card) {
        deck.push(card)
    }

    async function addCardAndShuffle(card) {
        addCard(card);
        shuffleArray(deck);
        await handlers['shuffle'](deck);
    }

    return {deal, addCardAndShuffle, setDeck};
}



export default {
    newShuffledDeck, newExternalDeck
}
