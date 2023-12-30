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
type IonConstructorParams = DeepPartial<types.IonParams>;
export declare class Ion {
    params: types.IonParams;
    constructor(params?: IonConstructorParams);
    trace(...data: any): Promise<void>;
    debug(...data: any): Promise<void>;
    info(...data: any): Promise<void>;
    warn(...data: any): Promise<void>;
    error(...data: any): Promise<void>;
    success(...data: any): Promise<void>;
    fail(...data: any): Promise<void>;
    spinner: types.Spinner;
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
export {};
