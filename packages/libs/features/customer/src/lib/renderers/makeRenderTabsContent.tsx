import { ReactNode } from "react";
import { Customer } from "@proficient/types";
import { Profile, Standards, Calls } from "../views";

const projects = [
    {
        id: "364750",
        title: "H4 500 RS95/90",
        details: {
            address: "51 Centennial Road, Orangeville",
            customer: "E. Hofmann Plastics",
            areaManager: "Frank Favot",
            projectEngineer: "Richard Antao",
            incoTerms: "FCA",
            isWarranty: false,
            quotingRegion: "Beverage Packaging N. America",
            shipTo: "51 Centennial Road Orangeville,OntarioL9W 3R1 Canada"
        },
        schedule: {
            exw: new Date(),
        },
        options: [
            {
                id: "C1007",
                title: "Full SPI mold mounting pattern",
                type: "clamp",
                quantity: 1, 
            },
            {
                id: "C2222",
                title: "Stack mold carrier",
                type: "clamp",
                quantity: 1, 
            },
            {
                id: "C4150",
                title: "Control outlet mixer/blender (115V, 6A)",
                type: "controls",
                quantity: 1, 
            },
            {
                id: "C4001",
                title: "High wear resistant screw & barrel",
                type: "injection",
                quantity: 1, 
            },
            {
                id: "C2230",
                title: "Increased shut-height",
                type: "clamp",
                quantity: 1
            },
            {
                id: "C9500",
                title: "Modem for remote connectivity",
                type: "controls",
                quantity: 1
            }
        ],
        serialNum: 11536440,
    },
    {
        id: "197604",
        title: "H4 500 RS95/90",
        serialNum: 10508266,
        details: {
            address: "51 Centennial Road",
            customer: "E. Hofmann Plastics",
            areaManager: "Frank Favot",
            projectEngineer: "Richard Antao",
            incoTerms: "FCA",
            isWarranty: false,
            quotingRegion: "Beverage Packaging N. America",
            shipTo: "51 Centennial Road Orangeville,OntarioL9W 3R1 Canada"
        },
        schedule: {
            exw: new Date(),
        },
        options: [
            {
                id: "C1007",
                title: "Full SPI mold mounting pattern",
                type: "clamp",
                quantity: 1, 
            },
            {
                id: "C2230",
                title: "Increased shut-height",
                type: "clamp",
                quantity: 1
            },
        ]
    },
    {
        id: "302172",
        title: "H4 500 RS80/65",
        serialNum: 11008126,
        details: {
            address: "51 Centennial Road",
            customer: "E. Hofmann Plastics",
            areaManager: "Frank Favot",
            projectEngineer: "",
            incoTerms: "FCA",
            isWarranty: false,
            quotingRegion: "Beverage Packaging N. America",
            shipTo: "51 Centennial Road Orangeville,OntarioL9W 3R1 Canada"
        },
        schedule: {
            exw: new Date(),
        },
        options: [
            {
                id: "C1007",
                title: "Full SPI mold mounting pattern",
                type: "clamp",
                quantity: 1, 
            },
            {
                id: "C2222",
                title: "Stack mold carrier",
                type: "clamp",
                quantity: 1
            }
        ]
    }
];

/**
 * @function makeRenderTabsContent
 * @param {Customer} customer 
 * @returns {(activeTab: string) => ReactNode}
 */
export const makeRenderTabsContent = (customer: Customer) => {
    /**
     * @function renderTabsContent
     * @param {string} activeTab 
     * @returns {ReactNode}
     */
    const renderTabsContent = (activeTab: string): ReactNode => {
        switch(activeTab) {
            case "Profile":
                return <Profile customer={customer} />;
            case "Standards":
                return <Standards projects={projects} customer={customer} />;
            case "Calls":
                return <Calls customer={customer} />;
            default: 
                throw new Error("Invalid tab label");
        }
    };  

    return renderTabsContent;
};
