/**
 *
 * Method types module
 *
 * @packageDocumentation
 *
 */

import {ObjectValue} from './utils';

export const METHOD = {
  LOG: 'LOG',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
  TRACE: 'TRACE',
  WARN: 'WARN',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

export type Method = ObjectValue<typeof METHOD>;

export const CONSOLE_METHOD = {
  LOG: 'LOG',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
  TRACE: 'TRACE',
  WARN: 'WARN',
  ERROR: 'ERROR',
} as const;

export type ConsoleMethod = ObjectValue<typeof CONSOLE_METHOD>;
