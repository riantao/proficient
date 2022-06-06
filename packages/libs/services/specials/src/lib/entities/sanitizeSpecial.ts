import { cleanString } from "@proficient/entities";
import { SpecialInfo } from "@proficient/types";

export const sanitizeSpecial = ({
    title,
    id,
    description,
    ...rest    
}: SpecialInfo): SpecialInfo => ({
    ...rest,
    id: cleanString(id),
    title: cleanString(title),
    description: cleanString(description),
});