/**
 *
 * Types index module
 *
 * @packageDocumentation
 *
 */
import { ObjectValue } from './utils';
export type Config = {};
export type IonParams = {
    log_level: LogLevel;
    prefix: string;
    prefix_method: boolean;
    prefix_method_length: number;
    prefix_method_flat: boolean;
    prefix_method_string: string;
    color: boolean;
    flat: boolean;
    flat_color: Color;
    time: string;
    force_spin: boolean;
    spinner: Spinner;
} & {
    [k in Method]: MethodConfig;
};
export type MethodConfig = {
    method: ConsoleMethod;
    color: string;
    prefix: string;
    inject: InjectMethod;
};
export type InjectMethod = (...data: any) => Promise<void>;
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
export type Spinner = {
    text: (text: string) => void;
    start: () => void;
    stop: () => void;
    is_spinning: () => boolean;
};
