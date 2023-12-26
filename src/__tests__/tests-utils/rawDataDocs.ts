import { ISchemaType } from '../../models/schema';

const rawData = [
  {
    kind: 'OBJECT',
    name: 'Root',
    description: null,
    fields: [
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
] as ISchemaType[];

export default rawData;
