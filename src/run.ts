/**
 *
 * Run module
 *
 */

import ion from './index';

ion.config.set({
  log_level: ion.LOG_LEVEL.ERROR,
  prefix: '[x71c9]',
});

ion.trace(`trace`);
ion.debug(`debug`);
ion.info(`info`);
ion.warn(`warn`);
ion.error(`error`);
ion.success(`success`);
