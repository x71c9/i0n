/**
 *
 * Run module
 *
 */

import i0n from './index';
export const ion = i0n.create({
  // flat: true,
  // flat_color: i0n.COLOR.DIM,
  // color: true,
  // time: '',
  // prefix_method: false,
  // prefix_method_flat: true,
  // prefix_method_string: `▒ `
  // prefix_method_length: 7,
});

const data = {
  a: true,
  b: 2,
  c: 'hello',
  data: {
    attr: 'y',
    fake: new Date(),
  },
};
// console.log(data);
ion.info(data);
ion.trace(`trace`);
ion.debug(`debug`);
ion.info(`info`);
ion.warn(`warn`);
ion.error(`error`);
ion.success(`success`);
ion.fail(`fail`);

let text = `Loading`;
for (let i = 0; i < 20; i++) {
  text += ` ` + text;
}
ion.spinner.text(text);
ion.spinner.start();

setTimeout(function () {
  ion.warn('watch out');
}, 2000);

setTimeout(function () {
  ion.spinner.stop();
  ion.success('it is a success');
}, 6000);
