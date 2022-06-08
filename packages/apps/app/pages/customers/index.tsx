import { GetStaticProps } from "next";
import { Customers, Navigation } from "../../lib";

const initialCustomers = [];

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