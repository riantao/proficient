import { Customer } from "@proficient/types";
import { makeSlug } from "@proficient/utils";
import { AreaManager } from "./AreaManager";
import { ProjectEngineer } from "./ProjectEngineer";

export const customers: Customer[] = [
    {
        id: "0",
        title: "Polytainers",
        projectEngineer: ProjectEngineer.TONY,
        areaManager: AreaManager.FRANK,
        facilities: [],
        contacts: [],
    },
    {
        id: "1",
        title: "Pilot Plastics",
        projectEngineer: ProjectEngineer.RICHARD,
        areaManager: AreaManager.PAUL,
        facilities: [],
        contacts: [],
    },
    {
        id: "2",
        title: "Technimark",
        projectEngineer: ProjectEngineer.TONY,
        areaManager: AreaManager.DAVID,
        facilities: [],
        contacts: [],
    },
    {
        id: "2",
        title: "Tessy Plastics",
        projectEngineer: ProjectEngineer.TONY,
        areaManager: AreaManager.FRANK,
        facilities: [],
        contacts: [],
    },
    {
        id: "3",
        title: "Polyplas",
        projectEngineer: ProjectEngineer.RICHARD,
        areaManager: AreaManager.DIMITRY,
        facilities: [],
        contacts: [],
    },
    {
        id: "4",
        title: "EcoVector",
        projectEngineer: ProjectEngineer.RICHARD,
        areaManager: AreaManager.CRISTIAN,
        facilities: [],
        contacts: [],
    },
    {
        id: "5",
        title: "Airlite Plastics",
        projectEngineer: ProjectEngineer.RALPH,
        areaManager: AreaManager.TIM,
        facilities: [],
        contacts: [],
    },
    {
        id: "6",
        title: "Nudura",
        projectEngineer: ProjectEngineer.RALPH,
        areaManager: AreaManager.FRANK,
        facilities: [],
        contacts: [],
    },
    {
        id: "7",
        title: "Aptar",
        projectEngineer: ProjectEngineer.RALPH,
        areaManager: AreaManager.STEVE,
        facilities: [],
        contacts: [],
    },
    {
        id: "8",
        title: "Phoenix Closures",
        projectEngineer: ProjectEngineer.RALPH,
        areaManager: AreaManager.TIM,
        facilities: [],
        contacts: [],
    },
    {
        id: "9",
        title: "Rieke Corporation",
        projectEngineer: ProjectEngineer.RICHARD,
        areaManager: AreaManager.PAUL,
        facilities: [],
        contacts: [],
    },
    {
        id: "10",
        title: "E. Hofmann Plastics",
        projectEngineer: ProjectEngineer.RICHARD,
        areaManager: AreaManager.FRANK,
        facilities: [
            {
                street: "51 Centennial Road",
                city: "Orangeville",
                state: "ON",
                country: "Canada"
            }
        ],
        contacts: [
            {

            }
        ]
    }
].map(c => ({ ...c, slug: makeSlug(c.title) }))
.sort((a, b) => a.title > b.title ? 1 : -1) as Customer[];