import { Modify } from "@proficient/types";
import { generateId } from "@proficient/utils";

export const giveEntityId = <
	EntityInfo extends { id?: string },
	Entity extends Modify<EntityInfo, { id: string }>
>({
	id = generateId(),
	...rest
}: EntityInfo): Entity => ({
	...rest,
	id
} as Entity);