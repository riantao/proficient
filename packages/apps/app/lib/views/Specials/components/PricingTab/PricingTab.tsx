import { FC } from "react";
import { format } from "date-fns";

import { Container } from "./PricingTab.styles";
import { PricingTabProps } from "./PricingTab.d";

export const PricingTab: FC<PricingTabProps> = ({ special }) => {
    return (
       <Container>
           <h3>Prices</h3>
           {special?.prices.map(({ ref, factory, date }, rev) => (   
            <div key={rev}>
                <div>
                    Factory: ${factory}
                </div>
                <div>
                    Ref: ${ref}
                </div>
                <div>
                    Rev: {rev} ({date && format(new Date(date), "yyyy-mm-dd")})
                </div>
            </div>
           ))}
       </Container>
    );
};

export default PricingTab;