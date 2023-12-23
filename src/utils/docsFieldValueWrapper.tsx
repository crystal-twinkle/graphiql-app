import { FieldTypeKind } from '../models/schema.model';
import { ReactNode } from 'react';

export function valueWrapper(kind: FieldTypeKind, children: ReactNode): ReactNode {
  switch (kind) {
    case FieldTypeKind.NON_NULL: {
      return <>{children}!</>;
    }
    case FieldTypeKind.LIST: {
      return <>[{children}]</>;
    }
    default: {
      return children;
    }
  }
}
