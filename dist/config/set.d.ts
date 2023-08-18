/**
 *
 * Config set module
 *
 * @packageDocumentation
 *
 */
import { Config } from './config';
type ConfigParams = {
    [k in keyof Config]: Config[k];
};
export declare function set(params: Partial<ConfigParams>): void;
export {};
