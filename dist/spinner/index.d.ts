/**
 *
 * Spinner module
 *
 * @packageDocumentation
 *
 */
export declare const spinner: {
    text: typeof _set_text;
    start: typeof _start;
    stop: typeof _stop;
    is_spinning: typeof _is_spinning;
};
declare function _is_spinning(): boolean;
declare function _set_text(text: string): void;
declare function _start(): void;
declare function _stop(): void;
export {};
