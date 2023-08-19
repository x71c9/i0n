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
index_1.default.config.set({
// log_level: ion.LOG_LEVEL.TRACE,
// color: true,
// prefix: 'x71c9 ',
// trace: {
//   method: 'log',
//   color: '#999',
// },
// debug: {
//   method: 'debug',
//   color: '#CDCDCD',
// },
// info: {
//   method: 'info',
//   color: '#99F',
// },
// warn: {
//   method: 'warn',
//   color: '#FF7700',
// },
// error: {
//   method: 'error',
//   color: '#DD1122',
// },
// success: {
//   method: 'log',
//   color: '#55DD88',
// },
// fail: {
//   method: 'log',
//   color: '#770000',
// },
});
index_1.default.trace(`trace`);
index_1.default.debug(`debug`);
index_1.default.info(`info`);
index_1.default.warn(`warn`);
index_1.default.error(`error`);
index_1.default.success(`success`);
index_1.default.fail(`fail`);
//# sourceMappingURL=run.js.map