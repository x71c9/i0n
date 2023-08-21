/**
 *
 * Config config module
 *
 * @packageDocumentation
 *
 */

import * as types from '../types/index.js';

export const config: types.Config = {
  prefix: '',
  log_level: types.LOG_LEVEL.TRACE,
  color: true,
  trace: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.DIM,
    prefix: '',
  },
  debug: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.MAGENTA,
    prefix: '',
  },
  info: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.CYAN,
    prefix: '',
  },
  warn: {
    method: types.CONSOLE_METHOD.warn,
    color: types.COLOR.YELLOW,
    prefix: '',
  },
  error: {
    method: types.CONSOLE_METHOD.error,
    color: types.COLOR.RED,
    prefix: '',
  },
  success: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.GREEN,
    prefix: '✔ ',
  },
  fail: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.RED,
    prefix: '✘ ',
  },
};
