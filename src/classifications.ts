import { Classification, Container } from "./types.js";

const DEFAULT_TERRAIN_COSTS = {
  LAND: 0,
  RIVER: null,
  SHALLOW_WATER: null,
  DEEP_WATER: null,
};

const DEFAULT_INFRASTRUCTURE_COSTS = {
  ROAD: null,
  RAIL: null,
};

export var ironOre: Classification = {
  id: "ironOre",
  name: "Iron Ore",
  description: "100g of loose iron ore.",
  icon: "ore.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 100,
  maxContentWeight: 0,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [],
};

export var coal: Classification = {
  id: "coal",
  name: "Coal",
  description: "100g of loose coal.",
  icon: "coal.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 100,
  maxContentWeight: 0,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [],
};

export var crudeOil: Classification = {
  id: "crudeOil",
  name: "Crude Oil",
  description: "100g of crude oil.",
  icon: "liquid.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 100,
  maxContentWeight: 0,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [],
};

export var steel: Classification = {
  id: "steel",
  name: "Steel",
  description: "1kg of steel.",
  icon: "steel.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 1e3,
  maxContentWeight: 0,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [],
};

export var diesel: Classification = {
  id: "diesel",
  name: "Diesel",
  description: "100g of diesel.",
  icon: "liquid.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 100,
  maxContentWeight: 0,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [],
};

export var truckDriver: Classification = {
  id: "truckDriver",
  name: "Truck Driver",
  description: "Person trained and equipped to operate a truck.",
  icon: "person.png",
  autonomous: true,
  layer: "SURFACE",
  weight: 90e3,
  maxContentWeight: 2e3,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
    LAND: 1,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
    ROAD: 1.2,
    RAIL: 1.1,
  },
  actions: [
    {
      type: "take",
      cost: 1,
    },
    {
      type: "place",
      cost: 1,
    },
  ],
};

export var haulTruckDriver: Classification = {
  id: "haulTruckDriver",
  name: "Haul Truck Driver",
  description: "Person trained and equipped to operate a haul truck.",
  icon: "person.png",
  autonomous: true,
  layer: "SURFACE",
  weight: 90e3,
  maxContentWeight: 2e3,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
    LAND: 1,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
    ROAD: 1.2,
    RAIL: 1.1,
  },
  actions: [
    {
      type: "take",
      cost: 1,
    },
    {
      type: "place",
      cost: 1,
    },
  ],
};

export var uneducatedAdult: Classification = {
  id: "uneducatedAdult",
  name: "Uneducated Adult",
  description: "Adult without any tertiary training.",
  icon: "person.png",
  autonomous: true,
  layer: "SURFACE",
  weight: 90e3,
  maxContentWeight: 2e3,
  operationRequirements: [],
  containers: [],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
    LAND: 1,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
    ROAD: 1.2,
    RAIL: 1.1,
  },
  actions: [
    {
      type: "take",
      cost: 1,
    },
    {
      type: "place",
      cost: 1,
    },
    {
      type: "transform",
      name: "Become Truck Driver",
      cost: 10 * 7 * 24 * 60 * 60 * 1000,
      consumes: [],
      result: truckDriver,
    },
    {
      type: "transform",
      name: "Become Haul Truck Driver",
      cost: 12 * 7 * 24 * 60 * 60 * 1000,
      consumes: [],
      result: haulTruckDriver,
    },
  ],
};

var twoPersonVehicle: Container = {
  id: "twoPersonVehicle",
  classifications: [uneducatedAdult, truckDriver, haulTruckDriver],
  max: 2,
};

var haulTruckTray: Container = {
  id: "haulTruckTray",
  classifications: [coal, ironOre],
  max: 1,
};

export var haulTruck: Classification = {
  id: "haulTruck",
  name: "Haul Truck",
  description: "https://en.wikipedia.org/wiki/Haul_truck",
  icon: "haul-truck.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 200e6,
  maxContentWeight: 400e6,
  operationRequirements: [haulTruckDriver],
  containers: [twoPersonVehicle, haulTruckTray],
  fuel: diesel,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
    LAND: 1,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
    ROAD: 1.5,
  },
  actions: [
    {
      type: "place",
      cost: 10 * 60,
    },
  ],
};

export var flatbedTruck: Classification = {
  id: "flatbedTruck",
  name: "Flatbed Truck",
  description: "https://en.wikipedia.org/wiki/Flatbed_truck",
  icon: "flatbed-truck.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 5e6,
  maxContentWeight: 2e6,
  operationRequirements: [truckDriver],
  containers: [twoPersonVehicle],
  fuel: diesel,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
    LAND: 1,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
    ROAD: 1.5,
  },
  actions: [
    {
      type: "place",
      cost: 10 * 60,
    },
  ],
};

var mediumWorkplace: Container = {
  id: "mediumWorkplace",
  classifications: [uneducatedAdult, truckDriver, haulTruckDriver],
  max: 20,
};

var largeCarpark: Container = {
  id: "largeCarpark",
  classifications: [flatbedTruck, haulTruck],
  max: 20,
};

export var truckFactory: Classification = {
  id: "truckFactory",
  name: "Truck Factory",
  description: "Factory that produces various forms of trucks.",
  icon: "truck-factory.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 1e10,
  maxContentWeight: 2e9,
  operationRequirements: [],
  containers: [
    mediumWorkplace,
    largeCarpark
  ],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [
    {
      type: "build",
      name: "Build Flatbed Truck",
      cost: 3 * 24 * 60 * 60 * 1000,
      consumes: [steel],
      result: [flatbedTruck],
    },
    {
      type: "build",
      name: "Build Haul Truck",
      cost: 4 * 24 * 60 * 60 * 1000,
      consumes: [steel],
      result: [haulTruck],
    },
  ],
};

export var oilRefinery: Classification = {
  id: "oilRefinery",
  name: "Oil Refinery",
  description: "https://en.wikipedia.org/wiki/Oil_refinery",
  icon: "oil-refinery.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 1e10,
  maxContentWeight: 5e10,
  operationRequirements: [],
  containers: [
    mediumWorkplace,
    largeCarpark
  ],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [
    {
      type: "build",
      name: "Process Oil",
      cost: 1 * 24 * 60 * 60 * 1000,
      consumes: [coal, coal, crudeOil, crudeOil, crudeOil],
      result: [diesel],
    },
  ],
};

export var steelMill: Classification = {
  id: "steelMill",
  name: "Steel Mill",
  description: "https://en.wikipedia.org/wiki/Steel_mill",
  icon: "steel-mill.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 1e10,
  maxContentWeight: 5e10,
  operationRequirements: [],
  containers: [
    mediumWorkplace,
    largeCarpark
  ],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [
    {
      type: "build",
      name: "Produce Steel",
      cost: 1 * 24 * 60 * 60 * 1000,
      consumes: [ironOre, coal],
      result: [steel],
    },
  ],
};

export var constructionSite: Classification = {
  id: "constructionSite",
  name: "Construction Site",
  description: "",
  icon: "construction-site.png",
  autonomous: false,
  layer: "SURFACE",
  weight: 1e10,
  maxContentWeight: 5e10,
  operationRequirements: [],
  containers: [
    mediumWorkplace,
    largeCarpark
  ],
  fuel: null,
  terrain: {
    ...DEFAULT_TERRAIN_COSTS,
  },
  infrastructure: {
    ...DEFAULT_INFRASTRUCTURE_COSTS,
  },
  actions: [
    {
      type: "transform",
      name: "Build Truck Factory",
      cost: 2 * 7 * 24 * 60 * 60 * 1000,
      consumes: [steel, steel, steel, steel, steel],
      result: truckFactory,
    },
    {
      type: "transform",
      name: "Build Oil Refinery",
      cost: 3 * 7 * 24 * 60 * 60 * 1000,
      consumes: [steel, steel, steel, steel, steel],
      result: oilRefinery,
    },
    {
      type: "transform",
      name: "Build Steel Mill",
      cost: 3 * 7 * 24 * 60 * 60 * 1000,
      consumes: [steel, steel, steel, steel, steel],
      result: steelMill,
    },
  ],
};
