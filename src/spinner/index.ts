/**
 *
 * Spinner module
 *
 * @packageDocumentation
 *
 */

import ora from 'ora';

const ora_spinner = ora({
  color: 'white',
});

export const spinner = {
  text: _set_text,
  start: _start,
  stop: _stop,
};

function _set_text(text: string) {
  let processed_text = text;
  const regex_new_line = new RegExp(
    `\n|\r\n|0x0D0A|0x0A|0x0D|0x0d0a|0x0a|0x0d|¶`,
    'g'
  );
  processed_text = processed_text.replace(regex_new_line, ' ');
  processed_text =
    processed_text.length > process.stdout.columns - 8
      ? processed_text.substring(0, Math.floor(process.stdout.columns - 8)) +
        '...'
      : processed_text;
  ora_spinner.text = processed_text;
}

function _start() {
  ora_spinner.start();
}

function _stop() {
  ora_spinner.stop();
}
