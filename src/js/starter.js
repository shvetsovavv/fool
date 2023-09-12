"use strict";

import settings from "./settings.js";
import gameFunction from "./game.js";
import {parseSettings, assert} from "./helper.js";

export default function starter(window, document) {
    parseSettings(window, document, settings);

    if (settings.mode === 'net') {
        import("./mode/net.js").then(netMode => {
            netMode.default(window, document, settings, gameFunction);
        });
    } else if (settings.mode === 'server') {
        import("./mode/server.js").then(serverMode => {
            serverMode.default(window, document, settings, gameFunction);
        });
    } else if (settings.mode === 'ai') {
        import("./mode/ai.js").then(ai => {
            ai.default(window, document, settings, gameFunction);
        });
    } else {
        assert(false, "Unsupported mode");
    }
}