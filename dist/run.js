"use strict";
/**
 *
 * Run module
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
index_1.default.trace(`trace`);
index_1.default.debug(`debug`);
index_1.default.info(`info`);
index_1.default.warn(`warn`);
index_1.default.error(`error`);
//# sourceMappingURL=run.js.map