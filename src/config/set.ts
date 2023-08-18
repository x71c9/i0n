/**
 *
 * Config set module
 *
 * @packageDocumentation
 *
 */

import {Config, config} from './config';

type ConfigParams = {
  [k in keyof Config]: Config[k];
};

export function set(params: Partial<ConfigParams>) {
  if (
    !params ||
    typeof params !== 'object' ||
    Object.entries(params).length === 0
  ) {
    return;
  }
  for (const key in params) {
    const k = key as keyof typeof params;
    if (!config.hasOwnProperty(k)) {
      delete params[k];
    }
    if (typeof params[k] !== typeof config[k]) {
      delete params[k];
    }
  }
  Object.assign(config, params);
}
