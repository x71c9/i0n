/**
 *
 * Class module
 *
 * @packageDocumentation
 *
 */
import * as types from '../types/index.js';
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
type IONConstructorParams = DeepPartial<types.IONParams>;
export declare class ION {
    params: types.IONParams;
    constructor(params?: IONConstructorParams);
    trace(...data: any): Promise<void>;
    debug(...data: any): Promise<void>;
    info(...data: any): Promise<void>;
    warn(...data: any): Promise<void>;
    error(...data: any): Promise<void>;
    success(...data: any): Promise<void>;
    fail(...data: any): Promise<void>;
    spinner: {
        text: typeof _set_text;
        start: () => void;
        stop: typeof _stop;
        is_spinning: typeof _is_spinning;
    };
    private _start;
    private _run_inject;
    private _print_full_objects;
    private _process_data;
    private _print;
    private _stop_spinning;
    private _start_spinning;
    private _paint;
    private _print_primitive;
    private _use_console_method;
    private _get_style_from_method;
    private _get_prefix_from_method;
    private _is_traceble;
    private _is_debugable;
    private _is_infoble;
    private _is_warnable;
    private _is_errable;
}
declare function _is_spinning(): boolean;
declare function _set_text(text: string): void;
declare function _stop(): void;
export {};
