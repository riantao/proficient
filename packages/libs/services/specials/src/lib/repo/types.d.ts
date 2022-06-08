import { EntityRepo } from "@proficient/adapters";
import { Dao } from "@proficient/functions";
import { Special } from "@proficient/types";
import { Document, Filter, Sort } from "mongodb";

export interface SpecialRepoDependencies {
	readonly dao: Dao<Special>;
	readonly projection?: Document;
	readonly sort?: Sort;
}

export interface SpecialRepo extends EntityRepo<Special> {
	readonly findBy: (filter: Filter<Special>) => Promise<Special[] | null>;
}
