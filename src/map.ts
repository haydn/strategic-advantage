import {
  int,
  Tile,
  Terrain,
  Infrastructure,
  Resource,
  Layer,
} from "./types.js";
import { haulTruck, diesel } from "./classifications.js";

const DEFAULT_INFRASTRUCTURE: { [I in Infrastructure]: boolean } = {
  [Infrastructure.ROAD]: false,
  [Infrastructure.RAIL]: false,
};

const DEFAULT_RESOURCES: { [R in Resource]: int } = {
  [Resource.CRUDE_OIL]: 0, // 10000 - 15000 tonnes = good oil well
  [Resource.NATURAL_GAS]: 0,
  [Resource.IRON_ORE]: 0,
};

const DEFAULT_UNITS: { [L in Layer]: null } = {
  [Layer.SURFACE]: null,
  [Layer.SKY]: null,
};

const map: Tile[] = [
  {
    id: "1",
    x: 0,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    // units: {
    //   ...DEFAULT_UNITS,
    //   [Layer.SURFACE]: {
    //     classification: haulTruck,
    //     id: "U1",
    //     owner: null,
    //     creationDate: "",
    //     watermark: undefined,
    //     contents: [
    //       {
    //         classification: diesel,
    //         id: "U2",
    //         owner: null,
    //         contents: [],
    //         creationDate: "",
    //         watermark: undefined,
    //       },
    //     ],
    //   },
    // },
  },
  {
    x: 1,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    // units: {
    //   ...DEFAULT_UNITS,
    // },
  },
  {
    x: 2,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 3,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 4,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 5,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 6,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 7,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 8,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 9,
    y: 0,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 0,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 1,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 2,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 3,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 4,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 5,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 6,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 7,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 8,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 9,
    y: 1,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 0,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 1,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 2,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 3,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 4,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 5,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 6,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 7,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 8,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
  {
    x: 9,
    y: 2,
    terrain: Terrain.LAND,
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE,
    },
    resources: {
      ...DEFAULT_RESOURCES,
    },
    units: {
      ...DEFAULT_UNITS,
    },
  },
];

export default map;
