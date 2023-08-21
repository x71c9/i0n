# i0n

A typescript library for console logging.

## How to use it

```typescript
import ion from 'i0n';
ion.trace(`trace`);
ion.debug(`debug`);
ion.info(`info`);
ion.warn(`warn`);
ion.error(`error`);
ion.success(`success`);
ion.fail(`fail`);
```

## Configuration

```typescript
import ion from 'i0n';
ion.config.set({
  log_level: ion.LOG_LEVEL.WARN,
  color: false,
  prefix: '[myapp] ',
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
