import { handleValidationResponse } from "@proficient/entities";
import { ErrorDetails } from "@proficient/exceptions";
import { SpecialInfo } from "@proficient/types";

import { validateTitle } from "./validateTitle";

export const validateSpecial = ({
    title,
    id
}: SpecialInfo): ErrorDetails | null => {
    const errors = [
        validateTitle(title)
    ];

    return handleValidationResponse(errors);
};