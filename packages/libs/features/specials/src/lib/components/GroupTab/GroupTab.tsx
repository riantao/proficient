import { FC } from "react";

import { GroupTabProps } from "./GroupTab.d";
import { Container } from "./GroupTab.styles";
import { useGroupTab } from "./useGroupTab";

export const GroupTab: FC<GroupTabProps> = props => {
    const { 
        specials
    } = useGroupTab(props);

    return (
        <Container>
            {specials.map(s => <li key={s.id}>{s.id}</li>)}
        </Container>
    );
};