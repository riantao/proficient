import { Customer as CustomerProps } from "@proficient/types";
import { Container } from "./styles";
import { Tabs } from "@proficient/components";
import { TAB_LABELS } from "./constants";
import { useCustomer } from "./hooks";

import { NextPageWithLayout } from "@proficient/types";

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