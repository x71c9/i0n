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
    // TODO: Imporve it
    if (config[k] && typeof config[k] === 'object') {
      for (const [subkey, subvalue] of Object.entries(config[k])) {
        const params_k = params[k];
        if (params_k && !params_k.hasOwnProperty(subkey)) {
          (params_k as any)[subkey] = subvalue as any;
        }
      }
    }
  }
  Object.assign(config, params);
}
