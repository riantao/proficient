import { Special } from "@proficient/types";

export const specials: Special[] = [
    {
        id: "S# 22020701-01",
        title: "Retractable Tie Bar special  - Operator Side for H4/H4L 400 Clamp",
        description: `The price includes Special Engineering, documentation, tie bar removal assembly, tie bar hanger assembly and premiums for modifications to the stationary platen, moving platen, and clamp casting. The safety gate assembly also has to be modified with a lock-out latch to prevent the operator safety gate from falling off when the gate top rail is removed.

        Refer to Dwg# 6711614 for detailed instructions for tie bar removal.
        
        NOTES FOR INSTALLING THE MOLD:
        (Follow mold installation as outlined in machine manual)
        
        1.  Loosen tiebar locking screw (item #1) on tiebar locking plate (item #7) and slide from machine operating locating to tie bar pull location (see view sheet 2).
        2.  Locate tiebar locking plate (item #7) on moving platen using dowels (item #5) and secure with bolts (item #6).  Torque as per HS 252.
        3.  Remove the tiebar retaining plate bolts on the stationary platen side, and slide the retaining plate onto the hanger (item #9).  Loosen and remove the tiebar nut at the stationary platen, also slide it onto the hanger, use tool HPN 3355874 to untighten the nut.
        4.  Remove the retaining plate bolts on the clamp cylinder end; do not remove the retaining plate and the nut.
        5.  Make sure that locking screw (item #1) at clamp cylinder end is loose. Torque the locking screw on the moving platen to the listed torque value.
        6.  Move the moving platen back to pull the tie bar out.
        7.  Unlock locking screw on moving platen and torque locking screw on clamp cylinder using torque value specified on the drawing.
        8.  Stroke the moving platen forward as required.
        9.  Repeat steps 3 to 6 to retract the tie bar from mold area as required.
        10. Install the mold.
        11. Torque the locking screw on moving platen using the specified torque value (locking screw on clamp cylinder unscrewed).
        12. Stroke the moving platen forward so that the tie bar aligns with the bushing in stationary platen.
        13. Unlock locking screw on moving platen and torque locking screw at clamp cylinder end using the specified torque value.
        14. Stroke the moving platen back and repeat steps 9 to 12 until the tie bar is all the way in the stationary platen bore.
        15. Install the retaining plate on clamp cylinder end and verify that a 3mm gap exists between the nut and the plate.
        16. Install and hand tighten tiebar nut on stationary platen end, install retaining plate and torque the retaining plate bolts as per HS 252.
        17. Confirm that locking screws (on both the clamp & moving platen) have been fully retracted out, and are not in tiebar contact.
        18. Remove tiebar locking plate (item #7) from moving platen and slide back to machine operating position (see view sheet 2).
        19. Secure tiebar locking plate in position with tiebar locking screw (item #1) to listed torque valve.
        
        FOR REMOVING THE MOLD:
        Follow same instructions as above, but in reverse order.
        
        To protect against clamping up on three tie bars, Husky has included a proximity sensor to detect if the tie bar nut is in place.
        Also provide a special tie bar nut removal tool (reference HPN3355874).
        Reference project 353910 ( H4L 400)
        `,
        rev: 0,
        prices: [
            {
                factory: 6262,
                ref: NaN
            },
            {
                factory: 6825,
                ref: 8220,
                date: new Date("02-07-2022")
            }
        ],
        projects: [
            { id: "#353910", title: "H4 500-RS95/85" }
        ],
        constraint: {
            clamp: ["H4 400", "H4L 400"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: ["6711614"],
        hpns: ["3355874"],
        meta: {
            createdAt: new Date("02-07-2022"),
            updatedAt: new Date("02-07-2022"),
        }
    },
    {
        id: "S# 22020801-01",
        title: "Single Power Drop to H4 Machine",
        description: `Provide electrical hardware to enable single power drop to machine to replace the standard split feed.

        Note: This special is only technically feasible to certain clamp/injection sizes. Engineering review is required to confirm if this special can be applied to the final machine configuration at the time of machine order.
        
        Reference standard option C6509
        `,
        rev: 0,
        prices: [
            {
                factory: 2584,
                ref: 3400,
                date: new Date("02-08-2022")
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
            createdAt: new Date("02-08-2022"),
            updatedAt: new Date("02-08-2022"),
        }
    },
    {
        id: "S# 22021001-01",
        title: "Special Integrated Altanium Mold Heats Controller for HNLP500 RS70/70 - 30 zones: 4@30A + 2@15A + 24@3A",
        description: `Consists of 30 zones: 4 Manifold Zones @30A, 2 Manifold Zones @15A and 24 Tip Zones @5A. 
        The control package features soft start, self-tuning PID control, power control using Altanium technology. Mold heats are enabled, disabled (turned off) or put into standby mode from the operator interface. Each zone has individual settings for the auto set-point, manual (%) set-point, auto/manual control selection, and high and low deviation alarm set-points. These set-points, as well as the mold heats standby temperature, may also be set globally. All settings are saved and recalled with the mold setup. 
        
        The package includes 6 pin Harting female power connectors for 30A zones. 24 pin Harting female power connectors for 15A zones. 64 pin Harting female power connectors for 5A zones. For TC, 30A and 15A zones will use 24 pin male TC plug connectors while 5A zones will use 64 pin male TC plug connectors.
        
        Customer would like the heat circuits wired the same as their previous HNLP machines:
        
        Zone	Plug	Pins	Plug Size
        Manifold 1 (15A)	X57	1 & 13	24
        Manifold 2 (15A)	X57	2 & 14	24
        Manifold 3 (30A)	X58	1 & 2	6
        Manifold 4 (30A)	X58	3 & 4	6
        Manifold 5 (30A)	X59	1 & 2	6
        Manifold 6 (30A)	X59	3 & 4	6
        Tips (5A)	XE		64
        
        Power connectors will be base style and mounted behind the P02 tall cabinet. TC Plug connections will have standard location on top of the Stationary Platen. The cables from mold to interface power connector and mold to TC plug would be provided by customer.
        
        This option is configured for plants with 460V-3 wire machine supply voltage and requires a separate 230V mold heats supply to be provided.
        
        Ref Project: 354849 & 354851
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 19568,
                date: new Date("02-10-2022")
            }
        ],
        projects: [
            { id: "#354849", title: "HNLP500-RS70/70" },
            { id: "#354851", title: "HNLP500-RS70/70" }
        ],
        constraint: {
            clamp: ["HNLP 500"],
            injection: ["RS70/70"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("02-10-2022"),
            updatedAt: new Date("02-10-2022"),
        }
    },
    {
        id: "S# 22021001-02",
        title: "Special Integrated Altanium Mold Heats Controller for HNLP500 RS80/80 - 30 zones: 4@30A + 2@15A + 24@3A",
        description: `Consists of 30 zones: 4 Manifold Zones @30A, 2 Manifold Zones @15A and 24 Tip Zones @5A. 
        The control package features soft start, self-tuning PID control, power control using Altanium technology. Mold heats are enabled, disabled (turned off) or put into standby mode from the operator interface. Each zone has individual settings for the auto set-point, manual (%) set-point, auto/manual control selection, and high and low deviation alarm set-points. These set-points, as well as the mold heats standby temperature, may also be set globally. All settings are saved and recalled with the mold setup. 
        
        The package includes 6 pin Harting female power connectors for 30A zones. 24 pin Harting female power connectors for 15A zones. 64 pin Harting female power connectors for 5A zones. For TC, 30A and 15A zones will use 24 pin male TC plug connectors while 5A zones will use 64 pin male TC plug connectors.
        
        Customer would like the heat circuits wired the same as their previous HNLP machines:
        
        Zone	Plug	Pins	Plug Size
        Manifold 1 (15A)	X57	1 & 13	24
        Manifold 2 (15A)	X57	2 & 14	24
        Manifold 3 (30A)	X58	1 & 2	6
        Manifold 4 (30A)	X58	3 & 4	6
        Manifold 5 (30A)	X59	1 & 2	6
        Manifold 6 (30A)	X59	3 & 4	6
        Tips (5A)	XE		64
        
        Power connectors will be base style and mounted behind the P02 tall cabinet. TC Plug connections will have standard location on top of the Stationary Platen. The cables from mold to interface power connector and mold to TC plug would be provided by customer.
        
        This option is configured for plants with 460V-3 wire machine supply voltage and requires a separate 230V mold heats supply to be provided.
        
        Ref Project: 354849 & 354851
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 19568,
                date: new Date("02-10-2022")
            }
        ],
        projects: [
            { id: "#354849", title: "HNLP500-RS70/70" },
            { id: "#354851", title: "HNLP500-RS70/70" }
        ],
        constraint: {
            clamp: ["HNLP 500"],
            injection: ["RS70/70"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("02-10-2022"),
            updatedAt: new Date("02-10-2022"),
        }
    },
    {
        id: "S# 22021001-03",
        title: "Special Integrated Altanium Mold Heats Controller for HNLP500 RS70/70 - 35 zones: 4@30A + 7@15A + 24@5A",
        description: `Consists of 35 zones: 4 Manifold Zones @30A, 7 Manifold Zones @15A and 24 Tip Zones @5A. 
        The control package features soft start, self-tuning PID control, power control using Altanium technology. Mold heats are enabled, disabled (turned off) or put into standby mode from the operator interface. Each zone has individual settings for the auto set-point, manual (%) set-point, auto/manual control selection, and high and low deviation alarm set-points. These set-points, as well as the mold heats standby temperature, may also be set globally. All settings are saved and recalled with the mold setup. 
        
        The package includes 6 pin Harting female power connectors for 30A & 15A zones. 64 pin Harting female power connectors for 5A zones. For TC, 30A and 15A zones will use 24 pin male TC plug connectors while 5A zones will use 64 pin male TC plug connectors.
        
        Customer would like the heat circuits wired the same as their previous HNLP machines:
        
        Zone	                 Plug	  Pins	   Plug     Size
        Manifold 1       (30A)   	X58	   1 & 2	    6
        Manifold 2       (30A)	   X58 	  3 & 4  	  6
        Manifold 3       (30A)   	X58	   5 & 6	    6
        
        Manifold 4       (30A)	   X59	   1 & 2	    6
        Manifold 7       (15A)	   X59	   3 & 4	    6
        Manifold 8       (15A)	   X59	   5 & 6	    6
        
        Manifold 9       (15A)	   X60	   1 & 2	    6
        Manifold 10     (15A)	   X60	   3 & 4	    6
        Manifold 11     (15A)	   X60	   5 & 6	    6
        
        Manifold 12     (15A)	   X61	   1 & 2	    6
        Manifold 13     (15A)	   X61	   3 & 4	    6
        
        Tips (5A)          XE      		64
        
        Power connectors will be base style and mounted behind the P02 tall cabinet. TC Plug connections will have standard location on top of the Stationary Platen. The cables from mold to interface power connector and mold to TC plug would be provided by customer.
        
        This option is configured for plants with 460V-3 wire machine supply voltage and requires a separate 230V mold heats supply to be provided.
        
        Ref Project: 354849, 354851, 227116
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 22830,
                date: new Date("02-10-2022")
            }
        ],
        projects: [
            { id: "#354849", title: "HNLP500-RS70/70" },
            { id: "#354851", title: "HNLP500-RS70/70" },
            { id: "#227116", title: "HNLP600-RS70/70" },
        ],
        constraint: {
            clamp: ["HNLP 500"],
            injection: ["RS70/70"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("02-10-2022"),
            updatedAt: new Date("02-10-2022"),
        }
    },
    {
        id: "S# 22021301-01",
        title: "Special Integrated Altanium Mold Heats Controller for HN600 RSG95/80 - 24 zones: 12@16A + 12@5A (per Genfac standard)",
        description: `Consists of 24 zones: 12 Manifold Zones @16A & 12 Tip Zones @5A. 
        The control package features soft start, self-tuning PID control, power control using Altanium technology. Mold heats are enabled, disabled (turned off) or put into standby mode from the operator interface. Each zone has individual settings for the auto set-point, manual (%) set-point, auto/manual control selection, and high and low deviation alarm set-points. These set-points, as well as the mold heats standby temperature, may also be set globally. All settings are saved and recalled with the mold setup. 
        The package includes 24 pin Harting female power connectors for 16A and 5A zones. Both 16A and 5A zones will use 24 pin male TC plug connectors. 
        Note: Customer would like the heat circuits wired the same as their previous HN600 machine PJ#893885.
        Power connectors will be base style and mounted operator side on a plate behind the HMI beside the stationary platen (Standard Hylectric Location). TC Plug connections will have standard location on top of the Stationary Platen. The cables from mold to interface power connector and mold to TC plug would be provided by customer.
        This option is configured for plants with 400V-4 wire machine supply voltage.  Mold heats breaker will be sized to allow a staged start up of the manifold then tip zones per previous standard. Special uprated breaker for 100% simultaneous start up duty cycle on all zones is not included.  
        
        Ref Project: 354552  or 893885 (HN600 RSG95/80)
        `,
        rev: 0,
        prices: [
            {
                factory: 14060,
                ref: NaN,
                date: new Date("01-01-2017") 
            },
            {
                factory: 16169,
                ref: 21300,
                date: new Date("02-13-2022")
            }
        ],
        projects: [
            { id: "#354552", title: "HN600-RS95/80" },
            { id: "#893885", title: "HN600-RSG95/80" },
        ],
        constraint: {
            clamp: ["HN 600"],
            injection: ["RSG95/80"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("02-13-2022"),
            updatedAt: new Date("02-13-2022"),
        }
    },
    {
        id: "S# 22021301-02",
        title: "Special Integrated Altanium Mold Heats Controller for HN600 RSG95/80 - 24 zones: 12@16A + 12@5A (per Genfac standard)",
        description: `Provide the following 24V/DC digital input signals ( dry contacts):
 
        1) Digital output #1 - Machine in auto mode
        - This signal is 'high' when the machine is running in auto mode 
         
        2) Digital output #2 - Machine in semi-auto mode
        - This signal is 'high' when the machine is in running in semi-auto mode
         
        3) Digital input #3  - Swingchut running in auto cycle 
        - This signal is 'high' when the side bar buttong for the swingchut to run in auto cycle is enabled
        
         
        Electrical Interface details:
        I/Os terminated with terminal blocks in the cabinet
        
        Note: This special is only applicable when the swingchut special interface is ordered.
        `,
        rev: 0,
        prices: [],
        projects: [],
        constraint: {
            clamp: ["HN 600"],
            injection: ["RSG95/80"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("02-13-2022"),
            updatedAt: new Date("02-13-2022"),
        }
    },
    {
        id: "S# 22021301-03",
        title: "Special Integrated Altanium Mold Heats Controller for HN500 RSG80/65 - 11 zones: 5@16A + 6@5A (per Genfac standard)",
        description: `Consists of 11 zones: 5 Manifold Zones @16A & 6 Tip Zones @5A. 
            The control package features soft start, self-tuning PID control, power control using Altanium technology. Mold heats are enabled, disabled (turned off) or put into standby mode from the operator interface. Each zone has individual settings for the auto set-point, manual (%) set-point, auto/manual control selection, and high and low deviation alarm set-points. These set-points, as well as the mold heats standby temperature, may also be set globally. All settings are saved and recalled with the mold setup. 
            The package includes 24 pin Harting female power connectors for 16A and 5A zones. Both 16A and 5A zones will use 24 pin male TC plug connectors. 
            Note: Customer would like the heat circuits wired similar as their previous HN600 machine PJ#893885.
            Power connectors will be base style and mounted operator side on a plate behind the HMI beside the stationary platen (Standard Hylectric Location). TC Plug connections will have standard location on top of the Stationary Platen. The cables from mold to interface power connector and mold to TC plug would be provided by customer.
            This option is configured for plants with 400V-4 wire machine supply voltage.  Mold heats breaker will be sized to allow a staged startup of the manifold then tip zones per previous standard. Special uprated breaker for 100% simultaneous start up duty cycle on all zones is not included.  
            
            Ref Project: 893885 (HN600 RSG95/80)
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 9500,
                date: new Date("02-13-2022")
            }
        ],
        projects: [
            { id: "#893885", title: "HN600-RSG95/80" },
        ],
        constraint: {
            clamp: ["HN 500"],
            injection: ["RSG80/65"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("02-13-2022"),
            updatedAt: new Date("02-13-2022"),
        }
    },
    {
        id: "S# 22021402-01",
        title: "Special Moving platen with locating ring",
        description: `Husky to provide a  moving platen with a locating ring counterbore along with the special locating ring.

        Moving platen counterbore:
        - 170mm H7 Dia
        - 20mm +/-0.12 depth
        - 4x M8 tapped holes
        
        Locating ring:
        - 101.6mm ID
        - 20mm depth
        - The locating ring will include the four ejector holes around the center - (± 89, 0) and (0, ± 89).
        
        Ref project 478084
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 2800,
                date: new Date("02-14-2022") 
            }
        ],
        projects: [
            { id: "#478084", title: "H500-RS95/80" },
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
            createdAt: new Date("02-14-2022"),
            updatedAt: new Date("02-14-2022"),
        }
    },
    {
        id: "S# 22021601-01",
        title: "Special Valve Gate Logic - Valve Gate always Energized",
        description: `Provide a screen selectable option on the HMI to allow the pneumatic valve gate(s) to be always energized at either open or closed position. The valve gate(s) won't go into neutral position during transition from open to closed position and vice-versa.  All valve gates with standard independent control logic are affected.  This special is applicable during AUTO and SEMI cycles only.  

        Background: On some molds the neutral position can allow for plastic leakage in the gate area when the mold opens at the end of each SEMI cycle or when the AUTO cycle is stopped. The elimination of the neutral position will prevent this plastic leakage.   
        
        Reference project 864765
        `,
        rev: 0,
        prices: [
            {
                factory: 1050,
                ref: 1385,
                date: new Date("02-16-2022") 
            }
        ],
        projects: [
            { id: "#864765", title: "HL600-RS95/85" },
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
            createdAt: new Date("02-16-2022"),
            updatedAt: new Date("02-16-2022"),
        }
    },
    {
        id: "S# 22021601-02",
        title: "Parts added to Machine KIT section",
        description: `During the mold tests with the actual molds that will be running in machines project number 130467, 130469 and 130471 it was determined that the below parts will be necessary for sucessfully running those applications. Please add the following parts to the machine KIT section:

        Festo air fittings (BSPP to 8mm air hose) HPN 9104878 Qty10
        Straight connector HPN 7350698 (NPT to BSPP) Qty 10
        Manual Ball Valve 1/2 NPT HPN 10251619 Qty 100 (for projects 130469 and 130467)
        Spacer plate Mold cooling HPN 2810434 Qty 4 (two of the plates to be used on project 130467)
        `,
        rev: 0,
        prices: [],
        projects: [
            { id: "#130471", title: "H4 225-RS45/38" },
            {  id: "#130469", title: "H4 225-RS45/42" },
            { id: "#130467", title: "H4 300-RS80/70" }
        ],
        constraint: {
            clamp: [],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["9104878", "7350698", "10251619", "2810434"],
        meta: {
            createdAt: new Date("02-16-2022"),
            updatedAt: new Date("02-16-2022"),
        }
    },
    {

        id: "S# 22021601-03",
        title: "Parts added to Machine Backorder section",
        description: `After the Spacer plates HPN 2810434 were installed between the mold cooling manifolds (to facilitate the installation of the ball valves) it was noted that the position of the main connections on the stationary platen was shifted towards the non operator side, causing the split flanges of the 2" water OUT port to interfere with the sheet metal of the non-operator side STP guard. 

        Design a new non-operator side STP guard to eliminate the interference with the split flanges and add the parts to the KIT section. Required quantity is 2 (two), the second panel is required for project #130471 (H4 225). Note that the machine color is traffic white.
        `,
        rev: 0,
        prices: [],
        projects: [
            { id: "#130471", title: "H4 225-RS45/38" }
        ],
        constraint: {
            clamp: [],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["2810434"],
        meta: {
            createdAt: new Date("02-16-2022"),
            updatedAt: new Date("02-16-2022"),
        }
    },
    {
        id: "S# 22022101-01",
        title: "Four additional Linear Bearing Blocks (two per rail on HN or HNL 500/600",
        description: `Provide four additional bearing blocks (two per side) pre-assembled on the rails close to the stationary platen with block retainers. The bearing blocks will be used for the support of large molds and customer-provided stack mold carriers (non-Husky). 

        The minimum Shutheight will be limited to 700mm by software to prevent the mold from crushing the bearings. 
        
        For machine with the Provision for Stack Mold Carrier Option or Additional Linear Bearing Block and Split Rail option selected, there will be three additional linear bearing blocks per rail in total The minimum Shut Height will be limited to 1010 mm instead of the standard 530 mm
        
        Note:
        - The stroke is not limited.
        - A mold support should be provided by mold maker.
        - Bearing block, SRG65LV1SS (303 mm in length with side nipple, ref HPN 7589466) will be used for this special.
        - The limit for min. shutheight may be affected by other machine specials 
        
        Reference project 891528/743099 ( HL400)
        `,
        rev: 0,
        prices: [
            {
                factory: 3100,
                ref: 4100,
                date: new Date("02-21-2022"),
            }
        ],
        projects: [
            { id: "#891528", title: "HL600-RS95/85" },
            { id: "#743099", title: "H400-RS80/70" }
        ],
        constraint: {
            clamp: ["HN 500", "HNL 500", "HN 600", "HNL 600"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["7589466"],
        meta: {
            createdAt: new Date("02-21-2022"),
            updatedAt: new Date("02-21-2022"),
        }
    },
    {
        id: "S# 22022501-01",
        title: "Retractable Tie Bar special  - Operator Side for H4/H4L 650 Clamp",
        description: `The price includes Special Engineering, documentation, tie bar removal assembly, tie bar hanger assembly and premiums for modifications to the stationary platen, moving platen, and clamp casting. The safety gate assembly also has to be modified with a lock-out latch to prevent the operator safety gate from falling off when the gate top rail is removed.

        Refer to Dwg# 6711614 for detailed instructions for tie bar removal.
        
        NOTES FOR INSTALLING THE MOLD:
        (Follow mold installation as outlined in machine manual)
        
        1.  Loosen tiebar locking screw (item #1) on tiebar locking plate (item #7) and slide from machine operating locating to tie bar pull location (see view sheet 2).
        2.  Locate tiebar locking plate (item #7) on moving platen using dowels (item #5) and secure with bolts (item #6).  Torque as per HS 252.
        3.  Remove the tiebar retaining plate bolts on the stationary platen side, and slide the retaining plate onto the hanger (item #9).  Loosen and remove the tiebar nut at the stationary platen, also slide it onto the hanger, use tool HPN 3355874 to untighten the nut.
        4.  Remove the retaining plate bolts on the clamp cylinder end; do not remove the retaining plate and the nut.
        5.  Make sure that locking screw (item #1) at clamp cylinder end is loose. Torque the locking screw on the moving platen to the listed torque value.
        6.  Move the moving platen back to pull the tie bar out.
        7.  Unlock locking screw on moving platen and torque locking screw on clamp cylinder using torque value specified on the drawing.
        8.  Stroke the moving platen forward as required.
        9.  Repeat steps 3 to 6 to retract the tie bar from mold area as required.
        10. Install the mold.
        11. Torque the locking screw on moving platen using the specified torque value (locking screw on clamp cylinder unscrewed).
        12. Stroke the moving platen forward so that the tie bar aligns with the bushing in stationary platen.
        13. Unlock locking screw on moving platen and torque locking screw at clamp cylinder end using the specified torque value.
        14. Stroke the moving platen back and repeat steps 9 to 12 until the tie bar is all the way in the stationary platen bore.
        15. Install the retaining plate on clamp cylinder end and verify that a 3mm gap exists between the nut and the plate.
        16. Install and hand tighten tiebar nut on stationary platen end, install retaining plate and torque the retaining plate bolts as per HS 252.
        17. Confirm that locking screws (on both the clamp & moving platen) have been fully retracted out, and are not in tiebar contact.
        18. Remove tiebar locking plate (item #7) from moving platen and slide back to machine operating position (see view sheet 2).
        19. Secure tiebar locking plate in position with tiebar locking screw (item #1) to listed torque valve.
        
        FOR REMOVING THE MOLD:
        Follow same instructions as above, but in reverse order.
        
        To protect against clamping up on three tie bars, Husky has included a proximity sensor to detect if the tie bar nut is in place.
        Also provide a special tie bar nut removal tool (reference HPN3355874).
        Refer to  project 358526 H4 650 or J/N736338 (H500) for a similar special.
        `,
        rev: 0,
        prices: [
            {
                factory: 6825,
                ref: NaN,
                date: new Date("01-01-2020"),
            },
            {
                factory: 7507,
                ref: 9900,
                date: new Date("02-25-2022")
            }
        ],
        projects: [
            { id: "#358526", title: "H4 650-RS135/135" },
            { id: "#736338", title: "H500-RS95/85" }
        ],
        constraint: {
            clamp: ["H4 650", "H4L 650"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: ["6711614"],
        hpns: ["3355874"],
        meta: {
            createdAt: new Date("02-25-2022"),
            updatedAt: new Date("02-25-2022"),
        }
    },
    {
        id: "S# 22022502-01",
        title: "SMC cooling  with special water manifold - H4 / H4L 800",
        description: `This special is similar to the standard option, C7532 - Stack mold cooling water package - 2". Provide a special SMC manifold (HPN 6723694) instead of the standard SMC manifold. 

            Two inch supply and return mold cooling water circuits are connected to the bottom of the Husky stack mold carrier. All components in contact with water are non-corrosive (rubber, anodized aluminum or stainless steel). The main water connections consist of two patented modular connection blocks with 2" NPT ports located outside the clamp guarding on the non-operator side of the stationary platen. Water is conveyed from the main supply connections to the custom SMC manifold (HPN 6723694) using 2" hose.  Each circuit includes both supply and return connection points. Main water supply shut-off valves are sold separately.
            
            Reference project 332630
        `,
        rev: 0,
        prices: [
            {
                factory: 5252,
                ref: NaN,
                date: new Date("01-01-2020"),
            },
            {
                factory: 6430,
                ref: 8500,
                date: new Date("02-25-2022")
            }
        ],
        projects: [
            { id: "#332630", title: "H4 800-RS115/100" }
        ],
        constraint: {
            clamp: ["H4 800", "H4L 800"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["6723694"],
        meta: {
            createdAt: new Date("02-28-2022"),
            updatedAt: new Date("02-28-2022"),
        }
    },
    {
        id: "S# 22022801-01",
        title: "One set of additional cooling manifolds (six 1\" NPT and two 3/4\" NPT circuits) in Moving platen - H4/H4L 500",
        description: `Provide one additional set of 2" mold cooling manifolds (8 supply ports, 8 return ports) on the moving platen.  The additional manifolds will be mounted on top of the existing manifolds on the non-op side moving platen.

            The additional manifold (supply and return) has six 1" NPT ports, and two 3/4" NPT ports supplied with brass plugs.
            
            Note: 
            - This special is only applicable when both options C7520 (Basic mold cooling package – 2 inch) and C7522 (Mold cooling manifolds) or option C7551 (Comprehensive Mold Cooling Package - 2") is ordered. 
            - With this special and the standard options, the machine will have 12x 1" NPT and 4x ¾" NPT for the moving platen.  
            
            Ref project: 350631
        `,
        rev: 0,
        prices: [
            {
                factory: NaN,
                ref: 4500,
                date: new Date("02-28-2022"),
            }
        ],
        projects: [
            { id: "#350631", title: "H4 500-RS80/65" }
        ],
        constraint: {
            clamp: ["H4 500", "H4L 500"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("02-28-2022"),
            updatedAt: new Date("02-28-2022"),
        }
    },
    {
        id: "S# 22030301-01",
        title: "Special EMI ball check valve with FCI style insert for H4 - RS80/70",
        description: `Provides a  70mm EMI ball check valve assembly with a FCI ( Fluited Check Insert) style insert fully assembled in the injection unit  instead of standard ball check valve.

            NOTES:
                > Husky will not be responsible for any issues related to the check valve manufacturing or processing.  
                > Husky cannot be held responsible for any check valve related performance data.
                > Husky to provide envelope drawing to supplier for reference.
            
            Reference notes for supplier: "EMI Ball Check Valve, 70mm Screw diameter, with FCI Insert Assembly.  Ref HPN 732x78 for check valve envelope and material spec."
        `,
        rev: 0,
        prices: [
            {
                factory: 1500,
                ref: 2000,
                date: new Date("03-03-2022"),
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: ["RS80/70"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: ["732x78"],
        meta: {
            createdAt: new Date("03-03-2022"),
            updatedAt: new Date("03-03-2022"),
        }
    },
    {
        id: "S# 22030901-01",
        title: "Four In-Platen Ejectors on H4 500-600 Stationary Platen - SPI",
        description: `Provide a special platen and four booster assemblies which will be driven by one dedicated standard hydraulic core function on the stationary platen option C7700 or by an equivalent special hydraulic function. This hydraulic function is not included with this special, i.e. it must be quoted separately. The Four In-Platen Ejectors special includes the hoses and fittings to connect the hydraulic function to the in-platen ejector installation.

            The stationary platen casting will have to be ultrasonically tested for porosities prior to machining. The stationary platen will have lines drilled in it for distribution of hydraulic oil. In the back position, the rods will need to be recessed into the stationary platen by a minimum of 19.47mm. The taps in the cylinder rods (4) to be 5/8-11 UNC.
                > The location of the in-platen ejectors are to be at (+/-241.3, +/-355.6).
                > Standard SPI mold mounting tapped holes that interfere with the in-platen ejectors will be removed
                > Ejector stroke: 110mm minimum. Ejector force: 5.0 US Tons minimum force per cylinder.
                > Fill the booster circuit with oil prior to Shipping to prevent corrosion.
                
            Note that two digital inputs that are required for the ejector forward and ejector back switches are provided with the hydraulic function C7700, or they will have to be provided by the equivalent hydraulic function special.
            Delivery impact: two weeks for first machine.
            
            Reference project 319831
            
            Note to engineering: use the standard stationary platen casting.
        `,
        rev: 0,
        prices: [
            {
                factory: 29982,
                ref: 39450,
                date: new Date("03-09-2022"),
            }
        ],
        projects: [
            { id: "#319831", title: "H500-RS95/85" }
        ],
        constraint: {
            clamp: ["H4 500", "H4 600"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-09-2022"),
            updatedAt: new Date("03-09-2022"),
        }
    },
    {
        id: "S# 22030901-02",
        title: "Special extra high speed screw drive for RS115/100(L) - 1.4 m/s.",
        description: `Increase the peripheral screw speed  from standard peripheral speed for High speed screw drive option C4504 of  1.35 m/s to 1.4 m/s. 

            The updated screw drive specification will be:
            412 rpm (1.4 m/s)
            1855 Nm
            
            Note: This special is only applicable when option C4504 is selected for RS115/100L separately.
            
            INTERNAL NOTE (DO NOT PRINT ON QUOTES):
            No change in hardware - this is only a software change.
        `,
        rev: 0,
        prices: [
            {
                factory: 1500,
                ref: 1975,
                date: new Date("03-09-2022"),
            }
        ],
        projects: [],
        constraint: {
            clamp: [],
            injection: ["RS115/100L"]
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-09-2022"),
            updatedAt: new Date("03-09-2022"),
        }
    },
    {
        id: "S# 22031001-01",
        title: "Special Comprehensive Mold Cooling Package with 2.5\" supply/return - H4/H4L 1000 or 1200 RS",
        description: `2.5 inch supply and return mold cooling water circuits are provided on each platen. Each circuit is connected to stainless steel supply and return manifolds mounted on the non-operator side of each platen. Each manifold has 8 ports 1’’ NPT. The manifold ports
        are supplied with brass plugs.
        Two 2” pneumatic shut-off valves—one for each platen—are provided to allow mold cooling water to be turned on and off from a single button on the operator interface.
        The customer can easily relocate the valves to the return side of the circuits if preferred.
        
        Reference: Standard HyCAP 3.0 mold cooling and HyCAP option C7556-Mold Cooling Manifolds for Standard Cooling (Ref water manifold HPN 3680295)
        
        
        Reference project 766489`,
        rev: 0,
        prices: [
            {
                factory: 15405,
                ref: NaN,
                date: new Date("03-01-2019")
            },
            {
                factory: 18639,
                ref: 24500,
                date: new Date("03-10-2022")
            }
        ],
        projects: [
            { id: "#766489", title: "H1000-RS135/130L" }
        ],
        constraint: {
            clamp: ["H4 1000", "H4 1200", "H4L 1000", "H4L 1200"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-10-2022"),
            updatedAt: new Date("03-10-2022"),
        }
    },
    {
        id: "S# 22031001-02",
        title: "Provide additional cooling circuits (2.5 inch) on top of each platen (H4/H4L1000 or 1200)",
        description: `Provide additional 2.5" mold cooling circuits with  two 2.5” NPT ports for supply and two 2.5” NPT ports for return using patented modular connection blocks  for each platen. These ports will be located at the top of each platen near the non-operator side ( NOPS) with the ports facing up.

        The supply and return will be connected by using 2.5" hoses from the standard cooling manifolds located at non operator side of each platen provided by the Special  Comprehensive Mold Cooling Package (special S#22031001-01) . Each supply and return line will have  2.5” brass manual shut-off valves located close to the standard mold cooling manifolds.
        
        Note: This special is only applicable when the Special Comprehensive Mold Cooling Package (special S#22031001-01) is ordered for the machine.
        
        Reference project 766489
        Reference projects 762874/5/7 (Note: these H500 machines only have one supply and return ports on each platen since they are running single cavity mold only. For the H1000 which runs two cavity mold, two supply and return ports are required per platen.)
        `,
        rev: 0,
        prices: [
            {
                factory: 2660,
                ref: NaN,
                date: new Date("03-01-2019"),
            },
            {
                factory: 2926,
                ref: 19400,
                date: new Date("03-10-2022")
            }
        ],
        projects: [
            { id: "#766489", title: "H1000-RS135/130L" },
            { id: "#762874", title: "H500-RS115/100" },
            { id: "#762875", title: "H500-RS115/100" },
            { id: "#762877", title: "H500-RS115/100" },
        ],
        constraint: {
            clamp: ["H4 1000", "H4 1200", "H4L 1000", "H4L 1200"],
            injection: []
        },  
        attachments: [],
        boms: [],
        dwgs: [],
        hpns: [],
        meta: {
            createdAt: new Date("03-10-2022"),
            updatedAt: new Date("03-10-2022"),
        }
    }
];