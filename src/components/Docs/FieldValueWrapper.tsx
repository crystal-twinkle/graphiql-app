import { CommonReactProps } from '../../models/common';
import { FieldTypeKind } from '../../models/schema';
import { ReactNode } from 'react';

interface FieldValueWrapperProps extends CommonReactProps {
  kind: FieldTypeKind;
}

export function FieldValueWrapper({ kind, children }: FieldValueWrapperProps): ReactNode {
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
