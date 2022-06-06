import { Entity, EntityInfo } from ".";

interface QuoteBase {
    /** Opportunity number the quote is linked to */
    readonly optId: string;
    /** Object containing price breakdown of quote */
    readonly price: QuotePrice;
}

export interface QuotePrice {
    /** Base price of machine (std. features + options) */
    readonly base: number;
    /** Freight cost */
    readonly freight: number;
    /** Cumulative price of specials */
    readonly specials: number;
}

export interface QuoteInfo extends EntityInfo, QuoteBase {

}

export interface Quote extends Entity, QuoteBase {

}