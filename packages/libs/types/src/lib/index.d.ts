export * from "./customers";
export * from "./next";
export * from "./opportunities";
export * from "./options";
export * from "./projects";
export * from "./quotes";
export * from "./specials";
export * from "./users";

export interface UniqueId {
    /** Unique id of entity */
    readonly id: string;
}

/**
 * 
 */
export interface EntityInfo extends Partial<UniqueId> {
    /** Human readable id of entity */
    readonly title: string;
}

/**
 * 
 */
export type Entity = Required<EntityInfo>;

export interface Meta<DateForm extends Date | string = string> {
    readonly createdAt: DateForm;
    updatedAt: DateForm;
}

export interface DataWithMeta<DateForm extends Date | string = string> {
    readonly meta: Meta<DateForm>;
}

export interface SelectOption {
    /** label of option*/
    readonly label: string;
    /** value of option */
    readonly value: string;
}

/** 
 * Modifies the subject type via the provided interface 
 */
export type Modify<T, R> = Omit<T, keyof R> & R;

/** 
 * Makes the keys of the given interface optional 
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
