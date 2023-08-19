/**
 *
 * Config config module
 *
 * @packageDocumentation
 *
 */

import * as types from '../types/index';

export const config: types.Config = {
  prefix: '',
  log_level: types.LOG_LEVEL.TRACE,
  color: true,
  trace: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.DIM,
  },
  debug: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.MAGENTA,
  },
  info: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.CYAN,
  },
  warn: {
    method: types.CONSOLE_METHOD.warn,
    color: types.COLOR.YELLOW,
  },
  error: {
    method: types.CONSOLE_METHOD.error,
    color: types.COLOR.RED,
  },
  success: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.GREEN,
  },
  fail: {
    method: types.CONSOLE_METHOD.log,
    color: types.COLOR.RED,
  },
};
