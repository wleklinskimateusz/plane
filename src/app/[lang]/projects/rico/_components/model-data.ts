export interface ComponentDefinition {
  displayName: string;
  description: string;
  meshes: string[];
}

export interface ComponentInfo {
  name: string;
  desc: string;
}

// One entry per logical sub-assembly of the airframe. Each entry lists the
// mesh names (as authored in the .glb) that belong to that sub-assembly, so
// a raycast hit on any of those meshes resolves back to this description.
export const componentDefinitions: ComponentDefinition[] = [
  {
    displayName: "Telemetry",
    description:
      "Long-range radio link and telemetry modules ensuring real-time data transmission and robust ground station connectivity during autonomous missions.",
    meshes: [
      "usb-c_component",
      "usb-c_component_2",
      "usb-c_component_3",
      "Matek_telemetry",
      "Heatsink",
      "Telemetry_Reciever_Holder",
    ],
  },
  {
    displayName: "Radio Reciever",
    description:
      "Radiomaster reciever for manual flight controler, 2.4GHz antenna",
    meshes: ["24GHz_antenna", "Radiomaster_reciever_1"],
  },
  {
    displayName: "Flight Controller",
    description:
      "Core processing unit mount and external USB-C interfaces providing reliable access for firmware updates, serial connections, and pre-flight diagnostics.",
    meshes: ["FC_holder", "FC_Matek_H743"],
  },
  {
    displayName: "Global Positioning System",
    description:
      "High-precision GNSS module and mounting bracket for accurate waypoint navigation, spatial positioning, and autonomous route execution.",
    meshes: ["GPS", "GPS_holder"],
  },
  {
    displayName: "Propulsion System",
    description:
      "High-efficiency brushless DC Leomotion motor paired with an optimized propeller and spinner.",
    meshes: ["Motor_1", "Motor_2", "Propeller", "kolpak"],
  },
  {
    displayName: "1st Power Unit",
    description:
      "Custom Li-Ion battery pack with INR2170-45D cells.\n Specification: 3s2p battery, provides enough discharge current and total capacity of 95,04 Wh",
    meshes: ["Battery_front"],
  },
  {
    displayName: "2nd Power Unit",
    description:
      "Custom Li-Ion battery pack with INR2170-45D cells.\n Specification: 3s2p battery, provides enough discharge current and total capacity of 95,04 Wh",
    meshes: ["Battery_back_1", "Battery_back_2"],
  },
  {
    displayName: "Fuselage & Access Canopies",
    description:
      "Aerodynamic main body enclosures providing structural integrity while allowing rapid physical access to internal electronics.",
    meshes: ["Front_Canopy_(1)", "Back_Canopy", "Fuselage"],
  },
  {
    displayName: "Main Wing",
    description:
      "Primary aerodynamic surfaces, mathematically optimized to maximize lift and overall flight efficiency.",
    meshes: ["Right_Wing", "Left_Wing"],
  },
  {
    displayName: "Wing Joiner",
    description:
      "Strong V shaped wing joiner laminted using 150 Carbon fiber rowings and balsa wood. It has 3 degress dihedral angle to provide plane with roll stability",
    meshes: ["wing_joiner"],
  },
  {
    displayName: "Control Surfaces",
    description:
      "Trailing edge control surfaces (ailerons and flaps) responsible for roll authority and lift modification during takeoff and landing phases.",
    meshes: ["Right_Aileron", "Left_Aileron", "Right_Flap", "Left_Flap"],
  },
  {
    displayName: "V-Tail Empennage",
    description:
      "Combined pitch and yaw control surfaces (ruddervators) utilizing a lightweight V-tail configuration to significantly reduce aerodynamic drag.",
    meshes: [
      "Right_V-Tail_Panel",
      "Left_V-Tail_Panel",
      "Right_Ruddervator",
      "Left_Ruddervator",
      "Vtail_servos_holder",
    ],
  },
];

// Meshes that make up the outer shell; these get faded out in "x-ray" mode.
// Kept exactly as in the original script (note it doesn't perfectly match
// the "Fuselage & Access Canopies" mesh list above — that's inherited as-is).
export const fuselageNames = ["Fuselage", "Back_Canopy", "Front_Canopy"];

// Flat lookup: mesh name -> { name, desc } for the info panel.
export const meshMap: Record<string, ComponentInfo> = componentDefinitions.reduce(
  (acc, component) => {
    component.meshes.forEach((meshName) => {
      acc[meshName] = {
        name: component.displayName,
        desc: component.description,
      };
    });
    return acc;
  },
  {} as Record<string, ComponentInfo>
);
