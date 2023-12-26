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
  args: ISchemaFieldArgument[];
  deprecationReason: string;
  description: string;
  isDeprecated: boolean;
  name: string;
  type: {
    kind: FieldTypeKind;
    name: string;
    ofType: ISchemaOfType;
  };
}

export interface ISchemaFieldArgument {
  name: string;
  description: string;
  type: ISchemaOfType;
  defaultValue: string;
}

export interface ISchemaOfType {
  kind: string;
  name: string;
  ofType: string;
}

export enum FieldTypeKind {
  NON_NULL = 'NON_NULL',
  SCALAR = 'SCALAR',
  LIST = 'LIST',
}
