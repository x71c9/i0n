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
exports.ion = void 0;
const index_js_1 = __importDefault(require("./index.js"));
exports.ion = index_js_1.default.create({});
exports.ion.trace(`trace`);
exports.ion.debug(`debug`);
exports.ion.info(`info`);
exports.ion.warn(`warn`);
exports.ion.error(`error`);
exports.ion.success(`success`);
exports.ion.fail(`fail`);
let text = `Loading`;
for (let i = 0; i < 20; i++) {
    text += ` ` + text;
}
exports.ion.spinner.text(text);
exports.ion.spinner.start();
setTimeout(function () {
    exports.ion.warn('watch out');
}, 2000);
setTimeout(function () {
    exports.ion.spinner.stop();
    exports.ion.success('it is a success');
}, 6000);
//# sourceMappingURL=run.js.map