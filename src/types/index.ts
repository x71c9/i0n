/**
 *
 * Types index module
 *
 * @packageDocumentation
 *
 */

import {ObjectValue} from './utils.js';

export type MethodConfig = {
  method: ConsoleMethod;
  color: string;
  prefix: string;
};

export type Config = {
  log_level: LogLevel;
  prefix: string;
  color: boolean;
} & {
  [k in Method]: MethodConfig;
};

export const LOG_LEVEL = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  NONE: 'NONE',
} as const;

export type LogLevel = ObjectValue<typeof LOG_LEVEL>;

export const METHOD = {
  trace: 'trace',
  debug: 'debug',
  info: 'info',
  warn: 'warn',
  error: 'error',
  success: 'success',
  fail: 'fail',
} as const;

export type Method = ObjectValue<typeof METHOD>;

export const CONSOLE_METHOD = {
  log: 'log',
  info: 'info',
  debug: 'debug',
  trace: 'trace',
  warn: 'warn',
  error: 'error',
} as const;

export type ConsoleMethod = ObjectValue<typeof CONSOLE_METHOD>;

export const COLOR = {
  DIM: 'DIM',
  MAGENTA: 'MAGENTA',
  CYAN: 'CYAN',
  YELLOW: 'YELLOW',
  RED: 'RED',
  BLACK: 'BLACK',
  GREEN: 'GREEN',
  DEFAULT: 'DEFAULT',
} as const;

export type Color = ObjectValue<typeof COLOR>;
