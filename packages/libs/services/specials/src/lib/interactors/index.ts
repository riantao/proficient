import { makeAddEntity, makeUpdateEntity } from "@proficient/interactors";

import { makeSpecial } from "../entities";
import { specialsRepo } from "../repo";
import { makeFetchSpecials } from "./makeFetchSpecials";
import { sanitizeSpecialQueryParams } from "./sanitizeSpecialQueryParams";

const name = "special";

export const createSpecial = makeAddEntity({
    entityRepo: specialsRepo,
    makeEntity: makeSpecial,
    name
});

export const fetchSpecials = makeFetchSpecials({
    repo: specialsRepo,
    querySanitizer: sanitizeSpecialQueryParams
});

export const updateSpecial = makeUpdateEntity({
    entityRepo: specialsRepo,
    makeEntity: makeSpecial,
    name
});