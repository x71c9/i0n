/**
 *
 * Config config module
 *
 * @packageDocumentation
 *
 */

import * as types from '../types/index';

export type Config = {
  log_level: types.LogLevel;
  prefix: string;
};

export const config: Config = {
  prefix: '',
  log_level: types.LOG_LEVEL.TRACE,
};
