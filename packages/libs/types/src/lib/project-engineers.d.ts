import { Person } from "./people";

export interface ProjectEngineer extends Person {
    readonly role: "project-engineer";
}