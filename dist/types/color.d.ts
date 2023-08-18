/**
 *
 * Color type module
 *
 * @packageDocumentation
 *
 */
import { ObjectValue } from './utils';
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
