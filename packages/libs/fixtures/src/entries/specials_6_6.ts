import { Special } from "@proficient/types";

export const specials: Special[] = [
    {
        id: "S# 22031501-01",
        title: "Photo-eye part drop detection for two cavity molds - H4",
        description: `Provides dual beam optical sensors and electronic controls to confirm that both parts have dropped from the mold.

            Two photo eyes are mounted on the stationary platen and reflectors are mounted on the moving platen. This feature is screen selectable and can be enabled or disabled using the option select screen.
            
            The machine logic requires the photo eye input status to be interrupted then re-established prior to the start of the mold closing. If this sequence is not satisfied, automatic cycle will be interrupted
            
            Note: Hylectric option C2017
            
            Ref project: 201809, 170966, 171020 & 171021
        `,
        rev: 0,
        prices: [
            {
                factory: 3344,
                ref: 4400,
                date: new Date("03-15-2022")
            }
        ],
        projects: [
            { id: "#201809", title: "H4 1000-RS135/125" },
            { id: "#170966", title: "H4 1000-RS135/130L" },
            { id: "#171020", title: "H4 1000-RS135/130L" },
            { id: "#171021", title: "H4 1000-RS135/130L" },
        ],
        constraint: {
            clamp: [],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-15-2022"),
            updatedAt: new Date("03-15-2022")
        }
    },
    {
        id: "S# 22031601-01",
        title: "Provide Locking Valve for shot size control on H4 650 RS135",
        description: `Provide special lock-out controls plus hydraulic components to stop the feed screw/inj. piston from drifting during any cycle interruption. The customer intends to use a foaming agent in his resin. As a result of the foaming agent the resin will expand if allowed. Husky will add a Lock-out valve so that during a cycle interrupt the injection piston movement will be locked. 

            Additional Controls Specifications:
            > Prior to un-locking the lock-out valve, hydraulic pressure must be applied to the injection piston (resume shot size control logic). This is to prevent inj. piston from drifting after the lock-out valve is de-energized.
            
            Reference:
            > project 358526 H4 650 RS135/135L
            > project 860762 or J/N 637790 (H400 RS115/115)
            > Lock valve assembly EBOM4776600
        `,
        rev: 0,
        projects: [
            { id: "#358526", title: "H4 650 RS135/135L" },
            { id: "#860762", title: "H400-RS115/115" },
            { id: "#637790", title: "H400 RS115/115" },
        ],
        prices: [
            {
                factory: 14400,
                ref: 19000,
                date: new Date("03-16-2022")
            }
        ],
        constraint: {
            clamp: [],
            injection: ["RS135/135", "RS135/125", "RS135/115"],
        },
        attachments: [],
        boms: ["4776600"],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-16-2022"),
            updatedAt: new Date("03-16-2022")
        }
    },
    {
        id: "S# 22031601-02",
        title: "Special  Husky Pin Shut Off Nozzle - H4 RS135/135L",
        description: `Provide a special Husky Pin Shut Off Nozzle assembly with a dual channel shut-off head.
            The customer runs their applications with a foaming agent.  In order to address the customer’s issue with foaming resin drooling into the mold, a dual channel pin shut-off head has been suggested.  
            The software controls remain standard.
            
            Reference:
            > project 358526 H4 650 RS135/135L
            > J/N 637790 (H400 RS115/115)
            > Dual channel pin shut-off assembly - EBOM3313289
            > Dual channel shutoff head reference dwg#3313264
        `,
        rev: 0,
        constraint: {
            clamp: [],
            injection: ["RS135/135L"]
        },
        prices: [
            {
                factory: 15960,
                ref: 21000,
                date: new Date("03-16-2022")
            }
        ],
        projects: [
            { id: "#358526", title: "H4 650 RS135/135L" },
            { id: "#637790", title: "H400 RS115/115" } 
        ],
        attachments: [],
        boms: ["3313289"],
        dwgs: ["3313264"],
        hpns: [],
        meta: {
            createdAt: new Date("03-16-2022"),
            updatedAt: new Date("03-16-2022")
        }
    },
    {
        id: "S# 22031601-03",
        title: "Low Pressure Start Position Change - H4",
        description: `This is Software Engineering only, for part interference change.
            Change the maximum starting set point of 100mm for low pressure close to 300mm. The molds have extended pins that are exposed to damage / breakage when part interference occurs during closing.
            
            Ref. project 358526 H4 650 RS135/135L or Project 691480 (H400 RS115/115)
        `,
        rev: 0,
        constraint: {
            clamp: [],
            injection: []
        },
        prices: [
            {
                factory: 600,
                ref: 800,
                date: new Date("03-16-2022")
            }
        ],
        projects: [
            { id: "#358526", title: "H4 650 RS135/135L" },
            { id: "#691480", title: "H400 RS115/115" }
        ],
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-16-2022"),
            updatedAt: new Date("03-16-2022")
        }
    },
    {
        id: "S# 13123001-04",
        title: "High power screw drive H4 RS135/135L (same as standard option C4506)",
        description: `Screw drive power is increased to turn the screw with 40% more torque at a peripheral screw speed of 0.80m/s  for a RS135/135L injection unit to achieve the following spec:

            Screw speed: 113 RPM
            Peripheral Screw Speed: O.80m/s
            Screw Torque:11,900 Nm
            
            Note: This special is created per engineering's request since the standard option C4560 hasn't been engineered yet and isn't readily available on the standard matrix yet.
            
            
            Ref. project 358526 H4 650 RS135/135L
        `,
        rev: 0,
        constraint: {
            clamp: [],
            injection: ["RS135/135L"]
        },
        prices: [
            {
                factory: NaN,
                ref: 20500,
                date: new Date("03-16-2022")
            }
        ],
        projects: [
            { id: "#358526", title: "H4 650 RS135/135L" }
        ],
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-16-2022"),
            updatedAt: new Date("03-16-2022")
        }
    },
    {
        id: "S# 22032101-01",
        title: "Interface and Software for Six Mold Mounted Photo Eye for Part Detection (free drop application) - H4 machines",
        description: `Provides connectors and electronic controls to confirm that the parts have dropped from the mold. This special is screen selectable and can be enabled or disabled using the option select screen.
            Up to six (6) photo eyes can be selected on the screen. The machine logic will be per engineering’s recommendation for free drop application ( e.g. photo eye input status to be interrupted then re-established or all clear signals, etc.)  prior to the start of the mold closing. If this sequence is not satisfied, the automatic cycle will be aborted.
            
            Photoeyes and related cables will be provided with the machine. Mounting hardware ( brackets, etc.) for the photo eyes to be installed on the mold will be provided by customer.  Engineering to provide made and model of photoeyes for customer’s reference. 
            
            Interface connectors for these mold-mounted photo-eyes are to be via six (6) Harting HAN-4 connectors. Both sides of the connector will be provided. The connectors will be mounted on the non-op side of the moving platen.
            
            Details to be reviewed and confirmed with customer/Engineering at the time of order.
            
            Reference
            Photo eyes: HPN: 721658, 4154014 and 4844995
            J/N200151 H650 RS115/100 and #435668 (H400) or project 662471
        `,
        rev: 0,
        prices: [
            {
                factory: 2000,
                ref: NaN,
                date: new Date("01-01-2014")
            },
            {
                factory: 3500,
                ref: 4600,
                date: new Date("03-21-2022")

            }
        ],
        projects: [
            { id: "#200151", title: "H650 RS115/100" },
            { id: "#435668", title: "H400-RS80/70" },
            { id: "#662471", title: "H225-RS65/60" }
        ],
        attachments: [],
        boms: [],
        constraint: {
            clamp: [],
            injection: []
        },
        dwgs: [],
        hpns: ["712658", "4154014", "4844995"],
        meta: {
            createdAt: new Date("03-21-2022"),
            updatedAt: new Date("03-21-2022")
        }
    },
    {
        id: "S# 22032101-02",
        title: "Special adapter plates for the H4 500/600 SMC to accept molds running with a H4 400 SMC",
        description: `Provides two special adapter plates (thickness to be confirmed by Engineering) along with special mounting hardware ( longer mounting bolts, etc.) for a H4 500/600 SMC . These adapter plates will enable the machine to accept molds running in a H4 400 machine using the standard H4 400 SMC. 

            Design Concept:  Adapter plates with male keys on both sides and 12 standard through holes for mounting bolts could be made that would mount to the SMC.  The standard keys would be removed from the standard SMC option to allow the special adapter plates to be installed.  The keys on the adapter plates would be a tight tolerance to the SMC to provide good locational accuracy and the three mounting bolts for the standard keys (2 top & 1 bottom) could be used with longer bolts to secure the plates in place.  Through holes at all 12 standard mounting bolt locations would be used with longer mounting bolts to secure the centre section of the stack mold.
            
            Reference
            project 351166
            or  Reference project 144930, BOM 10094022 or HPN 3939907
        `,
        rev: 0,
        prices: [
            {
                factory: 7113,
                ref: 9360,
                date: new Date("03-21-2022")
            }
        ],
        projects: [
            { id: "#351166", title: "H4 500 RS95/85" }
        ],
        constraint: {
            clamp: ["H4 500", "H4 600"],
            injection: []
        },
        attachments: [],
        boms: ["10094022"],
        dwgs: [],
        hpns: ["3939907"],
        meta: {
            createdAt: new Date("03-21-2022"),
            updatedAt: new Date("03-21-2022")
        }
    },
    {
        id: "S# 22041101-01",
        title: "Special walkway ladder",
        description: `Customer has order Option C2012 (200mm risers) with a walkway however they would would like the ladder to be the heigth configuration for a machine without the 200mm risers as they don't know when they will add the risers.

            Notes: This special ladder will be included in the kit section.
            
            Ref projects: 348061 & 348062
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 1721,
                date: new Date("04-11-2022")
            }
        ],
        projects: [
            { id: "#348061", title: "H4 650-RS115/100" },
            { id: "#348062", title: "H4 650-RS115/100" }
        ],
        constraint: {
            clamp: [],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {
        id: "S#22041102-01",
        title: "Fire Detection Interface - H4",
        description: `Provide a 24VDC relay to interface with a customer fire detection signal. If the 24VDC signal from the customer's fire device goes low (fail safe): 
            1. The machine will complete the cycle and stop. 
            2. The pump will shut down. 
            3. The barrel heat circuit will turn off. 
            In addition, an alarm message, " Fire Alarm Detected" will be on the operator interface. 
            The interface consists of a standard 4 pin connector (3+G) located on the right hand side of the control cabinet. Both sides of the connector are supplied. 
            
            Refer to a similar special on J/N436934. For the new special, the signal is not linked to the e-stop circuit and not only do they want the main motor to stop, they want all of the barrel heats to shut down as well. 
            
            Reference project #966659, 931771, 908130, 686620, 612278
        `,
        rev: 0,
        prices: [
            {
                factory: 1000,
                ref: NaN,
                date: new Date("01-20-2014")
            },
            {
                factory: 1811,
                ref: 2400,
                date: new Date("04-11-2022")
            }
        ],
        projects: [
            { id: "#966659", title: "H4 600-RS115/95" },
            { id: "#931771", title: "H800-RS115/100" },
            { id: "#908130", title: "H650-RS95/85" },
            { id: "#686620", title: "H650-RS95/85" },
            { id: "#612278", title: "H1000-RS115/100" }
        ],
        constraint: {
            clamp: [],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {
        id: "S# 22041102-02",
        title: "Production Monitoring signals for H4 -RS115 (5 digital and 5 analog signals).",
        description: `Machine will supply analog and digital signals for process monitoring equipment.
            Five 24VDC dry contact digital signals are:
            1. Overall Cycle Time (0.5 sec pulse at the beginning of mold close)
            2. Mold Cooling Time (High at beginning Low at End)
            3. Fill Time (High at beginning Low at End)
            4. Screw Recovery Time (High during screw rotation)
            5. Hold Time (High at beginning Low at End) 
            
            Also 0 - 10V analog signals will be provided for:
            1. Injection Screw Position prior to injection - This is a latched value during the cycle. Range: 0 mm (0 V) to 500 mm (10V) for RS115.
            2. Maximum Back Pressure -This is a latched value during the cycle. Range: 0 psi (0 V) to 3625 psi (10V).
            3. Peak Injection Pressure -This is a latched value during the cycle. Range: 0 psi (0 V) to 3625 psi (10V).
            4. Hold Pressure - This is a continuous monitoring signal with variable voltage. Range: 0 psi (0 V) to 3625 psi (10V).
            5. Maximum Screw RPM - This is a latched value during the cycle. Range: 0 rpm (0 V) to 271 rpm (10V). This range is for a RS115/95 High speed screw drive.
            All signals are terminated in the machine control cabinet. These signals need to be present only in Automatic mode. There will be no HMI screen for this special.
            Husky Standards:
            > Signal Voltage: 24 VDC for digital signals and 0 - 10V for analog signals unless specified otherwise
            > Digital outputs signals are not Gate Protected unless specified.
            > 2 channel analog output terminal (Beckhoff KL4002 with 12 bits resolutions)
            > 0.0024V resolution (0-10 analog signal is divided into 4095 increments)
            > Note: dry contact means indirect signal (we do not supply a direct signal to the customer).
            > The pressure range is based on a pressure transducer capability (3625 psi). The maximum system pressure is a 2610 psi.
            
            Reference project 966659
        `,
        rev: 0,
        prices: [
            {
                factory: 3380,
                ref: 4500,
                date: new Date("04-11-2022")

            }
        ],
        projects: [
            { id: "#966659", title: "H4 600-RS115/95" }
        ],
        attachments: [],
        boms: [],
        constraint: {
            clamp: [],
            injection: ["RS115/95"],
        },
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {   
        id: "S#22041102-03",
        title: "Provision For Non-Operator Side Operation of the Machine including Additional E-Stop  H4/H4L 600",
        description: `Provide the full provision to mount the HMI on the non-operator side of the machine (similar to option C1002). This is to include the cutout provisions on the non-operator side stationary platen guard, the necessary HMI cable lengths to reach the non-op side and the necessary HMI brackets for non-operator side operation. These brackets are to be provided as "loose" items in the KIT section. An additional e-stop button (option C6505) is also provided on the non-operator side stationary platen guard.
            The HMI is to be mounted in the standard location on the operator side of the machine. The screens and HMI buttons are not modified to represent the re-orientation of the clamp and injection unit relative to the new operator position. Please note that this machine has been ordered with 200mm risers.
        
            Reference project #966659, 931771, 908130
        `,
        rev: 0,
        prices: [
            {
               factory: 3500,
               ref: NaN,
               date: new Date("01-01-2014") 
            },
            {
                factory: 3675,
                ref: 4835,
                date: new Date("04-11-2022")
            }
        ],
        projects: [
            { id: "#966659", title: "H4 600-RS115/95" },
            { id: "#931771", title: "H800-RS115/100" },
            { id: "#908130", title: "H800-RS115/100" }
        ],
        constraint: {
            clamp: ["H4 600", "H4L 600"],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {
        id: "S#22041102-04",
        title: "Integrated Off-Line Filtration (OLF) Unit - 115V for UL - H4",
        description: `Provide a dedicated Hydac off-line filter (OLF) with associated hardware. The filtration pump is to be rated for 10GPM.  The suction (inlet) side of the Hydac filtration unit will attach to the existing drain port on the tank and return back to a modified tank cover, at the furthest location from drain port. The modified tank cover will have a down spout to return the clean oil under the existing oil level. Particle counter and hoses are included.

            Note: This is a stand-alone unit. The unit will not be tested during the machine test. The filtration unit will need to be installed at the customer site. Connection ports will need to be capped. The unit should be ordered with the correct voltage (for 115V) to match the special power outlet provided with this machine.
        
            Reference project Reference project 966659 (H4 600 RS115), 739934
        `,
        rev: 0,
        constraint: {
            clamp: [],
            injection: []
        },
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        prices: [
            {
                factory: 7500,
                ref: NaN,
                date: new Date("05-05-2017")
            },
            {
                factory: 9487,
                ref: 12500,
                date: new Date("05-11-2022")
            }
        ],
        projects: [
            { id: "#966659", title: "H4 600-RS115/95" },
            { id: "#739934", title: "H650-RS95/85" }
        ],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },  
    {
        id: "S#22041102-05",
        title: "Power Outlet - 115V/Single phase/15A for Off-line filtration (OLF) - H4",
        description: `Provide a 115V/Single phase/15A power outlet on the right hand side of the machine cabinet.  Husky to specify the connector type.  This outlet will be used to power the Hydac off-line filtration unit.

            Reference project 966659 (H4 600 RS115)
        `,
        rev: 0,
        prices: [
            {
                factory: 1050,
                ref: NaN,
                date: new Date("01-01-2007")
            },
            {
                factory: 1365,
                ref: 1800,
                date: new Date("04-11-2022")
            }
        ],
        projects: [
            { id: "#966659", title: "H4 600-RS115/95" }
        ],
        attachments: [],
        boms: [],
        constraint: {
            clamp: [],
            injection: []
        },
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {
        id: "S#22041102-06",
        title: "Special basic mold cooling package (2\") for both Operator and Non-operator side with manual shutoff valves- H4/H4L 500 or 600",
        description: `Provide 2" basic mold cooling package for both operator and non-operator side. 

            2 inch supply and return mold cooling water circuits are provided on each platen on both the operator side and non-operator side. The operator side cooling circuits will be tee-off from the non-operator side. Only one main 2" supply and one 2" return connection points are provided on the standard location of the stationary platen non-operator side. 
        
            All components in contact with water are non-corrosive (rubber or stainless steel). Supply and return connection blocks with 2"NPT ports are mounted to the non-operator side and operator side of platen. The main water connections consist of four patented modular connection blocks with 2" NPT ports located outside the clamp guarding beside the stationary platen. Water is conveyed from the main supply to the moving platen connection blocks using 2" hose. 
        
            Two 2” quarter turn ball valves are also provided —one for each platen—installed on the supply side of each circuit to allow mold cooling water to be manually turned on and off. 
        
            Reference project #966659 (H4 600 RS115), 931771, 908130, 686620 ( H650) 
            Reference project #339398 (HL650), dwg. 3333686
        `,
        rev: 0,
        projects: [
            { id: "#966659", title: "H4 600-RS115/95" },
            { id: "#931771", title: "H800-RS115/100" },
            { id: "#908130", title: "H650-RS95/85" },
            { id: "#686620", title: "H650-RS95/85" },
            { id: "#339398", title: "HL650-RS95/85" }
        ],
        attachments: [],
        boms: [],
        hpns: [],
        dwgs: ["3333686"],
        constraint: {
            clamp: ["H4 500", "H4L 500", "H4 600", "H4L 600"],
            injection: []
        },
        prices: [
            {
                factory: 20024,
                ref: NaN,
                date: new Date("01-01-2022")
            },
            {
                factory: 22026,
                ref: 29000,
                date:  new Date("04-1`-2022")
            }
        ],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {
        id: "S#22041102-07",
        title: "Special 460V Convenience Outlet Package (2x15A/1 Ph, 30A/3Ph) - H4",
        description: `Provides an outlet package consisting of two 15A/115V duplex single phase convenience outlet, and one 30A/460V three phase convenience outlet. (Hubbell connectors).

            The outlets are to be mounted on the non-operator side, clamp base, mid leg.
        
            Reference 966659, 931771, 898318, 695924
        `,
        attachments: [],
        boms: [],
        constraint: {
            clamp: [],
            injection: [],
        },
        prices: [],
        projects: [
            { id: "#966659", title: "H4 600-RS115/95" },
            { id: "#931771", title: "H800-RS115/100" },
            { id: "#898318", title: "H650-RS80/70" },
            { id: "#695924", title: "H600-RS95/85" },
        ],
        rev: 0,
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {
        id: "S#22041102-08",
        title: "Administrator Level adjustable Auto-Logout Timer on H4",
        description: `Modify the HMI screens software on the machine, so that at the Administrator Access Level the customer can select the amount of idle time before the user is logged.  The timer range is 0 to 60 minutes.  The logout is recorded in the running history in the HMI.
            The customer wants to minimize occurrences when a user is logged-in and walks away and then having someone else walk up to the HMI and make changes on the other users' ID.
        
            Ref. Job#775083/752820/602775
        `,
        rev: 0,
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        prices: [
            {
                factory: 550,
                ref: NaN,
                date: new Date("01-01-2016")
            },
            {
                factory: 800,
                ref: NaN,
                date: new Date("01-01-2018") 
            },
            {
                factory: 960,
                ref: 1300,
                date: new Date("04-11-2022")
            }
        ],
        projects: [
            { id: "#775083", title: "HyPAC HL600-RS80/70" },
            { id: "#752820", title: "HyPAC HL600-RS80/70" },
            { id: "#602775", title: "H300-RS95/80" },
        ],
        constraint: {
            clamp: [],
            injection: [],
        },
        meta: {
            createdAt: new Date("04-11-2022"),
            updatedAt: new Date("04-11-2022")
        }
    },
    {
        id: "S# 22041201-01",
        title: "Increase injection accumulator capacity for H4H4L RS135 (with high speed accumulator assist)",
        description: `Provide 8x50L accumulators instead of 7x50L accumulators. The application requires non-standard shot size support. 
            This configuration will support 34% of injection stroke.
        
            The standard accumulator manifold for both standard or high speed has an extra port for the additional 50L bottle.
        
            Ref project: 201809 (H4 1000 RS135) , 901881
        `,
        rev: 0,
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        prices: [],
        projects: [
            { id: "#201809", title: "H4 1000-RS135/125" },
            { id: "#901881", title: "H1000-RS135/125" }
        ],
        constraint: {
            clamp: [],
            injection: ["RS135/135","RS135/125", "RS135/115"],
            injectionRate: "high-speed"
        },
        meta: {
            createdAt: new Date("04-12-2022"),
            updatedAt: new Date("04-12-2022")
        }
    },
    {
        id: "S#22041301-01",
        title: "Provide 100A/3ph/240V power outlet (for 460V UL) - H4",
        description: `Provide one 100A/3ph/240V power outlet for customer supplied Hot Runner Controller.

            Outlet location: near the injection end of the machine on the right hand side of the machine control cabinet. Connector type: plug & receptacle per Husky standard (location C).
        
            Note: This outlet is for a free standing Hot Runner Controller
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 7800,
                date: new Date("04-13-2022")
            }
        ],
        projects: [],
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        constraint: {
            clamp: [],
            injection: []
        },
        meta: {
            createdAt: new Date("04-13-2022"),
            updatedAt: new Date("04-13-2022")
        }
    },
    {
        id: "S#22041302-01",
        title: "Special stack mold center carrier for 1\" hot runner mounting bolts",
        description: `Provide a stack mold carrier with upsized mold mounting clearance holes to accept  hot runner with special 1" mounting bolts.

            Note: Husky standard center carrier is designed with 25mm dia. clearance hole for M24 mounting bolts. Customer ordered hot runner using special 1" SHCS instead of the Husky standard M24 for the installation to the SMC as their in-house standard. The SMC will need to be modified to meet customer's standard.
        
            Reference project 343647 ( H300) , 394610 or 609195 (HL600), HPN 3474996
        `,
        rev: 0,
        attachments: [],
        boms: [],
        dwgs: [],
        prices: [
            {
                factory: 1000,
                ref: 1320,
                date: new Date("04-13-2022")
            }
        ],
        hpns: ["3474996"],
        projects: [
            { id: "#394610", title: "HL600 PKG-P100/80E120" },
            { id: "#609195", title: "HL600 PKG-P100/80E100" }
        ],
        constraint: {
            clamp: [],
            injection: [],
        },
        meta: { 
            createdAt: new Date("04-13-2022"),
            updatedAt: new Date("04-13-2022")
        }
    },
    {
        id: "S# 22050201-01",
        title: "Special high speed screw drive for RS115/100L (UL) - 1.35 m/s, 5500 Nm",
        description: `Increase the available recovery torque from High speed screw drive C4504 spec of 1.35 m/s & 4250Nm to 1.35m/s & 5500Nm.
            This changes the gear box ratio: HPN 2385619 Gear Box FZ901.3 (9.9:1) into HPN 2385640 Gear Box FZ901.3 (12.8:1).
        
            Ref project 344853 & 351186
        `,
        rev: 0,
        prices: [
            {
                factory: 1500,
                ref: 1975,
                date: new Date("05-02-2022")
            }
        ],
        projects: [
            { id: "#344853", title: "H4 650-RS115/100" },
            { id: "#351186", title: "H4 650-RS115/100" }

        ],
        constraint: {
            clamp: [],
            injection: ["RS115/100"]
        },
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("05-02-2022"),
            updatedAt: new Date("05-02-2022")
        }
    },
    {
        id: "S# 22050501-01",
        title: "Add one servo core valve gates with independent control",
        description: `Prepare software package for field upgrade of machine SN 9761792.

            1. Upgrade the machine software to the latest stable version.
            Bacground: Machine SN 9762095, which is a machine with the same features, but of different size (H4L160 RS55/50) had issues with Altanium integration. The issues were resolved by installing 2021.1.1.PL006 and CoreJogPressureMaintainFix.001 deviation chart.
            2. Add special operator interface for programing of one servo core function driven by the Altanium Controller as an integrated solution where the machine and drive are synchronized real time communication.  
            
            Note:
            The machine already has the following options:
            
            
            Reference SN 9762095
        `,
        rev: 0,
        prices: [],
        projects: [
            { id: "#130463", title: "H4L 160-RS55/55" }
        ],
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        constraint: {
            clamp: ["H4L 160"],
            injection: []
        },
        meta: {
            createdAt: new Date("05-04-2022"),
            updatedAt: new Date("05-04-2022")
        }
    }
];