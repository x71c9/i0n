/**
 *
 * Create module
 *
 * @packageDocumentation
 *
 */

import * as types from '../types/index.js';
import {ION} from '../class/index.js';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type CreateParams = DeepPartial<types.IONParams>;

export function create(params?: CreateParams) {
  return new ION(params);
}
