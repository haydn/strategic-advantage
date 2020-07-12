type ID = string;

type int = number;

type Timestamp = string;

type Thunk<T> = T | (() => T);

export type Terrain = "LAND" | "RIVER" | "SHALLOW_WATER" | "DEEP_WATER";

export type Infrastructure = "ROAD" | "RAIL";

export type Resource = "CRUDE_OIL" | "NATURAL_GAS" | "IRON_ORE";

export type Layer = "SURFACE" | "SKY";

export interface Tile {
  x: int;
  y: int;
  terrain: Terrain;
  infrastructure: {
    [I in Infrastructure]: Boolean;
  };
  resources: {
    // Weight in grams.
    [R in Resource]: int;
  };
  units: {
    [L in Layer]: Unit | null;
  };
}

export interface Unit {
  id: ID;
  // If this unit is autonomous, is the player who has "locked" this unit.
  // Another player may be able to seize control, with effort.
  // Null indicates the unit is not "locked" and can be manipulated by any player.
  owner: Player | null;
  classification: Classification;
  contents: Unit[];
  creationDate: Timestamp;
}

export interface AutonomousUnit extends Unit {
  owner: Player;
  // The magic.
  watermark: Timestamp;
}

export interface Player {
  id: ID;
}

export interface Classification {
  id: ID;
  name: string;
  description: string;
  icon: string;
  // If true, this unit must always have an owner and cannot have its ownership transfered between players.
  autonomous: Boolean;
  // Layer this unit operates on.
  layer: Layer;
  // Empty weight in grams.
  weight: int;
  // Maximum weight of all content in grams.
  maxContentWeight: int;
  // Units that must be contained within this unit for it to operate.
  operationRequirements: Classification[];
  //
  containers: Container[];
  // Null indicates the unit cannot move.
  // An empty array indicates the unit moves without consuming fuel.
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
    [T in Terrain]: int | null;
  };
  // Same as terrain, but for infrastructure. Infrastructure takes precedence over terrain.
  infrastructure: {
    // Time in milliseconds.
    [I in Infrastructure]: int | null;
  };
  actions: Action[];
}

export interface Container {
  id: ID;
  // Units allowed in this container.
  classifications: Classification[];
  // Maximum number of units.
  max: int;
}

export type Action = TakeAction | PlaceAction | BuildAction | TransformAction;

export type TakeAction = {
  type: "take";
  // Time in milliseconds.
  cost: int;
};

export type PlaceAction = {
  type: "place";
  // Time in milliseconds.
  cost: int;
};

export type BuildAction = {
  type: "build";
  name: string;
  // Time in milliseconds.
  cost: int;
  consumes: Classification[];
  result: Classification[];
};

export type TransformAction = {
  type: "transform";
  name: string;
  // Time in milliseconds.
  cost: int;
  consumes: Classification[];
  result: Classification;
};
