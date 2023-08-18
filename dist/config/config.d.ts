/**
 *
 * Config config module
 *
 * @packageDocumentation
 *
 */
import * as types from '../types/index';
import { Method } from '../types/method';
import { ConsoleMethod } from '../types/method';
type Methods = {
    [k in Method]?: ConsoleMethod;
};
export type Config = {
    log_level: types.LogLevel;
    prefix: string;
    methods: Methods;
};
export declare const config: Config;
export {};
