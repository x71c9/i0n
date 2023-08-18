/**
 *
 * Config config module
 *
 * @packageDocumentation
 *
 */

import * as types from '../types/index';
import {Method} from '../types/method';
import {CONSOLE_METHOD, ConsoleMethod} from '../types/method';

type Methods = {
  [k in Method]?: ConsoleMethod;
};

export type Config = {
  log_level: types.LogLevel;
  prefix: string;
  methods: Methods;
};

export const config: Config = {
  prefix: '',
  log_level: types.LOG_LEVEL.TRACE,
  methods: {
    TRACE: CONSOLE_METHOD.LOG,
    DEBUG: CONSOLE_METHOD.LOG,
    INFO: CONSOLE_METHOD.LOG,
    WARN: CONSOLE_METHOD.WARN,
    ERROR: CONSOLE_METHOD.ERROR,
    SUCCESS: CONSOLE_METHOD.LOG,
  },
};
