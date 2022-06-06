import { makeDao } from "@proficient/functions";
import { makeSpecialsRepo } from "./makeSpecialsRepo";

export type { SpecialRepo } from "./types.d";

export const specialsRepo = makeSpecialsRepo({
    dao: makeDao("specials")
});