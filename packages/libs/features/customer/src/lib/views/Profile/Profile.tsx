import { FC } from "react";

import { InputGroup } from "@proficient/components";
import { useProfile } from "./hooks";
import { 
    Grid, 
    InputGroupRow
} from "./styles";

import type { ProfileProps } from "./Profile.d";

/**
 * @module Profile
 * @param {ProfileProps} 
 * @returns {ReactElement} 
 */
export const Profile: FC<ProfileProps> = ({
    customer
}) => {
    const { fields } = useProfile({ customer });
    
    return (
        <Grid>
            <div>   
                <InputGroup {...fields.company} />
            </div>
            <div></div>
            <div style={{ marginTop: "1rem" }}>
                <h3>Contacts</h3>
                <InputGroupRow>
                    <InputGroup {...fields.contactOne.name} />
                    <InputGroup {...fields.contactOne.role} />
                    <InputGroup {...fields.contactOne.email}/>
                    <InputGroup {...fields.contactOne.phone}/>
                </InputGroupRow>
                <InputGroupRow>
                    <InputGroup {...fields.contactTwo.name} />                                
                    <InputGroup {...fields.contactTwo.role} />                                
                    <InputGroup {...fields.contactTwo.email} />                                
                    <InputGroup {...fields.contactTwo.phone} />                                
                </InputGroupRow>
                <InputGroupRow>
                    <InputGroup {...fields.contactThree.name} />            
                    <InputGroup {...fields.contactThree.role} />            
                    <InputGroup {...fields.contactThree.email} />            
                    <InputGroup {...fields.contactThree.phone} />            
                </InputGroupRow>
            </div>
            <div></div>
            <div style={{ marginTop: "1rem" }}>
                <h3>Terms</h3>
                <InputGroup 
                    value="CPT"
                    label="Delivery Terms"
                    onChange={() => {}}
                />
                <InputGroup
                    value="30/50/20"
                    label="Payment Terms"
                    onChange={() => {}}
                />
            </div>
            <div></div>
            <div style={{ marginTop: "1rem" }}>
                <h3>Business Profile</h3>
                <InputGroup
                    value=""
                    label="Sales Rank"
                    onChange={() => {}}
                />
            </div>
            <div></div>
            <div>
                <h3>Notes</h3>
                <InputGroup
                    value=""
                    label=""
                    onChange={() => {}}
                />
            </div>
            <div></div>
        </Grid>
    );
};

export default Profile;