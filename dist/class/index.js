/**
 *
 * Class module
 *
 * @packageDocumentation
 *
 */
import ora from 'ora';
import * as types from '../types/index.js';
const ora_spinner = ora({
    color: 'white',
    interval: 48,
});
export class ION {
    constructor(params) {
        this.params = {
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
        this.spinner = {
            text: _set_text,
            start: this._start.bind(this),
            stop: _stop,
            is_spinning: _is_spinning,
        };
        if (!params ||
            typeof params !== 'object' ||
            Object.entries(params).length === 0) {
            return;
        }
        _merge_defaults(this.params, params);
    }
    async trace(...data) {
        this._print_full_objects(types.METHOD.trace, data);
        await this._run_inject(types.METHOD.trace, data);
    }
    async debug(...data) {
        this._print_full_objects(types.METHOD.debug, data);
        await this._run_inject(types.METHOD.debug, data);
    }
    async info(...data) {
        this._print_full_objects(types.METHOD.info, data);
        await this._run_inject(types.METHOD.info, data);
    }
    async warn(...data) {
        this._print_full_objects(types.METHOD.warn, data);
        await this._run_inject(types.METHOD.warn, data);
    }
    async error(...data) {
        this._print_full_objects(types.METHOD.error, data);
        await this._run_inject(types.METHOD.error, data);
    }
    async success(...data) {
        this._print_full_objects(types.METHOD.success, data);
        await this._run_inject(types.METHOD.success, data);
    }
    async fail(...data) {
        this._print_full_objects(types.METHOD.fail, data);
        await this._run_inject(types.METHOD.fail, data);
    }
    _start() {
        if (this._is_infoble() || this.params.force_spin === true) {
            ora_spinner.start();
        }
    }
    async _run_inject(method, data) {
        await this.params[method].inject(...data);
    }
    _print_full_objects(method, data) {
        let full_log = [];
        for (const arg of data) {
            full_log.push(this._process_data(arg));
        }
        this._print(method, full_log.join(' '));
    }
    _process_data(data) {
        if (typeof data === 'object' && data !== null) {
            return JSON.stringify(data, null, 2);
        }
        return data;
    }
    _print(method, data) {
        const method_prefix = this._get_prefix_from_method(method);
        const with_prefix = `${this.params.prefix}${method_prefix}${data}`;
        const final_data = this._paint(method, with_prefix);
        const was_spinning = this._stop_spinning();
        this._print_primitive(method, final_data);
        this._start_spinning(was_spinning);
    }
    _stop_spinning() {
        const was_spinning = this.spinner.is_spinning();
        if (was_spinning) {
            this.spinner.stop();
        }
        return was_spinning;
    }
    _start_spinning(was_spinning) {
        if (was_spinning) {
            this.spinner.start();
        }
    }
    _paint(method, str) {
        if (_env_no_color_is_true() || this.params.color === false) {
            return str;
        }
        const style = this._get_style_from_method(method);
        const styled_log = style + str + _terminal_styles.reset;
        return styled_log;
    }
    _print_primitive(method, data) {
        switch (method) {
            case types.METHOD.trace: {
                if (!this._is_traceble(this.params.log_level)) {
                    break;
                }
                this._use_console_method(types.METHOD.trace, data);
                break;
            }
            case types.METHOD.debug: {
                if (!this._is_debugable(this.params.log_level)) {
                    break;
                }
                this._use_console_method(types.METHOD.debug, data);
                break;
            }
            case types.METHOD.info: {
                if (!this._is_infoble(this.params.log_level)) {
                    break;
                }
                this._use_console_method(types.METHOD.info, data);
                break;
            }
            case types.METHOD.warn: {
                if (!this._is_warnable(this.params.log_level)) {
                    break;
                }
                this._use_console_method(types.METHOD.warn, data);
                break;
            }
            case types.METHOD.error: {
                if (!this._is_errable(this.params.log_level)) {
                    break;
                }
                this._use_console_method(types.METHOD.error, data);
                break;
            }
            case types.METHOD.success: {
                if (!this._is_infoble(this.params.log_level)) {
                    break;
                }
                this._use_console_method(types.METHOD.success, data);
                break;
            }
            case types.METHOD.fail: {
                if (!this._is_infoble(this.params.log_level)) {
                    break;
                }
                this._use_console_method(types.METHOD.fail, data);
                break;
            }
        }
    }
    _use_console_method(method, data) {
        const console_method = this.params[method].method;
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
    _get_style_from_method(method) {
        const color = this.params[method].color;
        if (_is_base_color(color)) {
            return _get_style_from_color(color);
        }
        const custom_style = _get_style_from_hexadecimal_color(color);
        if (!custom_style) {
            return _style.DEFAULT;
        }
        return custom_style;
    }
    _get_prefix_from_method(method) {
        const prefix = this.params[method].prefix;
        return prefix;
    }
    _is_traceble(log_level) {
        const level = log_level || this.params.log_level;
        if (level === types.LOG_LEVEL.TRACE) {
            return true;
        }
        return false;
    }
    _is_debugable(log_level) {
        const level = log_level || this.params.log_level;
        if (this._is_traceble(level) || level === types.LOG_LEVEL.DEBUG) {
            return true;
        }
        return false;
    }
    _is_infoble(log_level) {
        const level = log_level || this.params.log_level;
        if (this._is_debugable(level) || level === types.LOG_LEVEL.INFO) {
            return true;
        }
        return false;
    }
    _is_warnable(log_level) {
        const level = log_level || this.params.log_level;
        if (this._is_infoble(level) || level === types.LOG_LEVEL.WARN) {
            return true;
        }
        return false;
    }
    _is_errable(log_level) {
        const level = log_level || this.params.log_level;
        if (this._is_warnable(level) || level === types.LOG_LEVEL.ERROR) {
            return true;
        }
        return false;
    }
}
function _is_spinning() {
    return ora_spinner.isSpinning;
}
function _set_text(text) {
    let processed_text = text;
    const regex_new_line = new RegExp(`\n|\r\n|0x0D0A|0x0A|0x0D|0x0d0a|0x0a|0x0d|¶`, 'g');
    processed_text = processed_text.replace(regex_new_line, ' ');
    processed_text =
        processed_text.length > process.stdout.columns - 8
            ? processed_text.substring(0, Math.floor(process.stdout.columns - 8)) +
                '...'
            : processed_text;
    ora_spinner.text = processed_text;
}
function _stop() {
    ora_spinner.stop();
}
function _env_no_color_is_true() {
    const env_no_colors = process.env.NO_COLOR == 'true' ? true : false;
    return env_no_colors;
}
function _get_style_from_color(color) {
    return _style[color];
}
function _merge_defaults(defaults, partial) {
    for (const key in partial) {
        if (!partial.hasOwnProperty(key)) {
            delete partial[key];
        }
        if (typeof defaults[key] !== typeof partial[key]) {
            delete partial[key];
        }
        const pk = partial[key];
        if (pk && typeof pk === 'object' && pk !== null) {
            _merge_defaults(defaults[key], pk);
        }
        else {
            defaults[key] = partial[key];
        }
    }
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