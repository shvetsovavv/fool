"use strict"; // jshint ;_;
import {assert, delay} from "./helper.js";
import coreUnoFunc from "./uno.js";
import colorChooser from "./choose_color.js";
import layout from "./layout.js";

export default function unoGame(window, document, settings, playersExternal, handlers) {

    const engine = coreUnoFunc(settings);
    let index = 0;
    let myIndex = 0;
    console.log(playersExternal);
    for (const p of playersExternal) {
        engine.addPlayer(p.name);
        if (p.external_id == settings.externalId) {
            myIndex = index;
        }
        ++index;
    }

    const handCont = document.querySelector('.hand-cont');
    engine.on("draw", async ({playerIndex, card}) => {
        layout.drawPlayers(window, document, engine, myIndex, settings);
        await delay(30);
        if (playerIndex === myIndex || settings.mode === 'server') {
            await handlers['draw']({playerIndex, card});
        }
    });

    engine.on("changeCurrent", async ({currentPlayer, dealer}) => {
        layout.drawPlayers(window, document, engine, myIndex, settings);
        await delay(30);
        await handlers['changeCurrent']({currentPlayer, dealer, myIndex});
    });

    engine.on("move", async ({playerIndex, card}) => {
        layout.drawPlayers(window, document, engine, myIndex, settings);
        await delay(30);
        if (playerIndex === myIndex || settings.mode === 'server') {
            await handlers['move']({playerIndex, card});
        }
    });

    engine.on("discard", async (p) => {
        layout.drawCenter(window, document, p, engine);
        await delay(30);
        await handlers['discard'](p);
    });

    engine.on("shuffle", async (deck) => {
        // TODO play shuffle animation
        layout.drawPlayers(window, document, engine, myIndex, settings);
        await delay(300);
        await handlers['shuffle'](deck);
    });

    engine.on("deal", () => {
        console.log("deal");
    });

    engine.on("gameover", async () => {
        await handlers['gameover']();
    });

    engine.on("clearPlayer", async (playerIndex) => {
        await handlers['clearPlayer'](playerIndex);
    });

    colorChooser(window, document, engine);

    engine.on("roundover", async () => {
        await delay(200);
        await engine.cleanAllHands();
        await delay(300);
        await engine.nextDealer();
        await engine.deal();
    });

    async function start() {
        await engine.chooseDealer();
        await delay(1000);
        if (settings.showAll) {
            settings.show = true;
        } else {
            settings.show = false;
        }
        await engine.deal();
    }

    async function onShuffle(deck) {
        await engine.setDeck(deck);
        console.log("onShuffle");
        layout.drawPlayers(window, document, engine, myIndex, settings);
    }

    function onDraw(playerIndex, card) {
        console.log("onDraw");
        return engine.onDraw(playerIndex, card);
    }

    function onMove(m, p) {
        console.log("onMove");
        return engine.onMove(m, p);
    }

    function onDiscard(card) {
        console.log("onDiscard");
        return engine.onDiscard(card);
    }

    async function onChangeCurrent({currentPlayer, dealer, myIndex}) {
        if (engine.getCurrentPlayer() !== myIndex && settings.mode == 'server') {
            console.log("Wrong player", engine.getCurrentPlayer(), myIndex);
            return;
        }
        engine.setCurrent(currentPlayer, dealer);
        layout.drawPlayers(window, document, engine, myIndex, settings);
    }

    async function onClearHand(playerIndex) {
        await engine.cleanHand(playerIndex);
        layout.drawPlayers(window, document, engine, myIndex, settings);
    }

    return {
       start,
       onShuffle,
       onDraw,
       onDiscard,
       onChangeCurrent,
       onClearHand,
       onMove
    }
}
