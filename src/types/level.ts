/**
 *
 * Types module
 *
 * @packageDocumentation
 *
 */

import {ObjectValue} from './utils';

export const LOG_LEVEL = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  NONE: 'NONE',
} as const;

export type LogLevel = ObjectValue<typeof LOG_LEVEL>;
