import { Entity, EntityInfo } from "./";
import { Option } from "./options";
import { Special } from "./specials";

export type ProjectTransportationResponsibility = 
    "Husky" | 
    "Customer";

export type AreaManager = 
    "David Watts" | 
    "Frank Favot" |
    "Gus Avramadis" |
    "Paul Bergman" | 
    "Ryan Gibbs" |
    "Steve Saggese" | 
    "Tim Spilchen";

export type ProjectEngineer = 
    "Richard Antao" | 
    "Tony Colangelo" | 
    "Ralph McGowan" |
    "Ina Cai" | 
    "Kevin Wang" | 
    "Erik Donkel";

export interface ProjectOption extends Option {
    /** Quantity of a specific option for a machine */
    readonly quantity: number;
}

export type ProjectSpecial = Omit<Special, "price">;

export type ProjectInco = 
    "CPT" | 
    "DDP" | 
    "FCA";

export interface ProjectDetails {
    /** Customer name */
    readonly customer: string;
    /** Address of customer's facility */
    readonly address: string;
    /** Ship-to address*/
    readonly shipTo: string;
    /** Boolean stating whether this project is a warranty or not */
    readonly isWarranty: boolean;
    /** Husky region who provided the quote */
    readonly quotingRegion: string;
    /** Area manager of the project */
    readonly areaManager: AreaManager;
    /** Project engineering of the project */
    readonly projectEngineer: ProjectEngineer;
    /** Delivery terms */
    readonly incoTerms: ProjectInco;
}

export interface ProjectScheduleExpectations {
    /** Who is responsible for organizing shipping */
    readonly organizedBy: ProjectTransportationResponsibility;
    /** Config date (when the machine/project is kicked off) */
    readonly configDate: Date;
    /** Date machine is expected to arrive at the customer's facility */
    readonly machineArrival: Date;
    /** Date expected to ship machine */
    readonly exw: Date;
    /** Completion of machine test */
    readonly comt: Date;
    /** Parts-in-House date (when parts are expected to arrive at Husky facility) */
    readonly pih: Date;
}

export interface ProjectLanguage {
    readonly primary: string;
    readonly secondary?: string;
    readonly manual: string;
}

export interface ProjectInternal {
    /** Project number of reference project */
    readonly refProject?: string;
    /** Serial number of reference project */
    readonly refSerial?: string;
    /** Plant supply voltage */
    readonly supplyVoltage: string; // TODO: Add type for supply voltage options
    /** */    
    readonly hydraulicStandard: "";
    /** */
    readonly elecStandard: "";
}

export interface ProjectMold {

}

export interface ProjectProcessing {

}

interface ProjectBase {
    /** Quote number */
    readonly quoteNum?: string;
    /** Serial number */
    readonly serialNum: number;
    /** Revision number of checklist */
    readonly revisionNum: number;
    /** Object containing project details */
    readonly details: ProjectDetails;
    /** Object containing milestone dates */
    readonly schedule: ProjectScheduleExpectations;
    /** INCO terms of machine */
    readonly incoTerms: string;
    /** Machine options */
    readonly options: ProjectOption[];
    /** Machine specials */
    readonly specials: ProjectSpecial[];
}

export interface ProjectInfo extends EntityInfo, ProjectBase {
}

export interface Project extends Entity, ProjectBase {

}