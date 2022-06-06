import type { DataWithMeta, Entity, EntityInfo } from "./";
import type { MachineClampSize, MachineInjectionScrew, MachineMountingPattern } from "./machines";

export interface SpecialPrice {
    /** Reference price of special (how much Husky is charging the customer) */
    readonly ref: number;
    /** Factory price of special (how much it costs Husky) */
    readonly factory: number;
    /** Timestamp of price update */
    readonly date?: Date;
}

export type SpecialInjectionRate = "standard" | "high-speed";

export interface SpecialConstraint {
    readonly clamp: MachineClampSize[];
    readonly injection: MachineInjectionScrew[];
    readonly mountingPattern?: MachineMountingPattern;
    readonly injectionRate?: SpecialInjectionRate;
    readonly supplyVoltage?: string;
}

export interface SpecialAttachment extends Entity{
    readonly url: string;
}

interface SpecialBase<DateForm extends Date | string = string> extends DataWithMeta<DateForm> {
    /** Revision of special */
    readonly rev: number;
    /** Long description of special */
    readonly description: string;
    /** Array of project ids OR populated projects */
    readonly projects: Entity[];
    /** Object containing special price */
    readonly prices: SpecialPrice[];
    /** */
    readonly constraint: SpecialConstraint;
    /** attachments for the specials, including drawings, BOMS, etc */
    readonly attachments: SpecialAttachment[];
    readonly dwgs: string[];
    readonly boms: string[]; 
}

export type SpecialInfo = EntityInfo & SpecialBase<string>;

export type Special = Entity & SpecialBase<Date>;

export interface LegacySpecialItem {
    shortDescription: string;
    type: string;
    clamp: string;
    injection: string;
    engCategory: string;
    prices: {
        description,
        price
    }[];
    description: string;
    conditions: string;
    integration: string;
}

export interface LegacySpecial {
    quote: {
        priority: number
        customer: string;
        requester: string;
        region: string;
        market: string;
        receivedDate,
        requiredDate,
        assigned: string;
        finalSpecDate,
        approvalDate,
        verbalCompleteDate,
        formalCompleteDate,
        estimatedTime,
        effort
        isSuccessfulSale: boolean
    },
    header: {
        to: string;
        copy1: string;
        copy2: string;
        company: string;
        fax: string;
        subject: string
    },
    terms: string;
    comments: string;
    items: LegacySpecialItem[];
}

interface SpecialCriteria {
    clamp
    injection
    voltage
    frequency
    stdOrHighSpeedInjection
}