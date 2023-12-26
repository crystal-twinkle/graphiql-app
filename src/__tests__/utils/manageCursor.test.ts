import React from 'react';
import { vi } from 'vitest';
import { manageCursor } from '../../utils/manageCursor';

describe('manageCursor function', () => {
  it('should call handleTabPress on Tab key press', () => {
    const event = {
      key: 'Tab',
      preventDefault: vi.fn(),
      currentTarget: {
        selectionStart: 0,
        value: '',
      },
    };

    manageCursor(event as React.KeyboardEvent<HTMLTextAreaElement>, true, vi.fn());
  });

  it('should call handleEnterPress on Enter key press', () => {
    const event = {
      key: 'Enter',
      preventDefault: vi.fn(),
      currentTarget: {
        selectionStart: 0,
        value: '',
      },
    };

    manageCursor(event as React.KeyboardEvent<HTMLTextAreaElement>, true, vi.fn());
  });

  it('should call completePairChars on specific key press', () => {
    const event = {
      key: '{',
      preventDefault: vi.fn(),
      currentTarget: {
        selectionStart: 0,
        value: '',
      },
    };

    manageCursor(event as React.KeyboardEvent<HTMLTextAreaElement>, true, vi.fn());
  });
});
