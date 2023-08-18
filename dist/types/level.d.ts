/**
 *
 * Types module
 *
 * @packageDocumentation
 *
 */
import { ObjectValue } from './utils';
export declare const LOG_LEVEL: {
    readonly TRACE: "TRACE";
    readonly DEBUG: "DEBUG";
    readonly INFO: "INFO";
    readonly WARN: "WARN";
    readonly ERROR: "ERROR";
    readonly NONE: "NONE";
};
export type LogLevel = ObjectValue<typeof LOG_LEVEL>;
