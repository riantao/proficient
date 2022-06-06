import { Entity } from ".";

export type OptionType =
    "clamp" |
    "controls" |
    "injection" |
    "general" |
    "spares";

export interface Option extends Entity {
    readonly type: OptionType;
    readonly description?: string;
}

export interface ProjectOption extends Option {
    readonly projectId: string
}

export interface CustomerOption extends Option {
    readonly projectIds: string[];
}