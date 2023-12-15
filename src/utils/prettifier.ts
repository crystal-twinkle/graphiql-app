export function prettify(value: string) {
  function countSpacesAfterCursor(value: string, cursorPosition: number): number {
    let count = 0;

    for (let i = cursorPosition; i < value.length; i++) {
      const char = value[i];
      if (char === ' ') {
        count++;
      } else {
        break;
      }
    }

    return count;
  }

  function plaseIndents(value: string) {
    let openBracketsCount = 0;
    const res = value.split('');
    for (let i = 0; i < res.length; i += 1) {
      if (res[i] === '{') {
        openBracketsCount += 1;
      }
      if (res[i + 1] === '}') {
        openBracketsCount -= 1;
      }
      if (res[i] === '\n') {
        const spaces = countSpacesAfterCursor(value, i);
        if (spaces / 2 !== openBracketsCount) {
          res[i] = '\n' + '  '.repeat(openBracketsCount);
        }
      }
    }
    return res.join('');
  }

  value = value
    .replace(/ +/g, ' ')
    .replace(/ \(/g, '(')
    .replace(/\( /g, '(')
    .replace(/ \)/g, ')')
    .replace(/ :/, ':')
    .replace(/([^ ]):([^ ])/g, '$1: $2')
    .replace(/{/g, ' {\n')
    .replace(/}/g, '\n}')
    .replace(/\n+/g, '\n')
    .replace(/ +\n/g, '');

  return plaseIndents(value);
}

export function handleEnterPress(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  stateCallback: React.Dispatch<React.SetStateAction<string>>
) {
  function findIndent(value: string, cursorPosition: number) {
    let indent = 0;
    const chars = value.split('');
    for (let i = 0; i < cursorPosition; i += 1) {
      if (chars[i] === '{' || chars[i] === '(') {
        indent += 1;
      }
      if (chars[i] === '}' || chars[i] === ')') {
        indent -= 1;
      }
    }

    return indent;
  }

  if (event.key === 'Enter') {
    event.preventDefault();

    const cursorPosition = event.currentTarget.selectionStart;
    const indent = findIndent(event.currentTarget.value, cursorPosition);

    const isCursorBetweenBrackets =
      event.currentTarget.value[cursorPosition] === '}' ||
      event.currentTarget.value[cursorPosition] === ')';

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

export function completeBrackets(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
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

  if (event.key in pairs) {
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

export function handleTabPress(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  stateCallback: React.Dispatch<React.SetStateAction<string>>
) {
  if (event.key === 'Tab') {
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

export function manageCursor(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  stateCallback: React.Dispatch<React.SetStateAction<string>>
) {
  const actions = {
    Enter: handleEnterPress,
    Tab: handleEnterPress,
  };

  const key = event.key as keyof typeof actions;

  actions[key](event, stateCallback);
}
