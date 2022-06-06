import type { GetStaticPaths, GetStaticProps } from "next/types";
import { customers } from "@proficient/fixtures";
import { Customer } from "@proficient/features/customer";
import { Navigation } from "@proficient/features/navigation";
import { Customer as CustomerProps } from "@proficient/types";

/**
 * 
 * @function makeCustomerBySlug
 * @param {string | string[] | undefined} slug 
 * @returns {(customer: CustomerProps) => boolean}
 */
const makeCustomerBySlug = (slug?: string | string[]) => {
    /**
     * 
     * @function customerBySlug
     * @param {CustomerProps} customer 
     * @returns {boolean}
     */ 
    const customerBySlug = (customer: CustomerProps): boolean => 
        customer.slug === slug;

    return customerBySlug;
};

/**
 * 
 * @param context 
 * @returns 
 */
export const getStaticProps: GetStaticProps = context => {
    if(!context.params)
        return { props: {} };

    const { slug } = context.params;

    const customerBySlug = makeCustomerBySlug(slug);

    const customer = customers.find(customerBySlug) || null;
    
    return { props: { customer } };
};

/**
 * Create dynamic routes from customer data
 * @function getStaticPaths
 * @returns {GetStaticPathsResult}
 */
export const getStaticPaths: GetStaticPaths = async () => {  
    const paths = customers.map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: false
    };
};

Customer.getLayout = page => (
    <Navigation 
        description=""
        keywords=""
        title=""
    >
        {page}
    </Navigation>
);

export default Customer;