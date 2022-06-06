import { EntityRepo } from "@proficient/adapters";
import { Dao } from "@proficient/functions";
import { Special } from "@proficient/types";
import { Filter } from "mongodb";

export interface SpecialRepoDependencies {
	readonly dao: Dao<Special>;
}

export interface SpecialRepo extends EntityRepo<Special> {
	readonly findBy: (filter: Filter<Special>) => Promise<Special[] | null>;
}
