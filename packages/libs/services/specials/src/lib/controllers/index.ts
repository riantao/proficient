import { makeWriteController, makeReadController } from "@proficient/adapters";

import {
    createSpecial,
    fetchSpecials,
    updateSpecial
} from "../interactors";

export const createSpecialController = makeWriteController({
    interactor: createSpecial,
    successStatusCode: 201
});

export const fetchSpecialsController = makeReadController({
    interactor: fetchSpecials
});

export const updateSpecialController = makeWriteController({
    interactor: updateSpecial
});