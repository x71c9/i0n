/**
 *
 * Types module
 *
 * @packageDocumentation
 *
 */
export declare const LOG_LEVEL: {
    readonly TRACE: "TRACE";
    readonly DEBUG: "DEBUG";
    readonly INFO: "INFO";
    readonly WARN: "WARN";
    readonly ERROR: "ERROR";
    readonly NONE: "NONE";
};
export type LogLevel = ObjectValue<typeof LOG_LEVEL>;
export declare const COLOR: {
    readonly DIM: "DIM";
    readonly MAGENTA: "MAGENTA";
    readonly CYAN: "CYAN";
    readonly YELLOW: "YELLOW";
    readonly RED: "RED";
    readonly BLACK: "BLACK";
    readonly GREEN: "GREEN";
};
export type Color = ObjectValue<typeof COLOR>;
type ObjectValue<T> = T[keyof T];
export {};
