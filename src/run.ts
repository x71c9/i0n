/**
 *
 * Run module
 *
 */

import ion from './index';

ion.config.set({
  log_level: ion.LOG_LEVEL.TRACE,
  // prefix: 'x71c9 ',
  // methods: {
  //   SUCCESS: 'DEBUG',
  //   INFO: 'TRACE'
  // }
});

ion.trace(`trace`);
ion.debug(`debug`);
ion.info(`info`);
ion.warn(`warn`);
ion.error(`error`);
ion.success(`success`);
