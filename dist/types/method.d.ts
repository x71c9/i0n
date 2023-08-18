/**
 *
 * Method types module
 *
 * @packageDocumentation
 *
 */
import { ObjectValue } from './utils';
export declare const METHOD: {
    readonly LOG: "LOG";
    readonly INFO: "INFO";
    readonly DEBUG: "DEBUG";
    readonly TRACE: "TRACE";
    readonly WARN: "WARN";
    readonly ERROR: "ERROR";
    readonly SUCCESS: "SUCCESS";
};
export type Method = ObjectValue<typeof METHOD>;
export declare const CONSOLE_METHOD: {
    readonly LOG: "LOG";
    readonly INFO: "INFO";
    readonly DEBUG: "DEBUG";
    readonly TRACE: "TRACE";
    readonly WARN: "WARN";
    readonly ERROR: "ERROR";
};
export type ConsoleMethod = ObjectValue<typeof CONSOLE_METHOD>;
