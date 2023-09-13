/**
 *
 * Config config module
 *
 * @packageDocumentation
 *
 */
import * as types from '../types/index.js';
export const config = {
    prefix: '',
    log_level: types.LOG_LEVEL.TRACE,
    color: true,
    force_spin: false,
    trace: {
        method: types.CONSOLE_METHOD.log,
        color: types.COLOR.DIM,
        prefix: '',
        inject: async (..._) => { },
    },
    debug: {
        method: types.CONSOLE_METHOD.log,
        color: types.COLOR.MAGENTA,
        prefix: '',
        inject: async (..._) => { },
    },
    info: {
        method: types.CONSOLE_METHOD.log,
        color: types.COLOR.CYAN,
        prefix: '',
        inject: async (..._) => { },
    },
    warn: {
        method: types.CONSOLE_METHOD.warn,
        color: types.COLOR.YELLOW,
        prefix: '',
        inject: async (..._) => { },
    },
    error: {
        method: types.CONSOLE_METHOD.error,
        color: types.COLOR.RED,
        prefix: '',
        inject: async (..._) => { },
    },
    success: {
        method: types.CONSOLE_METHOD.log,
        color: types.COLOR.GREEN,
        prefix: '✔ ',
        inject: async (..._) => { },
    },
    fail: {
        method: types.CONSOLE_METHOD.log,
        color: types.COLOR.RED,
        prefix: '✘ ',
        inject: async (..._) => { },
    },
};
//# sourceMappingURL=config.js.map