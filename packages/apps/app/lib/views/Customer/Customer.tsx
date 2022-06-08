import { NextPageWithLayout } from "@proficient/types";

import { Tabs } from "../../components";

import { TAB_LABELS } from "./constants";
import { useCustomer } from "./hooks";
import { Container } from "./styles";
import { CustomerProps } from "./Customer.d";

export const Customer: NextPageWithLayout<CustomerProps> = ({ customer }) => {
    const { renderTabsContent } = useCustomer(customer);

    return (
        <Container>
            <h1>{customer.title}</h1>
            <Tabs labels={TAB_LABELS} renderTabsContent={renderTabsContent} />
        </Container>
    );
};

export default Customer;