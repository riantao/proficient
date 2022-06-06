import { buildMakeEntity } from "@proficient/entities";
import { Special, SpecialInfo } from "@proficient/types";

import { sanitizeSpecial } from "./sanitizeSpecial";
import type { SpecialDependencies } from "./types";
import { validateSpecial } from "./validators";

export const makeSpecial = buildMakeEntity<SpecialInfo, Special, SpecialDependencies>({
    sanitizeEntityInfo: sanitizeSpecial,
    validator: validateSpecial
});