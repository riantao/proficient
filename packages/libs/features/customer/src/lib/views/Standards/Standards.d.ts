import { Customer, Project } from "@proficient/types";

export interface CustomerStandardsProps {
    readonly customer: Customer;
    readonly projects: Project[];
}