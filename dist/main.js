"use strict";
/**
 *
 * Main module
 *
 * @packageDocumentation
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.error = exports.warn = exports.info = exports.debug = exports.trace = void 0;
const types = __importStar(require("./types"));
const config = __importStar(require("./config"));
function trace(...data) {
    _print_full_objects(types.LOG_LEVEL.TRACE, types.COLOR.DIM, data);
}
exports.trace = trace;
function debug(...data) {
    _print_full_objects(types.LOG_LEVEL.DEBUG, types.COLOR.MAGENTA, data);
}
exports.debug = debug;
function info(...data) {
    _print_full_objects(types.LOG_LEVEL.INFO, types.COLOR.CYAN, data);
}
exports.info = info;
function warn(...data) {
    _print_full_objects(types.LOG_LEVEL.WARN, types.COLOR.YELLOW, data);
}
exports.warn = warn;
function error(...data) {
    _print_full_objects(types.LOG_LEVEL.ERROR, types.COLOR.RED, data);
}
exports.error = error;
function success(...data) {
    _print_full_objects(types.LOG_LEVEL.ERROR, types.COLOR.GREEN, data);
}
exports.success = success;
function _print_full_objects(level, color, data) {
    let full_log = [];
    for (const arg of data) {
        full_log.push(_process_data(arg));
    }
    _print(level, color, full_log.join(' '));
}
function _process_data(data) {
    if (typeof data === 'object' && data !== null) {
        return JSON.stringify(data, null, 2);
    }
    return data;
}
function _print(level, color, data) {
    const with_prefix = `${config.prefix}${data}`;
    const final_data = _paint(color, with_prefix);
    return _print_primitive(level, final_data);
}
function _paint(color, str) {
    if (_env_no_color_is_true()) {
        return str;
    }
    let style = _get_style_from_color(color);
    const styled_log = style + str + _terminal_styles.reset;
    return styled_log;
}
function _print_primitive(level, data) {
    switch (level) {
        case types.LOG_LEVEL.TRACE: {
            if (!_is_traceble(config.log_level)) {
                break;
            }
            // console.trace(data);
            console.log(data);
            break;
        }
        case types.LOG_LEVEL.DEBUG: {
            if (!_is_debugable(config.log_level)) {
                break;
            }
            // console.debug(data);
            console.log(data);
            break;
        }
        case types.LOG_LEVEL.INFO: {
            if (!_is_infoble(config.log_level)) {
                break;
            }
            console.log(data);
            break;
        }
        case types.LOG_LEVEL.WARN: {
            if (!_is_warnable(config.log_level)) {
                break;
            }
            console.warn(data);
            break;
        }
        case types.LOG_LEVEL.ERROR: {
            if (!_is_errable(config.log_level)) {
                break;
            }
            console.error(data);
            break;
        }
    }
}
function _is_traceble(log_level) {
    if (log_level === types.LOG_LEVEL.TRACE) {
        return true;
    }
    return false;
}
function _is_debugable(log_level) {
    if (_is_traceble(log_level) || log_level === types.LOG_LEVEL.DEBUG) {
        return true;
    }
    return false;
}
function _is_infoble(log_level) {
    if (_is_debugable(log_level) || log_level === types.LOG_LEVEL.INFO) {
        return true;
    }
    return false;
}
function _is_warnable(log_level) {
    if (_is_infoble(log_level) || log_level === types.LOG_LEVEL.WARN) {
        return true;
    }
    return false;
}
function _is_errable(log_level) {
    if (_is_warnable(log_level) || log_level === types.LOG_LEVEL.ERROR) {
        return true;
    }
    return false;
}
function _env_no_color_is_true() {
    const env_no_colors = process.env.NO_COLOR == 'true' ? true : false;
    return env_no_colors;
}
function _get_style_from_color(color) {
    return _style[color];
}
const _terminal_styles = {
    'reset': '\x1b[0m',
    'bright': '\x1b[1m',
    'dim': '\x1b[2m',
    'underscore': '\x1b[4m',
    'blink': '\x1b[5m',
    'reverse': '\x1b[7m',
    'hidden': '\x1b[8m',
    'fgBlack': '\x1b[30m',
    'fgRed': '\x1b[31m',
    'fgGreen': '\x1b[32m',
    'fgYellow': '\x1b[33m',
    'fgBlue': '\x1b[34m',
    'fgMagenta': '\x1b[35m',
    'fgCyan': '\x1b[36m',
    'fgWhite': '\x1b[37m',
    'fgDefault': '\x1b[39m',
    'fgLightGrey': '\x1b[90m',
    'fgLightRed': '\x1b[91m',
    'fgLightGreen': '\x1b[92m',
    'fglightYellow': '\x1b[93m',
    'fgLightBlue': '\x1b[94m',
    'fgLightMagenta': '\x1b[95m',
    'fgLightCyan': '\x1b[96m',
    'fgLightWhite': '\x1b[97m',
    'bgBlack': '\x1b[40m',
    'bgRed': '\x1b[41m',
    'bgGreen': '\x1b[42m',
    'bgYellow': '\x1b[43m',
    'bgBlue': '\x1b[44m',
    'bgMagenta': '\x1b[45m',
    'bgCyan': '\x1b[46m',
    'bgWhite': '\x1b[47m',
    'bgDefault': '\x1b[49m',
    'Light Gray': '\x1b[100m',
    'Light Red': '\x1b[101m',
    'Light Green': '\x1b[102m',
    'Light Yellow': '\x1b[103m',
    'Light Blue': '\x1b[104m',
    'Light Magenta': '\x1b[105m',
    'Light Cyan': '\x1b[106m',
    'Light White': '\x1b[107m',
};
const _style = {
    DIM: _terminal_styles.dim,
    MAGENTA: _terminal_styles.fgMagenta,
    CYAN: _terminal_styles.fgCyan,
    YELLOW: _terminal_styles.fgYellow,
    RED: _terminal_styles.fgRed,
    BLACK: _terminal_styles.fgBlack,
    GREEN: _terminal_styles.fgGreen,
};
//# sourceMappingURL=main.js.map