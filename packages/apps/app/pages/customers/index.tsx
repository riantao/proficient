import { GetStaticProps } from "next";
import { Customers } from "@proficient/features/customers";
import { customers as initialCustomers } from "@proficient/fixtures";
import { Navigation } from "@proficient/features/navigation";

export const getStaticProps: GetStaticProps = () => {
   return {
       props: {
           initialCustomers
       }
   } 
};

Customers.getLayout = page => (
    <Navigation 
        description="View Hylectric customers"
        keywords="customers, profile, standards, hylectric"
        title="Customers"
    >
        {page}
    </Navigation>
);


export default Customers;