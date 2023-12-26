import { ISchemaType } from '../../models/schema';

const rawData = [
  {
    kind: 'OBJECT',
    name: 'Root',
    description: null,
    fields: [
      {
        name: 'allFilms',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'FilmsConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'film',
        description: null,
        args: [
          {
            name: 'id',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'filmID',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'Film',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'allPeople',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'PeopleConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'person',
        description: null,
        args: [
          {
            name: 'id',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'personID',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'Person',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'allPlanets',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'PlanetsConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'planet',
        description: null,
        args: [
          {
            name: 'id',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'planetID',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'Planet',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'allSpecies',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'SpeciesConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'species',
        description: null,
        args: [
          {
            name: 'id',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'speciesID',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'Species',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'allStarships',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'StarshipsConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'starship',
        description: null,
        args: [
          {
            name: 'id',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'starshipID',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'Starship',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'allVehicles',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'VehiclesConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'vehicle',
        description: null,
        args: [
          {
            name: 'id',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'vehicleID',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'ID',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'Vehicle',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'node',
        description: 'Fetches an object given its ID',
        args: [
          {
            name: 'id',
            description: 'The ID of an object',
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'INTERFACE',
          name: 'Node',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'Planet',
    description:
      'A large mass, planet or planetoid in the Star Wars Universe, at the time of\n0 ABY.',
    fields: [
      {
        name: 'name',
        description: 'The name of this planet.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'String',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'diameter',
        description: 'The diameter of this planet in kilometers.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'rotationPeriod',
        description:
          'The number of standard hours it takes for this planet to complete a single\nrotation on its axis.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'orbitalPeriod',
        description:
          'The number of standard days it takes for this planet to complete a single orbit\nof its local star.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'gravity',
        description:
          'A number denoting the gravity of this planet, where "1" is normal or 1 standard\nG. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'String',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'population',
        description: 'The average population of sentient beings inhabiting this planet.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Float',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'climates',
        description: 'The climates of this planet.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'terrains',
        description: 'The terrains of this planet.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'surfaceWater',
        description:
          'The percentage of the planet surface that is naturally occurring water or bodies\nof water.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Float',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'residentConnection',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'PlanetResidentsConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'filmConnection',
        description: null,
        args: [
          {
            name: 'after',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'first',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: null,
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'PlanetFilmsConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'created',
        description: 'The ISO 8601 date format of the time that this resource was created.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'String',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'edited',
        description: 'The ISO 8601 date format of the time that this resource was edited.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'String',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'id',
        description: 'The ID of an object',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'ID',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [
      {
        kind: 'INTERFACE',
        name: 'Node',
        ofType: null,
      },
    ],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'PlanetResidentsConnection',
    description: 'A connection to a list of items.',
    fields: [
      {
        name: 'pageInfo',
        description: 'Information to aid in pagination.',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'PageInfo',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'edges',
        description: 'A list of edges.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'PlanetResidentsEdge',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'totalCount',
        description:
          'A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing "5" as the\nargument to "first", then fetch the total count so it could display "5 of 83",\nfor example.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'residents',
        description:
          'A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n"{ edges { node } }" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the "cursor" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull "{ edges { node } }" version should be used instead.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'Person',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'PlanetResidentsEdge',
    description: 'An edge in a connection.',
    fields: [
      {
        name: 'node',
        description: 'The item at the end of the edge',
        args: [],
        type: {
          kind: 'OBJECT',
          name: 'Person',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'cursor',
        description: 'A cursor for use in pagination',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'PlanetFilmsConnection',
    description: 'A connection to a list of items.',
    fields: [
      {
        name: 'pageInfo',
        description: 'Information to aid in pagination.',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'PageInfo',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'edges',
        description: 'A list of edges.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'PlanetFilmsEdge',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'totalCount',
        description:
          'A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing "5" as the\nargument to "first", then fetch the total count so it could display "5 of 83",\nfor example.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'films',
        description:
          'A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n"{ edges { node } }" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the "cursor" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull "{ edges { node } }" version should be used instead.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'Film',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'PlanetFilmsEdge',
    description: 'An edge in a connection.',
    fields: [
      {
        name: 'node',
        description: 'The item at the end of the edge',
        args: [],
        type: {
          kind: 'OBJECT',
          name: 'Film',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'cursor',
        description: 'A cursor for use in pagination',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'PlanetsConnection',
    description: 'A connection to a list of items.',
    fields: [
      {
        name: 'pageInfo',
        description: 'Information to aid in pagination.',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'PageInfo',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'edges',
        description: 'A list of edges.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'PlanetsEdge',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'totalCount',
        description:
          'A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing "5" as the\nargument to "first", then fetch the total count so it could display "5 of 83",\nfor example.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'planets',
        description:
          'A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n"{ edges { node } }" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the "cursor" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull "{ edges { node } }" version should be used instead.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'Planet',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'PlanetsEdge',
    description: 'An edge in a connection.',
    fields: [
      {
        name: 'node',
        description: 'The item at the end of the edge',
        args: [],
        type: {
          kind: 'OBJECT',
          name: 'Planet',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'cursor',
        description: 'A cursor for use in pagination',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'SpeciesConnection',
    description: 'A connection to a list of items.',
    fields: [
      {
        name: 'pageInfo',
        description: 'Information to aid in pagination.',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'PageInfo',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'edges',
        description: 'A list of edges.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'SpeciesEdge',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'totalCount',
        description:
          'A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing "5" as the\nargument to "first", then fetch the total count so it could display "5 of 83",\nfor example.',
        args: [],
        type: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'species',
        description:
          'A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n"{ edges { node } }" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the "cursor" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull "{ edges { node } }" version should be used instead.',
        args: [],
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: 'Species',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: 'SpeciesEdge',
    description: 'An edge in a connection.',
    fields: [
      {
        name: 'node',
        description: 'The item at the end of the edge',
        args: [],
        type: {
          kind: 'OBJECT',
          name: 'Species',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'cursor',
        description: 'A cursor for use in pagination',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
  {
    kind: 'OBJECT',
    name: '__Schema',
    description:
      'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
    fields: [
      {
        name: 'types',
        description: 'A list of all types supported by this server.',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'queryType',
        description: 'The type that query operations will be rooted at.',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'OBJECT',
            name: '__Type',
            ofType: null,
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'mutationType',
        description:
          'If this server supports mutation, the type that mutation operations will be rooted at.',
        args: [],
        type: {
          kind: 'OBJECT',
          name: '__Type',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'subscriptionType',
        description:
          'If this server support subscription, the type that subscription operations will be rooted at.',
        args: [],
        type: {
          kind: 'OBJECT',
          name: '__Type',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
      {
        name: 'directives',
        description: 'A list of all directives supported by this server.',
        args: [],
        type: {
          kind: 'NON_NULL',
          name: null,
          ofType: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Directive',
                ofType: null,
              },
            },
          },
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null,
  },
] as ISchemaType[];

export default rawData;
