"use strict";
/**
 *
 * Config set module
 *
 * @packageDocumentation
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
const config_1 = require("./config");
function set(params) {
    if (!params ||
        typeof params !== 'object' ||
        Object.entries(params).length === 0) {
        return;
    }
    for (const key in params) {
        const k = key;
        if (!config_1.config.hasOwnProperty(k)) {
            delete params[k];
        }
        if (typeof params[k] !== typeof config_1.config[k]) {
            delete params[k];
        }
    }
    Object.assign(config_1.config, params);
}
exports.set = set;
//# sourceMappingURL=set.js.map