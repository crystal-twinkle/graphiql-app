export interface ISchemaGql {
  types: ISchemaType[];
}

export interface IName {
  name: string;
}

export interface ISchemaType {
  description: string;
  enumValues: unknown;
  fields: ISchemaField[];
  inputFields: unknown;
  interfaces: {
    kind: string;
    name: string;
    ofType: unknown;
  }[];
  kind: string;
  name: string;
  possibleTypes: unknown;
}

export interface ISchemaField {
  args: unknown[];
  deprecationReason: string;
  description: string;
  isDeprecated: boolean;
  name: string;
  type: {
    kind: string;
    name: string;
    ofType: {
      kind: string;
      name: string;
      ofType: string;
    };
  };
}
