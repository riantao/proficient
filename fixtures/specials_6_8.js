module.exports = [
    {
        id: "S# 21121601-01",
        title: "In-platen ejector for H4L 225-RS55",
        description: `Provide the following:

        - The two hydraulic in-platen ejectors will be in the machine stationary platen. The ejector piston centers will be located on the machine vertical center-line, one 10 inches above the horizontal centerline and one 10 inches below.
        
         - The in-platen ejector design will be based on Husky assembly drawing 85762 and ejector piston drawing 727166.
        
         - The combined force of these pistons will be approx. 25,000 lbs forward (push), and approx. 8000 lbs return (pull). The total stroke of the in-platen ejector piston will be 2.75 inches. The in-platen ejector piston will be flush with the stationary platen when it is in the fully retracted position. Please ensure that this results in sufficient mold ejector plate stroke.
        
         - The mold will come equipped with a total of two proxy switches that will indicate the full forward and back ejector plate positions. Husky will provide two female connectors mounted on or near the stationary platen for the proxy signal feedback. Also provided with the machine will be the male connectors that can be wired to the proxy switches. This is only required on the stationary platen.
        
         - The mold is a stack mold with two ejector plates. The standard machine hydraulic ejector system, located on the moving platen, will be used to operator one ejector plate, and the special stationary hydraulic in-platen ejector system will operate the other. They are completely separate systems and are independently controlled. Each has an operator settable ejector start position based on the clamp stroke, multiple stroke capability, and control of forward and back speed and pressure.
        
         - The mold will come equipped with bosses on the stationary platen side ejector plate. These bosses will engage with the 13mm deep x 20mm wide slot in the ejector piston to prevent piston rotation when the ejector plate is being fastened to the pistons (by one 5/8" - 11 UNC fastener).
        
        - The standard flow hydraulic function will be used to power this special. The price of hydraulic function is not included with this quote.
        
        - Ejector interface info. to be provided to the customer to verify correct fitment with their mold.  Include the ejector piston dia., tap size and location in reference to the center of the platen.
        
        Reference project 664160
        `,
        rev: 0,
        prices: [
            {
                factory: 21500,
                ref: 27000,
                date: new Date("12-16-2021")
            }
        ],
        projects: [
            { id: "#664160", title: "HL225-RS55/55" }
        ],
        constraint: {
            clamp: ["H4L 225"],
            injection: ["RS55/55"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("12-16-2021"),
            updatedAt: new Date("12-16-2021"),
        }
    },
    {
        id: "S# 21121601-02",
        title: "Nylon screw for RS55/55",
        description: `Provide 55 mm diameter nylon feed screw, HPN3077373.

        Refer to Master drawing - 3043528.
        `,
        rev: 0,
        prices: [
            {
                factory: 1700,
                ref: 2250,
                date: new Date("12-16-2021")
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: ["RS55/55"]
        },  
        attachments: [],
        boms: [],
        dwgs: ["3043528"],
        hpns: ["3077373"],
        meta: {
            createdAt: new Date("12-16-2021"),
            updatedAt: new Date("12-16-2021"),
        }
    },
    {
        id: "S# 21121601-03",
        title: "Bolt-style Shutoff Nozzle (Herzog design) on H4 L225 RS55",
        description: `Design for the bolt-style shut-off (Hertzog design) as follows:
        - Single hydraulic solenoid to close, with plastic pressure to open.
        · Hertzog to provide us with shut-off body, nozzle tip (100mm long, 1/2"R and 14mm dia. orifice), hydraulic cylinder, 2 heater bands including 2 power and 1 thermocouple cables.
         > 230V- heater band for extra nozzle zone (tip adapter).
         > 230V- shut-off body heater band.  Both power and thermocouple feedback for this zone.
        · The hydraulic cylinder was relocated from the standard Hertzog position (near the shut-off body), to underneath the feedthroat to prevent excessive heat to cylinder seals. (Refer to assembly drawing # 2543007)
        · One proxy will be used to detect the nozzle close position. The nozzle is opened by plastic pressure during injection. The nozzle is closed by an actuator. 
        - Use standard pneumatic shutoff logic 
        · Pressure reducing valve was added to protect the hydraulic cylinder. This valve should be set to approximately 50 bar.  It is located on the top of the shut-off manifold.
        · Husky Specials Engineering to ensure Hertzog provides long enough power and feedback cables to reach our connectors.  
        · Provide an additional heat zone, "Nozzle Extension".
        Herzog to provide the following list of parts:
        - BHP1.1 nozzle complete (with tip)
        - 1HP110.10002.192 240 V heater
        - 1HP110.90012.192 tip heater band
        -  1-900.00003 "J" typr T/C
         
        > Ref. Project 664160
        `,
        rev: 0,
        prices: [
            {
                factory: 15000,
                ref: NaN,
                date: new Date("01-01-2012")
            },
            {
                factory: 23000,
                ref: 30300,
                date: new Date("12-16-2021")
            }
        ],
        projects: [
            { id: "#664160", title: "HL225-RS55/55" }
        ],
        constraint: {
            clamp: ["H4L 225"],
            injection: ["RS55/55"]
        },  
        attachments: [],
        boms: [],
        dwgs: ["2543007"],
        hpns: [],
        meta: {
            createdAt: new Date("12-16-2021"),
            updatedAt: new Date("12-16-2021"),
        }
    },
    {
        id: "S# 21121601-04",
        title: "Nozzle tip (Herzog design) on H4L225 RS55",
        description: `Herzog std. Nozzle tip for their Bolt-style shut-off nozzle with the following specs.:
        - 1/2" Rad, TBD mm dia. Orifice, 100mm length
        
        
        > Ref. Project 664160
        `,
        rev: 0,
        prices: [
            {
                factory: 2250,
                ref: 2960,
                date: new Date("12-16-2021")
            }
        ],
        projects: [
            { id: "#664160", title: "HL225-RS55/55" }
        ],
        constraint: {
            clamp: ["H4L 225"],
            injection: ["RS55/55"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["2303795", "2557756", "2423520"],
        meta: {
            createdAt: new Date("12-16-2021"),
            updatedAt: new Date("12-16-2021"),
        }
    },
    {
        id: "S# 21121601-05",
        title: "Special High Torque Screw Drive (1.00 m/s) on H4L225 RS55/55 with 1242 Nm Torque",
        description: `Provide the drive components and controls to support the following: 
        > Peripheral screw speed:  1.0 m/s (347 RPM)
        > Screw Torque: 1242 Nm
        
        Reference for RS55/55, 460V UL system:
        Gearbox ratio: 7.94 (HPN2303795 for 132 frame) 
        Motor Type: DSF132ML (HPN 2557756) 
        Drive Type: BUM62 75/97.5 (HPN 2423520) 
        
        Reference project 664160 (after field retrofit prj 693511)
        `,
        rev: 0,
        prices: [
            {
                factory: 6500,
                ref: 8600,
                date: new Date("12-16-2021")
            }
        ],
        projects: [
            { id: "#664160", title: "HL225-RS55/55" }
        ],
        constraint: {
            clamp: ["H4L 225"],
            injection: ["RS55/55"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["2303795", "2557756", "2423520"],
        meta: {
            createdAt: new Date("12-16-2021"),
            updatedAt: new Date("12-16-2021"),
        }
    },
    {
        id: "S# 21121601-06",
        title: "Pin-style Shutoff Nozzle (Hertzog design) on H4/H4L 225 RS45/42",
        description: `Design for the pin style shut-off (Hertzog design) as follows:
        - Single hydraulic solenoid to close, with plastic pressure to open.
        · Hertzog to provide us with shut-off body, hydraulic cylinder, heater band and coil heater including power and thermocouple cables (two of each).
        > 230V or line voltage (TBD by engineering)- - coil heater for extra nozzle zone (tip adapter).  Both power and thermocouple feedback for this zone.
        > 230V or line voltage (TBD by engineering)- shut-off body heater band.  Both power and thermocouple feedback for this zone.
        · The hydraulic cylinder was relocated from the standard Hertzog position (near the shut-off body), to underneath the feedthroat to prevent excessive heat to cylinder seals. (Refer to assembly drawing #2543007)
        · One proxy will be used to detect the nozzle close position. The nozzle is opened by plastic pressure during injection. The nozzle is closed by an actuator. 
        - Use standard pneumatic shutoff logic 
        · Pressure reducing valve was added to protect the hydraulic cylinder. This valve should be set to approximately 50 bar.  It is located on the top of the shut-off manifold.
        · Husky Specials Engineering to ensure Hertzog provides long enough power and feedback cables to reach our connectors.  
                    
        · Provide an additional heat zone, "Nozzle Extension".
        
        NOTE: The Hertzog Shut-Off Nozzle is not covered under Husky warranty. The customer has selected the Hertzog nozzle, and, as such, Husky cannot guarantee injection performance. 
                    
        > Ref. Ref.  project # 634660 (HL225 RS55/55) , Job#448802 or 282001 (H225 RS45/42) drawing 3544570 Hertzog Shut off Assy RS45. This special has one shutoff zone and two nozzle adapter zones.  The shutoff zone has one proximity switch to detect the closed position and one hydraulic solenoid valve for closing.  The open action is by plastic pressure and has no solenoid valve.
        `,
        rev: 0,
        prices: [
            {
                factory: 15000,
                ref: NaN,
                date: new Date("01-01-2012")
            },
            {
                factory: 25000,
                ref: 33000,
                date: new Date("12-16-2021")
            }
        ],
        projects: [
            { id: "#634660", title: "HL225 RS55/55" },
            { id: "#448802", title: "HL225-RS45/42" },
            { id: "#282001", title: "H225-RS45/42" }
        ],
        constraint: {
            clamp: ["H4 225", "H4L 225"],
            injection: ["RS45/42"]
        },  
        attachments: [],
        boms: [],
        dwgs: ["3544570", "2543007"],
        hpns: [],
        meta: {
            createdAt: new Date("12-16-2021"),
            updatedAt: new Date("12-16-2021"),
        }
    },
    {
        id: "S# 21121601-07",
        title: "Nylon screw for RS45/42",
        description: `Provide 42 mm diameter nylon feed screw

        The ball check valve has been ordered (opt#C4080).
        
        Refer to Master drawing - 3043528. Reference HPN 3077340.
        
        Reference project 448802
        `,
        rev: 0,
        prices: [
            {
                factory: 1800,
                ref: 2400,
                date: new Date("03-01-2022")
            }
        ],
        projects: [
            { id: "#448802", title: "H225-RS45/42" }
        ],
        constraint: {
            clamp: [],
            injection: ["RS45/42"]
        },  
        attachments: [],
        boms: [],
        dwgs: ["3043528"],
        hpns: ["3077340"],
        meta: {
            createdAt: new Date("12-16-2021"),
            updatedAt: new Date("12-16-2021"),
        }
    },
    {
        id: "S# 21122301-01",
        title: "One Time Engineering Charge and Discount for Screw/Barrel/Drive- H4 120",
        description: "Refer to J/N 676723, 676724, 676725 and 676726 checklists",
        rev: 0,
        prices: [
            {
                factory: 85000,
                ref: NaN,
                date: new Date("01-01-2012")
            },
            {
                factory: 64500,
                ref: 85000,
                date: new Date("12-23-2021")
            }
        ],
        projects: [
            { id: "#676723", title: "H120-RS40/40" },
            { id: "#676724", title: "H120-RS40/40" },
            { id: "#676725", title: "H120-RS40/40" },
            { id: "#676726", title: "H120-RS40/40" }
        ],
        constraint: {
            clamp: ["H4 120"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("12-23-2021"),
            updatedAt: new Date("12-23-2021"),
        }
    },
    {
        id: "S# 21122301-02",
        title: "Eight circuit 3/8\" Sella 80°C water manifolds on H4 120",
        description: `Provides one, 8 circuit, Sella flow regulation manifold (type FR/RMT, 30 l/min) with one thermometer per tube. 

        The flow regulators are mounted to the clamp guarding near the stationary platen on the non-operator side of the machine. The main water supply and return is connected to the regulators using 1 1/4" NPT connections (fittings to be provided by the customer).
        
        Reference project (H120) 676723
        `,
        rev: 0,
        prices: [
            {
                factory: 2710,
                ref: NaN,
                date: new Date("01-01-2012")
            },
            {
                factory: 4471,
                ref: 5800,
                date: new Date("12-23-2021")
            }
        ],
        projects: [
            { id: "#676723", title: "H120-RS40/40" }
        ],
        constraint: {
            clamp: ["H4 120"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("12-23-2021"),
            updatedAt: new Date("12-23-2021"),
        }
    },
    {
        id: "S# 21122301-03",
        title: "Provide 30 KVA Transformer (Mold Heats and one power outlet - 460V/230V 3 PH Transformer - single feed system).",
        description: `Provide a stand-alone step-down 30 kVA transformer for single feed system. The customer is to provide the one 460V drop to the machine (i.e. no separate drop for the 230V). The main breaker gets up-sized. This transformer will feed the following:
        > One 30A/230V/3ph power outlet. The breaker is terminated inside the cabinet.
        > Integrated mold heat package - 4 x 30A (230V) manifold zones.
        
        Husky will supply ~ 7m long set of cables so the customer can place the transformer at convenient location.
        
        Reference:  
        HPN 5905068
        Hammond Quote# EQ481569 - Item #1, 30kVA 460D-230D 60 Hz, CU winding.
        `,
        rev: 0,
        prices: [
            {
                factory: 3775,
                ref: NaN,
                date: new Date("01-01-2012")
            },
            {
                factory: 5700,
                ref: 7500,
                date: new Date("12-23-2021")
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["5905068"],
        meta: {
            createdAt: new Date("12-23-2021"),
            updatedAt: new Date("12-23-2021"),
        }
    },
    {
        id: "S# 21122301-04",
        title: "Decreased Ejector Force on H4 120  from 50 kN to 34.7 kN",
        description: `The up-charge is in addition to the Full Pattern Ejector (C7750) option. 

        Concept:
        The diameter of the standard cylinder will be decreased. Please note that as a result of the smaller bore cylinder, the forward and retract speeds would be faster than the standard value. A new Lin table may be required.
        
        List of Special Materials and Modifications:
        Special clamp column, ejector piston, ejector front cap, and piston seals.
        
        Background:
        Customer requested to decrease the cylinder diameter so that it can match the injection speed of the high speed injection option for their application.
        `,
        rev: 0,
        prices: [
            {
                factory: 2250,
                ref: NaN,
                date: new Date("01-01-2012")
            },
            {
                factory: 4050,
                ref: 5328,
                date: new Date("12-23-2021")
            }
        ],
        projects: [],
        constraint: {
            clamp: ["H4 120"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("12-23-2021"),
            updatedAt: new Date("12-23-2021"),
        }
    },
    {
        id: "S# 21122301-05",
        title: "'Stop Plunger' assisted part ejection logic.- H4 120",
        description: `Provide the following:
        -	During mold opening or opened, Machine Ejector forward command will trigger Stop Plunger to extend to operator set point and retract after it reached the position set point.
        -	Enter a positive value to Distance field to enable and enter zero to disable the feature.
        -	3 additional input fields: Speed, Distance and Pressure to the Stop Plunger screen.
        
        Stop Plunger position to Stop Plunger screen.
        
        Reference project 676723 (retrofit project 777671)
        `,
        rev: 0,
        prices: [
            {
                factory: 5000,
                ref: NaN,
                date: new Date("01-01-2014")
            },
            {
                factory: 6000,
                ref: 8000,
                date: new Date("12-23-2021")
            }
        ],
        projects: [
            { id: "#676723", title: "H120-RS40/40" }
        ],
        constraint: {
            clamp: ["H4 120"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("12-23-2021"),
            updatedAt: new Date("12-23-2021"),
        }
    },
    {
        id: "S# 21122301-06",
        title: "Injection forward and 'Stop Plunger' back position interlock - H4 120",
        description: `Provide the following interlock feature:
        -	Add interlock during machine injection to monitor the distance between Injection forward and Stop Plunger retract position (base on magnet on temposonic rod position). If the value of Injection position minus Stop Plunger position is less than the value set by operator, machine will abort injection immediately and an alarm “Injection position excess the minimum distance to Stop Plunger” will be generated.
        -	An input  field “Stop Plunger Safe to Inject Distance” and a display only field to show the position delta value between Injection and Stop Plunger position to Stop Plunger screen.
        
        Reference project 676723 (retrofit project 777671)
        `,
        rev: 0,
        prices: [
            {
                factory: 5000,
                ref: NaN,
                date: new Date("01-01-2014")
            },
            {
                factory: 6000,
                ref: 8000,
                date: new Date("12-23-2021")
            }
        ],
        projects: [
            { id: "#676723", title: "H120-RS40/40" }
        ],
        constraint: {
            clamp: ["H4 120"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("12-23-2021"),
            updatedAt: new Date("12-23-2021"),
        }
    },
    {
        id: "S# 22011304-01",
        title: "Add 2 servo UltraSync-E valve gates with independent control",
        description: `Hot-Runner UltraSync-E Function

        Provide a special operator interface for programing of the Hot-Runner UltraSync-E function driven by the Altanium Controller as an integrated solution where the machine and drive are synchronized real time communication. The Interface C6042 is required when this option is used. The Interface C6042 has to be ordered separately.
        
        Reference projects: 858192, 921137, 880155
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 7594,
                date: new Date("01-13-2022")
            }
        ],
        projects: [
            { id: "#858192", title: "HNL600-RS95/95" },
            { id: "#921137", title: "HN500-RS60/60" },
            { id: "#880155", title: "HN225-RS40/38" },
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
            createdAt: new Date("01-13-2022"),
            updatedAt: new Date("01-13-2022"),
        }
    },
    {
        id: "S# 22011304-02",
        title: "Special mold cooling package (24x 1\"+ 24x 1\" + 8x 3/4\" + 8x 3/4\") for H4L600",
        description: `Provide special mold cooling packages with 32 circuits for stationary and 32 circuits for moving as specified below: 

        Stationary side (24 x1” + 8 x ¾” circuits)
        - 2" Main supply and return on NOP side guard (standard location)
        - 12 x 1"  and 4x 3/4"ports for water 'IN'  and 12 x 1"  and 4x 3/4"ports for water 'OUT' on NOP side  of platen, stacked standard water manifolds. Ports facing molding area.
        - 12 x 1"  and 4x 3/4"ports for water 'IN'  and 12 x 1"  and 4x 3/4"ports for water 'OUT' on top of platen. Ports facing upwards.
        
        Moving side (24 x1” + 8 x ¾” circuits)
        - 2" Main supply and return on NOP side guard (standard location)
        - 12 x 1" and 4x 3/4" ports for water 'IN' and 12 x 1" and 4x 3/4" ports for water 'OUT' on NOP side  of platen, standard water manifolds. The bottom pair of manifolds will be installed in the 2" modular blocks that are closer to the clamp end of the machine. All ports facing the molding area.
        - 12 x 1" and 4x 3/4" ports for water 'IN' and 12 x 1" and 4x 3/4" ports for water 'OUT' on top of platen. Ports facing upwards.
        
        Also includes the following:
        Two 2" pneumatic shut-off valves—one for each platen—are provided to allow mold cooling water to be turned on and off from a single button on the operator interface.
        The customer can easily relocate the valves to the return side of the circuits if preferred.
        All components in contact with water are non-corrosive (rubber or stainless steel).
        `,
        rev: 0,
        prices: [
            {
                factory: 18814,
                ref: 24815,
                date: new Date("01-13-2022")
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-13-2022"),
            updatedAt: new Date("01-13-2022"),
        }  
    },
    {
        id: "S# 22011304-03",
        title: "Special minimum shutheight limiting software for H4L 600",
        description: `Provide a Selectable Option on the HMI for the Minimum Shutheight on H4L600 (Hylectric H4 or HyPAC H4). Husky to provide special software to adjust the minimum shutheight based on whether the customer is running application with or without the SMC installed. 

        1. Without SMC installed the minimum mold shut height will be the standard 565mm.
        2. With SMC installed the minimum shutheight will be 895mm.
                  
        Background: This machine has a special mold cooling with additional manifolds on the Non-operator side. The new minimum shut height with SMC installed is introduced to avoid the interference between the SMC and the mold cooling installation.
        
        Reference project 939059.
        `,
        rev: 0,
        prices: [
            {
                factory: 1520,
                ref: 2000,
                date: new Date("01-13-2022")
            }
        ],
        projects: [
            { id: "#939059", title: "H4L300-RS95/80" }
        ],
        constraint: {
            clamp: ["H4L 650"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-13-2022"),
            updatedAt: new Date("01-13-2022"),
        }  
    },
    {
        id: "S# 22011304-04",
        title: "Special minimum shutheight limiting software for H4 650",
        description: `Provide a Selectable Option on the HMI for the Minimum Shutheight on H4 650 (Hylectric H4 or HyPAC H4). Husky to provide special software to adjust the minimum shutheight based on whether the customer is running application with or without the SMC installed. 

        1. Without SMC installed the minimum mold shut height will be the standard TBD mm.
        2. With SMC installed the minimum shutheight will be TBD mm.
                  
        Background: This machine has a special mold cooling with additional manifolds on the Non-operator side. The new minimum shut height with SMC installed is introduced to avoid the interference between the SMC and the mold cooling installation.
        
        Reference project 939059.
        `,
        rev: 0,
        prices: [
            {
                factory: 1520,
                ref: 2000,
                date: new Date("01-13-2022")
            }
        ],
        projects: [
            { id: "#939059", title: "H4L300-RS95/80" }
        ],
        constraint: {
            clamp: ["H4 650"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-13-2022"),
            updatedAt: new Date("01-13-2022"),
        }  
    },
    {
        id: "S# 22012101-01",
        title: "Altanium Delta5 and Matrix5 Interface Cable - Advanced Communication",
        description: `Provides an interface cable to connect machine interface option C6040 and the Delta5 or Matrix5 controller. Cable length is 3m (10 feet).

        Note: future option C6271
        
        Ref project: 350609
        `,
        rev: 0,
        prices: [],
        projects: [
            { id: "#350609", title: "H4 600-RS95/85" }
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
            createdAt: new Date("01-21-2022"),
            updatedAt: new Date("01-21-2022"),
        }  
    },
    {
        id: "S# 22012101-02",
        title: "Altanium Matrix2 and Delta3 Interface Cable - Basic Interface",
        description: `Use C6261 with longer cable.

        Provides an interface cable to connect the internal I/O of the Matrix2 and Delta3 Controller. Cable length is 7.6m (25 feet).
        
        Ref project: 360323
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 450,
                date: new Date("01-21-2021")
            }
        ],
        projects: [
            { id: "#360323", title: "H4 400-RS55/45" }
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
            createdAt: new Date("01-21-2022"),
            updatedAt: new Date("01-21-2022"),
        }  
    },
    {
        id: "S# 22012103-01",
        title: "Provide six additional Linear Bearing Blocks (two for each rail) on HL500 or 600",
        description: `Provide six additional bearing blocks (two per side) pre-assembled on the rails:

        - One pair (OS+NOS) located between the stack mold carrier and the moving platen, retained for
        safety to the moving platen.
        - One pair (OS+NOS) located between the stack mold carrier and the stationary platen, retained for
        safety to the stationary platen. 
        The 6 bearing blocks are loaded in the integration section of Baan. 
        The bearing blocks will be used to support a four level stack mold. The minimum Shutheight will be
        limited to 700mm by software to prevent the mold from crushing the bearings.
        Notes:
        - A mold support to be provided by the customer/mold maker or by another special.
        - Bearing block HPN 11338028 with side nipple) will be used for this special.
        - The limit for min. shutheight may be affected by other machine specials.
        
        Reference project 144930
        `,
        rev: 0,
        prices: [
            {
                factory: 2466,
                ref: NaN,
                date: new Date("01-01-2021")
            },
            {
                factory: 2600,
                ref: 3420,
                date: new Date("01-21-2022")
            }
        ],
        projects: [
            { id: "#144930", title: "HNLP600-RS80/80" }
        ],
        constraint: {
            clamp: ["H4L 500", "H4L 600"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["11338028"],
        meta: {
            createdAt: new Date("01-21-2022"),
            updatedAt: new Date("01-21-2022"),
        }  
    },
    {
        id: "S# 22012701-01",
        title: "C2250 Clamp speed up package on H4 300 RS65",
        description: `This is the former H4 option C2250

        The following machine components may be upsized from the standard configuration:
        - Pump motor 
        - System pump 
        - Clamp accumulator
        - Filter pump 
        - Oil cooler 
        - I/O box
        The changes are done to facilitate fast clamp movements for extended amount of time. This change might increase the installed machine power.
        `,
        rev: 0,
        prices: [
            {
                factory: 12630,
                ref: 9600,
                date: new Date("01-27-2022")
            }
        ],
        projects: [],
        constraint: {
            clamp: ["H4 300"],
            injection: ["RS65/65", "RS65/60", "RS65/60"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-27-2022"),
            updatedAt: new Date("01-27-2022"),
        }  
    },
    {
        id: "S# 22012701-02",
        title: "Configurable inputs with \"inhibit mold open\" action",
        description: "Modify the standard option C6050 for configurable options by adding \"inhibit mold open\" (mold safe to open) to the list of available actions.",
        rev: 0,
        prices: [
            {
                factory: 3015,
                ref: 3965,
                date: new Date("01-27-2022")
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-27-2022"),
            updatedAt: new Date("01-27-2022"),
        }  
    },
    {
        id: "S# 22012701-03",
        title: "Euromap 74 Interface for Two Electrically Driven Core Functions on Stationary Platen",
        description: `Euromap 74 Interface for Two Electrically Driven Core Functions on Stationary Platen:
        EUROMAP 74 recommendation defines the connection between the injection moulding machine (IMM) and an external servo drive or frequency converter of electrically driven cores.
        Provide EUROMAP Motion/No motion option with lockable multi-position switch allowed by ANSI B151.1 2017 version
        
        The signals in both the injection moulding machine and the external servo drive or frequency converter of electrically driven cores are given by contacts, e.g. contacts of relays or switches, semiconductors, etc. The contact making is either potential-free or related to a reference potential supplied to a contact of the plug mounted on the injection moulding machine or the external servo drive or frequency converter of the electrically driven cores (see Tables 1 and 2).
        
        Standard 48-pin interface connector to be located on the power pack side wall facing the injection unit. Mating half of the connector will also be provided.
        
        Limit or proximity switches of core pullers shall use Husky standard 5-pin M12 connectors (Weidmuller), located in standard location on non-operator side of Stationary platen.
        
        Do NOT include with this special:
        - Any signals that are optional per EUROMAP standard (pin d1, d2 and d3 on male plug and pins b6 - b11 on female plug) will not be supported  by this special.
        - Do not provide "Slow speed open guards" signal, as defined in Euromap standard as being provided through "a9" contact on the machine (male) plug.
        
        Reference EUROMAP 74 standard, Version 1.3
        `,
        rev: 0,
        prices: [
            {
                factory: 6500,
                ref: 8560,
                date: new Date("01-27-2022")
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-27-2022"),
            updatedAt: new Date("01-27-2022"),
        }  
    },
    {
        id: "S# 22012701-04",
        title: "Euromap 74 Interface for Two Electrically Driven Core Functions on Moving Platen",
        description: `Euromap 74 Interface for Two Electrically Driven Core Functions on Moving Platen:
        EUROMAP 74 recommendation defines the connection between the injection moulding machine (IMM) and an external servo drive or frequency converter of electrically driven cores.
        Provide EUROMAP Motion/No motion option with lockable multi-position switch allowed by ANSI B151.1 2017 version
        
        The signals in both the injection moulding machine and the external servo drive or frequency converter of electrically driven cores are given by contacts, e.g. contacts of relays or switches, semiconductors, etc. The contact making is either potential-free or related to a reference potential supplied to a contact of the plug mounted on the injection moulding machine or the external servo drive or frequency converter of the electrically driven cores (see Tables 1 and 2).
        
        Standard 48-pin interface connector to be located on the power pack side wall facing the injection unit. Mating half of the connector will also be provided.
        
        Limit or proximity switches of core pullers shall use Husky standard 5-pin M12 connectors (Weidmuller), located in standard location on non-operator side of Moving platen.
        
        Do NOT include with this special:
        - Any signals that are optional per EUROMAP standard (pin d1, d2 and d3 on male plug and pins b6 - b11 on female plug) will not be supported  by this special.
        - Do not provide "Slow speed open guards" signal, as defined in Euromap standard as being provided through "a9" contact on the machine (male) plug.
        
        Reference EUROMAP 74 standard, Version 1.3
        `,
        rev: 0,
        prices: [
            {
                factory: 6500,
                ref: 8560,
                date: new Date("01-27-2022")
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-27-2022"),
            updatedAt: new Date("01-27-2022"),
        }  
    },
    {
        id: "S# 22012801-01",
        title: "Special Altanium Integrates Mold Heats for H4 600-RS95 - 12 zones @15A ( 460V, 50 Hz, UL)",
        description: `Consists of 12 zones:  twelve @ 15A manifold mold heat temperature control zones. The control package features soft start, self-tuning PID control, power control using Altanium technology. Mold heats are enabled, disabled (turned off) or put into standby mode from the operator interface. Each zone has individual settings for the auto set-point, manual (%) set-point, auto/manual control selection, and high and low deviation alarm set-points. These set-points, as well as the mold heats standby temperature, may also be set globally. All settings are saved and recalled with the mold setup. 
        The package includes 6 pin female power connectors and 24 pin male TC plug connectors or per latest Husky standard.  
        Power connectors will be base style and mounted operator side on a plate behind the HMI beside the stationary platen (Standard Hylectric Location). TC Plug connections will have standard location on top of the Stationary Platen. The cables from mold to interface power connector and mold to TC plug would be provided by customer. 
        This option is configured for plants with 460V-3 wire machine supply voltage and requires a separate 230V mold heats supply to be provided.
        `,
        rev: 0,
        prices: [
            {
                factory: 10106,
                ref: 13500,
                date: new Date("01-28-2022")
            }
        ],
        projects: [],
        constraint: {
            clamp: ["H4 600"],
            injection: ["RS95/80", "RS95/85", "RS95/80"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("01-28-2022"),
            updatedAt: new Date("01-28-2022"),
        }  
    },
    {
        id: "S# 22013101-01",
        title: "Injection delay timer on H4/H4L - RS",
        description: `Provide an injection delay timer of up to 30 seconds dedicated to the Husky injection unit only.
        A third party injection unit will be installed on the machine.
        Sequence: Mold close, clamp up, third party injection, cores movement, Husky injection. 
        Note: Customer will take full responsibility for any tool damage that may occur due to the addition of a third party injection unit. The customer is responsible for any motion safety do to gate and emergency stop interlocks. No review of this third party injection unit has been completed. If it is determined that a separate interface is required then additional machine special will be required. 
        
        Reference machine  s/n 9107765 & 10453297 retrofit project 120160, 334412
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 2800,
                date: new Date("01-31-2022")
            }
        ],
        projects: [
            { id: "#974465", title: "H4 400-RS65/60" },
            { id: "#186725", title: "H4 400-RS80/70" },
            { id: "#334412", title: "H4 500-RS80/80"  },
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
            createdAt: new Date("01-31-2022"),
            updatedAt: new Date("01-31-2022"),
        }
    }
];