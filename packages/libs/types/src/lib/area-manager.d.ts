import { Person } from "./people";

export interface AreaManager extends Person {
    readonly role: "area-manager";
}