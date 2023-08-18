/**
 *
 * Main module
 *
 * @packageDocumentation
 *
 */

import * as types from '../types';
import {COLOR, Color} from '../types/color';
import {config} from '../config/config';

export function trace(...data: any): void {
  _print_full_objects(types.LOG_LEVEL.TRACE, COLOR.DIM, data);
}
export function debug(...data: any): void {
  _print_full_objects(types.LOG_LEVEL.DEBUG, COLOR.MAGENTA, data);
}
export function info(...data: any): void {
  _print_full_objects(types.LOG_LEVEL.INFO, COLOR.CYAN, data);
}
export function warn(...data: any): void {
  _print_full_objects(types.LOG_LEVEL.WARN, COLOR.YELLOW, data);
}
export function error(...data: any): void {
  _print_full_objects(types.LOG_LEVEL.ERROR, COLOR.RED, data);
}
export function success(...data: any): void {
  _print_full_objects(types.LOG_LEVEL.ERROR, COLOR.GREEN, data);
}
function _print_full_objects(
  level: types.LogLevel,
  color: Color,
  data: any
): void {
  let full_log: string[] = [];
  for (const arg of data) {
    full_log.push(_process_data(arg));
  }
  _print(level, color, full_log.join(' '));
}

function _process_data(data: any): string {
  if (typeof data === 'object' && data !== null) {
    return JSON.stringify(data, null, 2);
  }
  return data;
}

function _print(level: types.LogLevel, color: Color, data: any): void {
  const with_prefix = `${config.prefix}${data}`;
  const final_data = _paint(color, with_prefix);
  return _print_primitive(level, final_data);
}

function _paint(color: Color, str: string): string {
  if (_env_no_color_is_true()) {
    return str;
  }
  let style = _get_style_from_color(color);
  const styled_log = style + str + _terminal_styles.reset;
  return styled_log;
}

function _print_primitive(level: types.LogLevel, data: any): void {
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

function _is_traceble(log_level: types.LogLevel): boolean {
  if (log_level === types.LOG_LEVEL.TRACE) {
    return true;
  }
  return false;
}

function _is_debugable(log_level: types.LogLevel): boolean {
  if (_is_traceble(log_level) || log_level === types.LOG_LEVEL.DEBUG) {
    return true;
  }
  return false;
}

function _is_infoble(log_level: types.LogLevel): boolean {
  if (_is_debugable(log_level) || log_level === types.LOG_LEVEL.INFO) {
    return true;
  }
  return false;
}

function _is_warnable(log_level: types.LogLevel): boolean {
  if (_is_infoble(log_level) || log_level === types.LOG_LEVEL.WARN) {
    return true;
  }
  return false;
}

function _is_errable(log_level: types.LogLevel): boolean {
  if (_is_warnable(log_level) || log_level === types.LOG_LEVEL.ERROR) {
    return true;
  }
  return false;
}

function _env_no_color_is_true() {
  const env_no_colors = process.env.NO_COLOR == 'true' ? true : false;
  return env_no_colors;
}

function _get_style_from_color(color: Color): string {
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

type Style = {
  [k in Color]: string;
};

const _style: Style = {
  DIM: _terminal_styles.dim,
  MAGENTA: _terminal_styles.fgMagenta,
  CYAN: _terminal_styles.fgCyan,
  YELLOW: _terminal_styles.fgYellow,
  RED: _terminal_styles.fgRed,
  BLACK: _terminal_styles.fgBlack,
  GREEN: _terminal_styles.fgGreen,
};
