import { Entity, EntityInfo } from "./";

type CustomerDeliveryTerms =
    "CPT" | 
    "DDP" |
    "FCA";

interface CustomerFacility {
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly country: string; 
}

interface CustomerContact {
    readonly name: string;
    readonly role: string;
    readonly email: string;
    readonly phone?: string;
}

interface CustomerPreferences {
    readonly paymentTerms: string;
    readonly deliveryTerms: CustomerDeliveryTerms;
}

interface CustomerProfile {
    readonly market: string;
    readonly applications: string[];
    readonly ranking: string;
}

interface CustomerBase {
    readonly slug?: string;
    readonly projectEngineer: string;
    readonly areaManager: string;
    readonly facilities: CustomerFacility[]; 
    readonly contacts: CustomerContact[];
    readonly preferences: CustomerPreferences;
    readonly website?: string;
}

interface CustomerApplication {
    
}

export interface CustomerInfo extends EntityInfo, CustomerBase {

}

export interface Customer extends Entity, CustomerBase {

}