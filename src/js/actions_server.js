"use strict";

function init(game, clients) {
    return {
        'move': async ({playerIndex, card}) => {
          console.log("try to move " + JSON.stringify({playerIndex, card}));
          return game.onChange(playerIndex, card);
        },
        'username': async (n, id) => {
          console.log("User joined", n, id);
          const client = clients[id];
          client.username = n;
          return game.join(client.index, n, id);
        },
        'start': false,
        'shuffle': false,
//        'draw': async ({playerIndex, card}) => {
//                      console.log("draw", {playerIndex, card});
//                      return game.onDraw(playerIndex, card);
//                },
        'draw': false,
        'discard': false,
        'changeCurrent': false,
        'clearPlayer': false
    }
}

export default init;
