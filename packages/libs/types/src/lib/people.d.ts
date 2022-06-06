import { Entity } from ".";

export interface Person extends Entity{
    readonly name: string;
    readonly role: string;
}