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
    description: "Long-range telemetry module operating at 915MHz frequency ensuring real-time data transmission and robust ground station connectivity during autonomous missions.",
    meshes: ["usb-c_component", "usb-c_component_2", "usb-c_component_3", "Matek_telemetry", "Heatsink", "Telemetry_Reciever_Holder"]
  },
  {
    displayName: "Nvidia Jetson Orin Nano",
    description: "Nvidia Jetson was chosen as a onboard computer because of it's capability to run YOLO model for object detection as well as mapping program simuntenously. Stndard version wouldn't fit inside our hull, thus it was placed on special tiny board",
    meshes: ["jetson2001", "jetson2001_1", "jetson2001_2", "jetson6", "jetson1", "jetson2", "jetson7", "jetson4001", "jetson1001", "jetson3", "jetson5"]
  },

  {
    displayName: "Radio Reciever",
    description: "Radiomaster reciever for manual flight controler, 2.4GHz antenna",
    meshes: ["24GHz_antenna", "Radiomaster_reciever_1"]
  },
  {
    displayName: "ESC",
    description: "Dualsky 60A Summit ESC proved has proved it's durability and resistance to high current last year.",
    meshes: ["ESC001", "ESC_Holder"]
  },
  {
    displayName: "Global shutter camera",
    description: "Flight testing revealed that a global shutter camera is critical for this platform. Unlike multirotor drones, fixed-wing aircraft cannot hover mid-air; therefore, standard rolling shutter cameras introduced severe motion artifacts, disrupting the computer vision algorithms.",
    meshes: ["AR0234001", "AR0234001_2", "AR0234001_1"]
  },
  {
    displayName: "Flight Controller",
    description: "Matek flight controller based on STM32H743 MPU was chosen due to its small size and enough signal and serial ports.",
    meshes: ["FC_holder", "FC_Matek_H743", "FC_Matek_H743001_6", "FC_Matek_H743001_7", "FC_Matek_H743001_1", "FC_Matek_H743001_2", "FC_Matek_H743001_3", "FC_Matek_H743001_4", "FC_Matek_H743001_5"]
  },
  {
    displayName: "Global Positioning System",
    description: "The Foxeer M10Q 250 was chosen as a trade-off compared to the Here 4. While it offers a significantly smaller form factor and lower weight, it is a single-band receiver (L1 only) and lacks the RTK precision of the Here 4.",
    meshes: ["GPS", "GPS_holder"]
  },
  {
    displayName: "Propulsion System",
    description: "Leomotion brushless DC motor; specification:\n power: 1000W , 4550 kV, 6.7:1 transmission (output low), resulting in ~8000 RPM at max thrust",
    meshes: ["Motor_1", "Motor_2"]
  },
  {
    displayName: "Propulsion System",
    description: "Carbon fiber ultra thin propeller optimized for efficiency at high speeds for endurance mission.",
    meshes: ["Propeller", "kolpak"]
  },
  {
    displayName: "1st Power Unit",
    description: "Li-ion 3S2P battery built with BAK INR2170-45D cells. Chosen deliberetly to stay within 100Wh limit (it has 95.04 Wh capacity), yet still provides much better energy density then LiPo batteries.",
    meshes: ["Battery_front"]
  },
  {
    displayName: "2nd Power Unit",
    description: "Li-ion 3S2P battery built with BAK INR2170-45D cells. Chosen deliberetly to stay within 100Wh limit (it has 95.04 Wh capacity), yet still provides much better energy density then LiPo batteries.",
    meshes: ["Battery_back_1", "Battery_back_2"]
  },
  {
    displayName: "Fuselage",
    description: "Aerodynamic main body enclosures providing structural integrity while allowing rapid physical access to internal electronics.\n Fuselage was lamineted in molds out of fiberglass instead of carbon fiber to ensure RF transparency and prevent radio interference. ",
    meshes: ["Fuselage"]
  },
  {
    displayName: "Access Canopies",
    description: "These canopies provide quick access to all internal electronics and components. Each canopy was CNC-milled directly from the fuselage structure to ensure a perfectly flush, aerodynamic fit.",
    meshes: ["Body97", "Back_Canopy"]
  },
  {
    displayName: "Main Wing",
    description: "Primary aerodynamic surfaces, mathematically optimized to maximize lift to drag ratio, laminated in molds out of carbonn fiber.",
    meshes: ["Right_Wing", "Left_Wing"]
  },
  {
    displayName: "Wing Joiner",
    description: "Strong V shaped wing joiner laminted using 150 Carbon fiber rowings and balsa wood. It has 3 degress dihedral angle to provide plane with roll stability",
    meshes: ["wing_joiner"]
  },
  {
    displayName: "Control Surfaces",
    description: "Trailing edge control surfaces (ailerons and flaps) responsible for roll authority and lift modification during takeoff and landing phases.",
    meshes: ["Right_Aileron", "Left_Aileron", "Right_Flap", "Left_Flap"]
  },
  {
    displayName: "V-Tail Empennage",
    description: "Combined pitch and yaw control surfaces (ruddervators) utilizing a lightweight V-tail configuration to significantly reduce aerodynamic drag.",
    meshes: ["Right_V-Tail_Panel", "Left_V-Tail_Panel", "Right_Ruddervator", "Left_Ruddervator", "Vtail_servos_holder"]
  },
  {
    displayName: "Fuselage-Mounted Tail Servos",
    description: "The ruddervator servos were placed inside the fuselage because the V-tail stabilizer panels are too thin to house them directly. This layout protects the servos while maintaining an ultra-sleek, aerodynamic tail profile.",
    meshes: ["Vtail_servos_holder", "tail_servo_1", "tail_servo_2"]
  }
];

// Meshes that make up the outer shell; these get faded out in "x-ray" mode.
// Kept exactly as in the original script (note it doesn't perfectly match
// the "Fuselage & Access Canopies" mesh list above — that's inherited as-is).
export const fuselageNames = ["Fuselage", "Back_Canopy", "Body97"];

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
