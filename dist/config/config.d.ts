/**
 *
 * Config config module
 *
 * @packageDocumentation
 *
 */
import * as types from '../types/index';
export type Config = {
    log_level: types.LogLevel;
    prefix: string;
};
export declare const config: Config;
