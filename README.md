# i0n

A typescript library for console logging.

## Implementation

A common implementation is the following:

```typescript
// src/log/index.ts
import ion from 'i0n';

export const log = ion.create({
  log_level: ion.LOG_LEVEL.NONE,
});
```

```typescript
// src/business.ts
import {log} from './log/index.js';

log.trace(`trace`);
log.debug(`debug`);
log.info(`info`);
log.warn(`warn`);
log.error(`error`);
log.success(`success`);
log.fail(`fail`);
```

## Full configuration

```typescript
import ion from 'i0n';

ion.create({
  log_level: ion.LOG_LEVEL.WARN,
  color: false,
  prefix: '[myapp] ',
  force_spin: false,
  trace: {
    method: 'trace',
    color: '#999',
  },
  debug: {
    method: 'debug',
    color: '#CDCDCD',
  },
  info: {
    method: 'info',
    color: '#99F',
  },
  warn: {
    method: 'warn',
    color: '#FF7700',
  },
  error: {
    method: 'error',
    color: '#DD1122',
  },
  success: {
    method: 'log',
    color: '#55DD88',
  },
  fail: {
    method: 'log',
    color: '#770000',
  },
});
```

## Spinner

```typescript
import ion from 'i0n';

ion.spinner.text('Loading...');
ion.spinner.start();

setTimeout(() => {
  ion.spinner.stop();
}, 4000);
```

## Unix philosophy

This repo try to follow the
[Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy).

## Name

`i0n` stands for ion, like in [Ion](https://en.wikipedia.org/wiki/Ion).

## Other related repositories

[`3xp`](https://www.npmjs.com/package/3xp) A typescript library for validating objects.

[`r4y`](https://www.npmjs.com/package/r4y) A typescript library for managing child processes.

[`w3i`](https://www.npmjs.com/package/w3i) A typescript library for handling configurations.
