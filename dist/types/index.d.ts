/**
 *
 * Types index module
 *
 * @packageDocumentation
 *
 */
import { ObjectValue } from './utils.js';
export type MethodConfig = {
    method: ConsoleMethod;
    color: string;
    prefix: string;
};
export type Config = {
    log_level: LogLevel;
    prefix: string;
    color: boolean;
} & {
    [k in Method]: MethodConfig;
};
export declare const LOG_LEVEL: {
    readonly TRACE: "TRACE";
    readonly DEBUG: "DEBUG";
    readonly INFO: "INFO";
    readonly WARN: "WARN";
    readonly ERROR: "ERROR";
    readonly NONE: "NONE";
};
export type LogLevel = ObjectValue<typeof LOG_LEVEL>;
export declare const METHOD: {
    readonly trace: "trace";
    readonly debug: "debug";
    readonly info: "info";
    readonly warn: "warn";
    readonly error: "error";
    readonly success: "success";
    readonly fail: "fail";
};
export type Method = ObjectValue<typeof METHOD>;
export declare const CONSOLE_METHOD: {
    readonly log: "log";
    readonly info: "info";
    readonly debug: "debug";
    readonly trace: "trace";
    readonly warn: "warn";
    readonly error: "error";
};
export type ConsoleMethod = ObjectValue<typeof CONSOLE_METHOD>;
export declare const COLOR: {
    readonly DIM: "DIM";
    readonly MAGENTA: "MAGENTA";
    readonly CYAN: "CYAN";
    readonly YELLOW: "YELLOW";
    readonly RED: "RED";
    readonly BLACK: "BLACK";
    readonly GREEN: "GREEN";
    readonly DEFAULT: "DEFAULT";
};
export type Color = ObjectValue<typeof COLOR>;
