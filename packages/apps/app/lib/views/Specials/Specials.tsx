import Select from "react-select";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Icon, SecondaryButton as Button } from "../../components";
import type { NextPageWithLayout } from "@proficient/types";

import { ExplodedSpecial } from "./components";
import { useSpecials } from "./hooks";
import { padTableRows } from "./renderers";
import {
    Table,
    TableContainer,
    TableBody as Tbody,
    TableHead as Thead,
    TableHeader as Th,
    TableRow as Tr,
    Container,
    Header, 
    Input
} from "./styles";

export const Specials: NextPageWithLayout = () => {
    const { 
        renderSpecial,
        selectedSpecial,
        filter,
        filteredSpecials,
        onClick
    } = useSpecials();

    return (
        <Container>
            <Header>
                <h1>Specials</h1>
                <Button onClick={onClick}>
                    <Icon icon={faPlus} />&nbsp;New Special
                </Button>
            </Header>
            <TableContainer>
                <Table role="table">
                    <Thead>
                        <Tr role="row">
                            <Th>ID</Th>
                            <Th>Title</Th>
                            <Th>Description</Th>
                            <Th>Projects</Th>
                        </Tr>
                        <Tr role="row">
                            <Th>
                                <Input {...filter.id} />
                            </Th>
                            <Th>
                                <Input {...filter.title} />
                            </Th>
                            <Th>
                                <Input {...filter.description} />
                            </Th>
                            <Th>
                                <Select {...filter.project} />
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filteredSpecials.map(renderSpecial)}
                        {padTableRows(filteredSpecials)}
                    </Tbody>
                </Table>
            </TableContainer>
            <ExplodedSpecial special={selectedSpecial}/>
        </Container>
    );
};

export default Specials;