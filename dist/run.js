/**
 *
 * Run module
 *
 */
import ora from 'ora';
import ion from './index.js';
ion.config.set({
// log_level: ion.LOG_LEVEL.TRACE,
// color: true,
// prefix: 'x71c9 ',
// trace: {
//   method: 'log',
//   color: '#999',
// },
// debug: {
//   method: 'debug',
//   color: '#CDCDCD',
// },
// info: {
//   method: 'info',
//   color: '#99F',
// },
// warn: {
//   method: 'warn',
//   color: '#FF7700',
// },
// error: {
//   method: 'error',
//   color: '#DD1122',
// },
// success: {
//   method: 'log',
//   color: '#55DD88',
// },
// fail: {
//   method: 'log',
//   color: '#770000',
// },
});
ion.trace(`trace`);
ion.debug(`debug`);
ion.info(`info`);
ion.warn(`warn`);
ion.error(`error`);
ion.success(`success`);
ion.fail(`fail`);
const spinner = ora('Loading').start();
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading more';
}, 1000);
//# sourceMappingURL=run.js.map