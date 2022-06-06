import { Project } from "../types/projects";


export const projects: Project[] = [
    {
        id: "#364750",
        title: "",
        serialNum: 123,
        details: {
            address: "51 Centennial Road Orangeville, Ontario L9W 3R1 Canada",
            areaManager: "Frank Favot",
            customer: "E. Hofmann Plastics",
            incoTerms: "FCA",
            isWarranty: false,
            projectEngineer: "Richard Antao",
            quotingRegion: "Beverage Packaging N.America",
            shipTo: "Canada"
        },
        incoTerms: "FCA",
        options: [
            {
                id: "C1007",
                quantity: 1,
                title: "Full SPI mold mounting pattern",
                type: "clamp"
            },
            {
                id: "C2230",
                quantity: 1,
                title: "Increased shut-height",
                type: "clamp",
            },
            {
                id: "C2231",
                quantity: 1,
                title: "Increased clamp tonnage",
                type: "clamp"
            },
            {
                id: "C4506",
                quantity: 1,
                title: "High power screw drive",
                type: "injection"
            }
        ],
        revisionNum: 0,
        schedule: {
            comt: new Date(),
            configDate: new Date(),
            exw: new Date(),
            machineArrival: new Date(),
            organizedBy: "Customer",
            pih: new Date()
        },
        specials: [
            {
                id: "S# 5051602-01E",
                title: "RS95/90 Screw and Barrel (L/d 26.39:1) with Mixing screw III",
                description: `
                    The package includes a longer Mixing Screw III (formerly Husky Pail resin screw) and barrel, longer barrel cover, longer carriage cylinder rods, modified injection services, longer hoses and electrical cables (compared to the standard length RS95/95 - 22.2:1 L/d or RS95/85 - 25:1 L/d).

                    Purpose/Reason: The customer needs to increase the extruder throughput without losing too much injection pressure.

                    Internal Notes:

                    > Mechanical Eng.: please use the RS95/95 (L/d 25:1) Barrel with a smaller bore of 90 mm.

                    > Please note that the High Wear Screw and Barrel option has been ordered.


                    Screw Diam. 90mm

                    L/d 26.39:1

                    Injection pressure 1805bar

                    Stroke 425mm

                    Capacity 2704cm3


                    > Refererence:

                    HPN2814946 - Barrel assembly

                    HPN2815038 - Pail screw
                `,
                constraint: {
                    clamp: [],
                    injection: ["RS95/90" as any]
                },
                meta: {
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                projects: [
                    { id: "#364750", title: "H4 500-RS95/90" },
                    { id: "#197604", title: "H4 500-RS95/90" }
                ],
                rev: 1,
                prices: []
            },
            {
                id: "S# 5120501-02",
                title: "High Power Screw Drive for RS95/90 (L/d 26:1)",
                description:"Purpose/Reason:\n The customer's performance expectations require the following extruder changes. \n Detailed Specification: \n Screw drive power is increased to produce 5,000 Nm of torque at a peripheral screw speed of 0.80 m/s (170 RPM). \n List of Special Materials and Modification: \n Standard Gearbox and Servo Motor are replaced with the High Power components. \n",
                rev: 2,
                projects: [
                    { id: "#364750", title: "H4 500-RS95/90" },
                    { id: "#197604", title: "H4 500-RS95/90" }, 
                    { id: "#448806", title: "H4 500-RS95/90" }
                ],
                prices: [],
                constraint: {
                    clamp: [],
                    injection: ["RS95/90" as any]
                },
                meta: {
                    createdAt: new Date("Tue May 24 2022"),
                    updatedAt: new Date("Tue May 25 2022")
                }
            }
        ],
        quoteNum: "QUO-235882-B7N3K7"
    },
    {
        id: "#352589",
        details: {
            address:"200 Industrial Drive Peninsula, OH 44264, United States",
            customer: "Pilot Plastics Inc.",
            areaManager: "Paul Bergman",
            incoTerms: "CPT",
            isWarranty: false,
            projectEngineer: "Richard Antao",
            quotingRegion: "Beverage Packaging N.America",
            shipTo: "Pilot Plastics Inc."
        },
        incoTerms: "CPT",
        options: [],
        revisionNum: 3,
        schedule: {
            comt: new Date(),
            configDate: new Date(),
            exw: new Date(),
            machineArrival: new Date(),
            organizedBy: "Customer",
            pih: new Date()
        },
        serialNum: 11364189,
        specials: [],
        title: "H4L 650 RS115/115",
        quoteNum: "QUO-226034-B5Z5W5"
    }
];