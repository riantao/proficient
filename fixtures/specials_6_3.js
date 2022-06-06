module.exports = [
    {
        id: "S# 22050501-01",
        title: "Airlite special Mold stroke tuning parameters HN300",
        description: `This special includes C6511 for HyperSync: Provides an overview of the electrical consumption of Q1M, Q2M and Q3M breakers. The monitored values are Total Power, Energy Consumption, Shot Weight, Part Weight, Hourly Throughput. Detailed measurement of voltage, current, frequency, power and power factor are also available.

            Energy Consumption data will be available for monitoring by the SPC Control feature. Additional input fields will be provided for energy/kg of plastic (mold Cavitation, and Part Weight, kWh/kg) can be calculated. As well energy consumption sampling or Intervals of when to take energy reads can be increased or decreased.
            
            Ref projects: 146711, 146728, 146730, 146731
        `,
        rev: 0,
        projects: [
            { id: "#146711", title: "HN 300-RS70/70" },
            { id: "#146728", title: "HN 300-RS70/70" },
            { id: "#146730", title: "HN 300-RS70/70" },
            { id: "#146731", title: "HN 300-RS70/70" },
        ],
        constraint: {
            clamp: ["HN 300"],
            injection: []
        },
        prices: [],
        attachments: [],
        boms: [],
        dwgs: [],
        meta: {
            createdAt: new Date("05-05-2022"),
            updatedAt: new Date("05-05-2022")
        }
    },
    {
        id: "S# 22050701-01",
        title: "Mechanical interface for RTD & temp. gauge. - H4",
        description: `Provide the following:
            > Add one 1/2” NPT fitting in the oil tank for the purpose of housing an RTD (Resistance Temperature Detector) unit.
            > Add one 1/2” NPT fitting in the oil tank for oil temperature gauge.
            
            Provide plugs for machine testing and shipping.
            
            ---
            References:
            •	Ref Project: 123908
            •	Refer to same special on #488863 (HL400 RS80/80)
            •	Location reference: DWG 4402479
        `,
        rev: 0,
        prices: [
            {
                factory: 1000,
                ref: NaN,
                date: new Date("01-01-2018")
            },
            {
                factory: 1292,
                ref: 1700,
                date: new Date("05-07-2022")
            }
        ],
        attachments: [],
        boms: [],
        constraint: {
            clamp: ["H4L 400"],
            injection: []
        },
        dwgs: ["4402479"],
        projects: [
            { id: "#123908", title: "H4L 400-RS115/115" },
            { id: "#488863", title: "HL 400-RS80/80" }
        ],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        },
    },
    {
        id: "S# 22050701-02",
        title: "Ports for ASL filtration unit-H4",
        description: `Provide two ports in the clean side of the oil tank for use with an electrostatic filtration system. 
            >Both ports will be ¾ " NPT (plugged) holes and will be located 3 - 4 inches vertically up from the oil drain line on the injection end of the base oil reservoir.  Engineering to confirm there is no obstruction up to 6" into the base from this hole.

            Reference project 344851 (H4L500 RS95/95L) , 123908
            > J/N488863 (HL400 RS80/80) (DWG 4402479)
            > Drawing#: 3423959 (RS95 HL650)
        `,
        rev: 0,
        prices: [
            {
                factory: 1050,
                ref: NaN,
                date: new Date("01-01-2018")
            },
            {
                factory: 1292,
                ref: 1700,
                date: new Date("05-07-2022")
            }
        ],
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#123908", title: "H4L 400-RS115/115" },
            { id: "#488863", title: "HL 400-RS80/80" },
        ],
        constraint: {
            clamp: ["H4L 400", "H4L 500"],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: ["3423959", "4402479"],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050701-03",
        title: "'Barrel heats on' alarm light special - H4",
        description: `Blue alarm light is illuminated when the barrel heats are on, and is off when the barrel heats are off.  

            Reference project 344851 (H4L500 RS95/95L) , 123908
            Refer to the same special on J/N 488863 -HL400 RS80/80
        `,
        rev: 0,
        prices: [
            {
                factory: 525,
                ref: NaN,
                date: new Date("01-01-2018")
            },
            {
                factory: 1050,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            {
                factory: 1175,
                ref: 1545,
                date: new Date("05-07-2022")
            }
        ],
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#123908", title: "H4L 400-RS115/115" },
            { id: "#488863", title: "HL 400-RS80/80" },
        ],
        constraint: {
            clamp: ["H4L 400", "H4L 500"],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: [],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050701-04",
        title: "Mold protection special. - H4",
        description: `The clamp is to stay closed when it faults on mold protection/part interference. 

            Reference project 344851 (H4L500 RS95/95L) , 123908
            Refer to same special on J/N 488863 _HL400 RS80/80
        `,
        rev: 0,
        prices: [
            {
                factory: 300,
                ref: NaN,
                date: new Date("01-01-2013")
            },
            {
                factory: 500,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            {
                factory: 665,
                ref: 875,
                date: new Date("05-07-2022")
            }
        ],
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#123908", title: "H4L 400-RS115/115" },
            { id: "#488863", title: "HL 400-RS80/80" },
        ],
        constraint: {
            clamp: ["H4L 400", "H4L 500"],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: [],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050701-05",
        title: "Remove pneumatic water valves from the comprehensive mold cooling option. - H4",
        description: `This machine is equipped with Comprehensive mold cooling package - 2" NPT. Replace pneumatic auto shut-off water valves by supply and return connection blocks with 2”NPT ports. Do not remove the wiring or the software to control pneumatic mold cooling valves. The customer would like the provision to purchase and install pneumatic mold cooling valves at a later date.

            Reference project 344851 (H4L500 RS95/95L) , 123908
            
            Ref. 'Mold cooling, no shut offs' DWG 2584133
            Refer to same special on J/N 488863 (HL400 RS80/80)
        `,
        rev: 0,
        attachments: [],
        boms: [],
        constraint: {
            clamp: ["H4L 400", "H4L 500"],
            injection: []
        },
        dwgs: [],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        },
        prices: [
 
        ],
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#123908", title: "H4L 400-RS115/115" },
            { id: "#488863", title: "HL 400-RS80/80" },
        ]
    },
    {
        id: "S#22050701-06",
        title: "Special gate protected air package with pressure gauge - H4",
        description: `This machine is configured with four air functions. These four air functions will be modified as follows:
        - gate protected outputs
        - add pressure regulator/pressure gauge.
        
        
        Reference project 344851 () , 123908
        
        Refer to the same special on J/N488863 - HL400 RS80/80.
        
        Disclaimer:
        
        These valves cannot be used for operation of dual acting mold features such as pneumatic cores or stripper plates.`,
        rev: 0,
        prices: [ 
            {
                factory: 1400,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            {
                factory: 1957,
                ref: 2575,
                date: new Date("05-07-2022")
            }
        ],
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#123908", title: "H4L 400-RS115/115" },
            { id: "#488863", title: "HL 400-RS80/80" },
        ],
        attachments: [],
        boms: [],
        dwgs: [],
        constraint: {
            clamp: ["H4L 400", "H4L 500"],
            injection: []
        },
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050701-07",
        title: "Software pressure limit for hydraulic core functions. - H4",
        description: `Provide software pressure limiting of the hydraulic core functions to prevent over-pressure of the hydraulic cylinders. The pressure must be set on the screen so that it does not go above 2000 psi.

            ---
            Refer to same special on J/N 488863 _HL400 RS80/80
        `,
        rev: 0,
        constraint: {
            clamp: [],
            injection: []
        },
        prices: [
            {
                factory: 315,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            {
                factory: 665,
                ref: 875,
                date: new Date("05-07-2022")
            }
        ],
        attachments: [],
        boms: [],
        projects: [
            { id: "#488863", title: "HL 400-RS80/80" }
        ],
        dwgs: [],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050701-08",
        title: "Special Non-Operator Side Gate Safety Circuit - H4",
        description: `The customer has requested that the pumps be shut off when either of the non-operator side gates is opened. This is to make this machine consistent with their other machines and to comply with their plant regulations.
            ---
            Ref. projects: #123902, #390551    
        `,
        rev: 0,
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#123902", title: "H4L 400-RS95/95" },
            { id: "#390551", title: "H 400-RS80/80" }
        ],
        attachments: [],
        boms: [],
        dwgs: [],
        prices: [
            { 
                factory: 525,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            {
                factory: 665,
                ref: 875,
                date: new Date("05-07-2022")
            }
        ],
        constraint: {
            clamp: ["H4 300", "H4L 400", "H4L 500"],
            injection: [
                "RS65/55",
                "RS65/60",
                "RS65/65"
            ]
        },
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }        
    },
    {
        id: "#22050701-09",
        title: "Hunkar or Mattec monitoring package - H4",
        description: `Includes providing the outputs needed.  Hunkar or Mattec hardware provided by customer. The customer needs to ensure that their Hunkar (Mattec) unit contains the necessary hardware to accept the analog signals from the machine.
            All signals are to be available to the Hunkar (Mattec) unit from inside the machine cabinet.
            Husky to provide the following digital (+24VDC) Interface signals:
            > Clamp closed
            > Plasticize (Recovery)
            > Injection time
            > Hold time 
            > Clamp Decompression
            > Clamp open
            
            Husky to provide one analog (0 to +10VDC) Interface signal:
            > Injection Piston Position (actual real-time reading)
            
            Additional output cards will be required in the machine cabinet. All signals including the injection piston position will be taken from the cabinet.
            
            Reference project 344851 (H4L500 RS95/95L) 
            
            Refer to J/N 798175
        `,
        rev: 0,
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#798175", title: "HL 400-RS95/95" }
        ],
        attachments: [],
        boms: [],
        constraint: {
            clamp: ["H4L 500"],
            injection: []
        },
        dwgs: [],
        prices: [
            { 
                factory: 2500,
                ref: NaN,
                date: new Date("01-01-2014")
            },
            { 
                factory: 3154,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            { 
                factory: 3249,
                ref: 4275,
                date: new Date("05-27-2022")
            }
        ],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050701-10",
        title: "Mold cooling manifolds for the center section carrier - H4",
        description: `The manifolds (1 supply, 1 return – 2” NPT) will be provided on top of the stationary platen.  The manifolds will feed off of the main supply and return lines of MOVING PLATEN cooling water circuit. The support plate for the manifolds to extend across the entire top of the platen to accommodate a customer supplied cable track. Comprehensive mold cooling C7551 or basic mold cooling with manifolds (C7520 + C7522) has to be selected with this special.
            Reference:
            Reference project 344851 (H4L500 RS95/95L) 
            Project #256778
            Dwg# 2600415
            EBOM 2600399
        `,
        rev: 0,
        constraint: {
            clamp: ["H4 500", "H4L 500"],
            injection: []
        },
        prices:[
            { 
                factory: 2000,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            {
                factory: 2426,
                ref: 3193,
                date: new Date("05-07-2022")
            }
        ],
        projects: [
            { id: "#344851", title: "H4L500 RS95/95L" },
            { id: "#256778", title: "HL 400-RS115/115" }
        ],
        boms: ["2600399"],
        dwgs: ["2600415"],
        attachments: [],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050701-11",
        title: "Special Machine Cabinet with Separate Low Voltage Controls Section - H4 (RS80 and Larger)",
        description: `A special cabinet will be designed to separate the Controls section of the cabinet from the 460V power circuits. By doing so, this will create a low voltage Controls section within the machine cabinet. The new Controls section will have a dedicated access door. The door open interlock switch will be removed because it is not needed for Low Voltage circuits. As a result of this change, no power outlets circuit can travel through the Controls section of this cabinet. Standard 2A convenience outlet will stay at its standard location as 110V that feeds the convenience outlet is a “Control Voltage” derived off of the Isolation Controls Transformer.

        Reference project 344851 (H4L500 RS95/95L) ,123908
        `,
        rev: 0,
        prices: [
            {
                factory: 5400,
                ref: NaN,
                date: new Date("01-01-2019")
            },
            {
                factory: 5500,
                ref: 14400,
                date: new Date("05-07-2022")
            }
        ],
        projects: [
            { id: "#344851", title: "H4L 500-RS95/95L" },
            { id: "#123908", title: "H4L 400-RS115/115" }
        ],
        boms: [],
        dwgs: [],
        constraint: {
            clamp: [
                "H4L 400",
                "H4L 500"
            ],
            injection: [
                "RS80/65",
                "RS80/70",
                "RS80/80",
                "RS95/80",
                "RS95/85",
                "RS95/95",
                "RS115/95",
                "RS115/100",
                "RS115/115",
                "RS135/115",
                "RS135/125",
                "RS135/135",
            ]
        },
        attachments: [],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22050702-01",
        title: "Special Altanium Servo function operator interface - H4",
        description: `Provide a special operator interface (similar to standard hydraulic mold functions)  for programing of the servo function driven by the Altanium Controller as an integrated solution where the machine and drive are synchronized real time communication.  
            Note: This special is only applicable when the Interface C6042 (Altanium Mold & Hotrunner Motion Interface) is selected. 
            Reference project 344851
        `,
        rev: 0,
        projects: [
            {
                id: "#344851",
                title: "H4L 500-RS95/95L"
            }
        ],
        boms: [],
        dwgs: [],
        prices: [],
        constraint: {
            clamp: ["H4L 500"],
            injection: []
        },
        attachments: [],
        meta: {
            createdAt: new Date("05-07-2022"),
            updatedAt: new Date("05-07-2022")
        }
    },
    {
        id: "S# 22052601-01",
        title: "Special Pneumatic Core Function for In-Mold Closing with 2 inputs - H4",
        description: `Pneumatic Core-pull For In-Mold Closing, 1 Input (forward), 1 Input (return)
            Consists of one 3 position, double solenoid, spring centered to exhaust, Cv=1.2 air valve mounted on the operator side of the moving platen. A needle valve is provided for manual flow adjustment. 3/8-inch NPT ports are provided for connection to the mold. Electrical power to shift the valve is gate protected.
            This one pneumatic core function will control up to 12 air cylinders on the mold, which is split into two zones. There will be up to six cylinders per zone, and the zones will be labeled as follows: “Swing Shaft Operator Side” and “Swing Shaft Non-Operator Side”. These cylinders are used for the closing action of up to 12 lids (caps) in the mold. One set of inputs (FWD & BACK) from the machine will monitor the two zones and each of the 6 cylinder switches in that zone will be wired in series to the Input. The machine will interface to the mold using a 5-pin M12 receptacle board with 4-pin mating connectors, mounted on the moving platen (Weidmuller Dual Channel 4 Port Module HPN744063). Both sides of the connectors are provided
            Ref project 340170 ( H4L 600)  or .Job #425356
        `,
        rev: 0,
        prices: [
            { 
                factory: 2500,
                ref: NaN
            }
        ],
        projects: [
            { id: "#340170", title: "H4 400-RS80/70" },
        ],
        boms: [],
        dwgs: [],
        constraint: {
            clamp: ["H4 160", "H4 400"],
            injection: []
        },
        attachments: [],
        meta: {
            createdAt: new Date("05-26-2022"),
            updatedAt: new Date("05-26-2022")
        }
    }
];