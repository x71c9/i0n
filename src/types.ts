/**
 *
 * Types module
 *
 * @packageDocumentation
 *
 */

export const LOG_LEVEL = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  NONE: 'NONE',
} as const;

export type LogLevel = ObjectValue<typeof LOG_LEVEL>;

export const COLOR = {
  DIM: 'DIM',
  MAGENTA: 'MAGENTA',
  CYAN: 'CYAN',
  YELLOW: 'YELLOW',
  RED: 'RED',
  BLACK: 'BLACK',
  GREEN: 'GREEN',
} as const;

export type Color = ObjectValue<typeof COLOR>;

// Utils

type ObjectValue<T> = T[keyof T];
