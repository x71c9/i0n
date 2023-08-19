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
exports.fail = exports.success = exports.error = exports.warn = exports.info = exports.debug = exports.trace = void 0;
const types = __importStar(require("../types"));
const config_1 = require("../config/config");
function trace(...data) {
    _print_full_objects(types.METHOD.trace, data);
}
exports.trace = trace;
function debug(...data) {
    _print_full_objects(types.METHOD.debug, data);
}
exports.debug = debug;
function info(...data) {
    _print_full_objects(types.METHOD.info, data);
}
exports.info = info;
function warn(...data) {
    _print_full_objects(types.METHOD.warn, data);
}
exports.warn = warn;
function error(...data) {
    _print_full_objects(types.METHOD.error, data);
}
exports.error = error;
function success(...data) {
    _print_full_objects(types.METHOD.success, data);
}
exports.success = success;
function fail(...data) {
    _print_full_objects(types.METHOD.fail, data);
}
exports.fail = fail;
function _print_full_objects(method, data) {
    let full_log = [];
    for (const arg of data) {
        full_log.push(_process_data(arg));
    }
    _print(method, full_log.join(' '));
}
function _process_data(data) {
    if (typeof data === 'object' && data !== null) {
        return JSON.stringify(data, null, 2);
    }
    return data;
}
function _print(method, data) {
    const with_prefix = `${config_1.config.prefix}${data}`;
    const final_data = _paint(method, with_prefix);
    return _print_primitive(method, final_data);
}
function _paint(method, str) {
    if (_env_no_color_is_true() || config_1.config.color === false) {
        return str;
    }
    const style = _get_style_from_method(method);
    const styled_log = style + str + _terminal_styles.reset;
    return styled_log;
}
function _print_primitive(method, data) {
    switch (method) {
        case types.METHOD.trace: {
            if (!_is_traceble(config_1.config.log_level)) {
                break;
            }
            _use_console_method(types.METHOD.trace, data);
            break;
        }
        case types.METHOD.debug: {
            if (!_is_debugable(config_1.config.log_level)) {
                break;
            }
            _use_console_method(types.METHOD.debug, data);
            break;
        }
        case types.METHOD.info: {
            if (!_is_infoble(config_1.config.log_level)) {
                break;
            }
            _use_console_method(types.METHOD.info, data);
            break;
        }
        case types.METHOD.warn: {
            if (!_is_warnable(config_1.config.log_level)) {
                break;
            }
            _use_console_method(types.METHOD.warn, data);
            break;
        }
        case types.METHOD.error: {
            if (!_is_errable(config_1.config.log_level)) {
                break;
            }
            _use_console_method(types.METHOD.error, data);
            break;
        }
        case types.METHOD.success: {
            if (!_is_errable(config_1.config.log_level)) {
                break;
            }
            _use_console_method(types.METHOD.success, data);
            break;
        }
        case types.METHOD.fail: {
            if (!_is_errable(config_1.config.log_level)) {
                break;
            }
            _use_console_method(types.METHOD.fail, data);
            break;
        }
    }
}
function _use_console_method(method, data) {
    const console_method = config_1.config[method].method;
    switch (console_method) {
        case types.CONSOLE_METHOD.trace: {
            console.trace(data);
            break;
        }
        case types.CONSOLE_METHOD.debug: {
            console.debug(data);
            break;
        }
        case types.CONSOLE_METHOD.log: {
            console.log(data);
            break;
        }
        case types.CONSOLE_METHOD.info: {
            console.info(data);
            break;
        }
        case types.CONSOLE_METHOD.warn: {
            console.warn(data);
            break;
        }
        case types.CONSOLE_METHOD.error: {
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
function _get_style_from_method(method) {
    const color = config_1.config[method].color;
    if (_is_base_color(color)) {
        return _get_style_from_color(color);
    }
    const custom_style = _get_style_from_hexadecimal_color(color);
    if (!custom_style) {
        return _style.DEFAULT;
    }
    return custom_style;
}
function _is_base_color(color) {
    for (const [_key, value] of Object.entries(types.COLOR)) {
        if (value === color) {
            return true;
        }
    }
    return false;
}
function _get_style_from_hexadecimal_color(color) {
    const rgb = _hex_to_rgb(color);
    const style = `\x1b[38;2;${rgb.r};${rgb.g};${rgb.b}m`;
    return style;
}
function _hex_to_rgb(hex) {
    if (hex[0] !== '#') {
        throw new Error(`Hexadecimal color should start with #`);
    }
    if (!_is_valid_hex(hex)) {
        throw new Error(`Invalid hexadecimal value`);
    }
    const processed_hex = _short_hex_to_full_hex(hex);
    const bigint = parseInt(processed_hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}
function _is_valid_hex(hex) {
    if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex)) {
        return false;
    }
    const numberic_value = parseInt(hex.slice(1), 16);
    if (isNaN(numberic_value)) {
        return false;
    }
    return true;
}
function _short_hex_to_full_hex(hex) {
    if (!/^#?([0-9A-Fa-f]{3})$/.test(hex)) {
        return hex;
    }
    const r = hex[1];
    const g = hex[2];
    const b = hex[3];
    const full_hex = `#${r}${r}${g}${g}${b}${b}`;
    return full_hex;
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
    DEFAULT: _terminal_styles.fgDefault,
};
//# sourceMappingURL=index.js.map