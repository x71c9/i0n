/**
 *
 * Color type module
 *
 * @packageDocumentation
 *
 */

import {ObjectValue} from './utils';

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
