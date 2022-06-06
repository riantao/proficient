import { Filter } from "mongodb";

import { Special } from "@proficient/types";

import { SpecialRepo } from "../repo";

export interface SpecialsFetchInteractorDependencies {
    readonly repo: SpecialRepo;
    readonly querySanitizer: (query: Record<string, any>) => Filter<Special>;
}