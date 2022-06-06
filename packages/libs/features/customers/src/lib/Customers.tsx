import { useEffect, useState  } from "react";

import { usePrev } from "@proficient/hooks";
import { bulkIsEqual } from "@proficient/utils";

import { customers as initialCustomers } from "@proficient/fixtures";
import { TABLE_HEADERS } from "./data";
import {
     byFilterPredicate,
     getAmOptions,
     getCustomerOptions,
     getPeOptions
} from "./helpers";
import { useTableFilter } from "./hooks";
import { renderSelectFilter, renderTableData, renderTableHeader } from "./renderers";
import {
    Container,
    Table,
    Tbody,
    Thead,
    Tr
} from "./styles";
import { NextPageWithLayout } from "@proficient/types";

export const Customers: NextPageWithLayout = () => {
    const [customers, setCustomers] = useState(initialCustomers);

    // Select props for each filter
    const customerSelect = useTableFilter({ getOptions: getCustomerOptions, customers });
    const peSelect = useTableFilter({ getOptions: getPeOptions, customers });
    const amSelect = useTableFilter({ getOptions: getAmOptions, customers });

    // Store prev values of each filter
    const prevCustomerSelect = usePrev(customerSelect);
    const prevPeSelect = usePrev(peSelect);
    const prevAmSelect = usePrev(amSelect);

    // Filter customers by each prop
    const filteredCustomers = customers
        .filter(byFilterPredicate("title", customerSelect))
        .filter(byFilterPredicate("projectEngineer", peSelect))
        .filter(byFilterPredicate("areaManager", amSelect));

    useEffect(() => {
        // Reset customers list if any of the filter values change
        if(!bulkIsEqual([
            [prevCustomerSelect.value, customerSelect.value], 
            [prevPeSelect.value, peSelect.value],
            [prevAmSelect.value, amSelect.value]
        ]))
            setCustomers(initialCustomers)
    }, [amSelect.value, customerSelect.value, filteredCustomers, peSelect.value, prevAmSelect.value, prevCustomerSelect.value, prevPeSelect.value]);
        
    return (
        <Container>
            <Table role="table">
                <Thead>
                    <Tr role="row">{TABLE_HEADERS.map(renderTableHeader)}</Tr>
                    <Tr role="row">
                        {[customerSelect, peSelect, amSelect].map(renderSelectFilter)}
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredCustomers.map(renderTableData)}
                </Tbody>
            </Table>
        </Container>
    );
};

export default Customers;