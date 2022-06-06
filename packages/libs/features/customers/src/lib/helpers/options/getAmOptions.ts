import { Customer } from "@proficient/types";
import { uniqueBy } from "@proficient/utils";

export const getAmOptions = (customers: Customer[]) => 
    uniqueBy(customers, customer => customer.areaManager).map(c => c.areaManager);