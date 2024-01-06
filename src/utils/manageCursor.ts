export function manageCursor(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  isFocused: boolean,
  stateCallback: React.Dispatch<React.SetStateAction<string>>
) {
  handleTabPress(event, isFocused, stateCallback);
  handleEnterPress(event, isFocused, stateCallback);
  completePairChars(event, isFocused, stateCallback);
}

function handleEnterPress(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  isFocused: boolean,
  stateCallback: React.Dispatch<React.SetStateAction<string>>
) {
  function findIndent(value: string, cursorPosition: number) {
    let indent = 0;
    const chars = value.split('');
    for (let i = 0; i < cursorPosition; i += 1) {
      if (chars[i] === '{' || chars[i] === '(' || chars[i] === '[') {
        indent += 1;
      }
      if (chars[i] === '}' || chars[i] === ')' || chars[i] === ']') {
        indent -= 1;
      }
    }

    return indent;
  }

  if (event.key === 'Enter' && isFocused) {
    event.preventDefault();

    const cursorPosition = event.currentTarget.selectionStart;
    const indent = findIndent(event.currentTarget.value, cursorPosition);

    const isCursorBetweenBrackets =
      event.currentTarget.value[cursorPosition] === '}' ||
      event.currentTarget.value[cursorPosition] === ')' ||
      event.currentTarget.value[cursorPosition] === ']';

    event.currentTarget.value =
      event.currentTarget.value.substring(0, cursorPosition) +
      '\n' +
      (isCursorBetweenBrackets
        ? '  '.repeat(indent) + '\n' + '  '.repeat(indent - 1)
        : '  '.repeat(indent)) +
      event.currentTarget.value.substring(cursorPosition);

    event.currentTarget.selectionStart = cursorPosition + indent * 2 + 1;
    event.currentTarget.selectionEnd = event.currentTarget.selectionStart;

    stateCallback(event.currentTarget.value);
  }
}

function completePairChars(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  isFocused: boolean,
  stateCallback: React.Dispatch<React.SetStateAction<string>>
) {
  const pairs: Record<string, string> = {
    '{': '}',
    '(': ')',
    '[': ']',
    "'": "'",
    '"': '"',
    '`': '`',
  };

  if (event.key in pairs && isFocused) {
    event.preventDefault();

    const cursorPosition = event.currentTarget.selectionStart;

    event.currentTarget.value =
      event.currentTarget.value.substring(0, cursorPosition) +
      `${event.key}${pairs[event.key]}` +
      event.currentTarget.value.substring(cursorPosition);

    event.currentTarget.selectionStart = cursorPosition + 1;
    event.currentTarget.selectionEnd = event.currentTarget.selectionStart;

    stateCallback(event.currentTarget.value);
  }
}

function handleTabPress(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  isFocused: boolean,
  stateCallback: React.Dispatch<React.SetStateAction<string>>
) {
  if (event.key === 'Tab' && isFocused) {
    event.preventDefault();
    const cursorPosition = event.currentTarget.selectionStart;

    event.currentTarget.value =
      event.currentTarget.value.substring(0, cursorPosition) +
      '  ' +
      event.currentTarget.value.substring(cursorPosition);

    event.currentTarget.selectionStart = cursorPosition + 2;
    event.currentTarget.selectionEnd = event.currentTarget.selectionStart;
  }
  stateCallback(event.currentTarget.value);
}
