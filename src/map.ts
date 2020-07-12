import { Tile } from "./types.js";
import { haulTruck, diesel } from "./classifications.js";

const DEFAULT_INFRASTRUCTURE = {
  ROAD: false,
  RAIL: false
};

const DEFAULT_RESOURCES = {
  CRUDE_OIL: 0, // 10000 - 15000 tonnes = good oil well
  NATURAL_GAS: 0,
  IRON_ORE: 0
};

const DEFAULT_UNITS = {
  SURFACE: null,
  SKY: null
};

const map: Tile[] = [
  {
    x: 0,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS,
      SURFACE: {
        id: "U1",
        owner: null,
        classification: haulTruck,
        watermark: "2020-04-30T20:34:42Z",
        contents: [
          {
            id: "U2",
            owner: null,
            classification: diesel,
            watermark: "2020-04-22T02:11:21Z",
            contents: []
          }
        ]
      }
    }
  },
  {
    x: 1,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 2,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 3,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 4,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 5,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 6,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 7,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 8,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 9,
    y: 0,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 0,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 1,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 2,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 3,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 4,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 5,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 6,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 7,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 8,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 9,
    y: 1,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 0,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 1,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 2,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 3,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 4,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 5,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 6,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 7,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 8,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  },
  {
    x: 9,
    y: 2,
    terrain: "LAND",
    infrastructure: {
      ...DEFAULT_INFRASTRUCTURE
    },
    resources: {
      ...DEFAULT_RESOURCES
    },
    units: {
      ...DEFAULT_UNITS
    }
  }
];

export default map;
