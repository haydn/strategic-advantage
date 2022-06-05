export interface Tile {
  id: ID;
  x: number;
  y: number;
  terrain: Terrain;
  infrastructure: {
    [I in Infrastructure]: boolean;
  };
  resources: {
    // Weight in grams.
    [R in Resource]: number;
  };
}

export type ID = string;

export type Box = [[number, number], [number, number]];

export enum Terrain {
  LAND = "land",
  RIVER = "river",
  SHALLOW_WATER = "shallow_water",
  DEEP_WATER = "deep_water",
}

export enum Infrastructure {
  ROAD = "road",
  RAIL = "rail",
}

export enum Resource {
  CRUDE_OIL = "crude_oil",
  NATURAL_GAS = "natural_gas",
  IRON_ORE = "iron_ore",
}

export enum Layer {
  SURFACE = "surface",
  SKY = "sky",
}

export interface Unit<Autonomous extends boolean = false> {
  classification: Classification<Autonomous>;
  id: ID;
  position: [[number, number], [number, number]];
  // If the unit is autonomous, this is the player who controls it. An
  // autonomous unit cannot be transferred to another player.
  //
  // If this unit is not autonomous, this is the player who has "locked" this
  // unit. Another player may be able to seize control, with effort. Null
  // indicates the unit is not "locked" and can be manipulated by any player.
  owner: Autonomous extends true ? Player : Player | null;
  creationDate: Timestamp;
  // This is the magic.
  //
  // Every time an autonomous unit performs an action it costs that unit
  // time. Instead of keeping track of how much time the unit has available and
  // constantly updating, we instead keep track of this "watermark" — a
  // timestamp indicating where a units is "up to". Each time a unit performs
  // an action the watermark is incremented by the duration of that action.
  //
  // We can calculate how much time a unit has available like this:
  //
  //   min((current time) - (watermark), (maximum allowed available time))
  //
  // If a unit has exceeded the maximum allowed available time, that needs to
  // be taken into consideration when incrementing the watermark.
  watermark: Autonomous extends true ? Timestamp : undefined;
  contents: Unit[];
}

export interface Player {
  id: ID;
}

type Timestamp = string;

export interface Classification<Autonomous extends boolean = false> {
  id: ID;
  name: string;
  description: string;
  icon: string;
  // If true, this unit must always have an owner and cannot have its ownership transferred between players.
  autonomous: Autonomous;
  // Layer this unit operates on. Unit that can operate on multiple layers
  // (such as helicopters) should me modelled as 2 separate units and a transform operation should be used to 
  layer: Layer;
  // Empty weight in grams.
  weight: number;
  // Maximum weight of all content in grams.
  maxContentWeight: number;
  // Units that must be contained within this unit for it to operate.
  operationRequirements: Classification[];
  //
  containers: Container[];
  // Null indicates the unit cannot move.
  fuel: Classification | null;

  // Number of moves per unit of fuel.
  // fuelConversionRatio: int;
  // Maximum number of moves that can be made after refuelling to the max.
  // maxMoves: int;

  // The amount of time it takes to travel over 10m of each type of terrain.
  // 0 indicates the unit can be placed on the terrain, but cannot move on the terrain.
  // Null indicates the unit can neither move on the terrain nor be placed no the terrain.
  terrain: {
    // Time in milliseconds.
    [T in Terrain]: number | undefined;
  };
  // Same as terrain, but for infrastructure. Infrastructure takes precedence over terrain.
  infrastructure: {
    // Time in milliseconds.
    [I in Infrastructure]: number | undefined;
  };
  actions: Action[];
}

export interface Container {
  id: ID;
  // Units allowed in this container.
  classifications: Classification[];
  // Maximum number of units.
  max: number;
}

export type Action = TakeAction | PlaceAction | BuildAction | TransformAction;

export type TakeAction = {
  type: "take";
  // Time in milliseconds.
  cost: number;
};

export type PlaceAction = {
  type: "place";
  // Time in milliseconds.
  cost: number;
};

export type BuildAction = {
  type: "build";
  name: string;
  // Time in milliseconds.
  cost: number;
  consumes: Classification[];
  result: Classification[];
};

export type TransformAction = {
  type: "transform";
  name: string;
  // Time in milliseconds.
  cost: number;
  consumes: Classification[];
  result: Classification[];
};
