export function prettify(value: string, isResponse: boolean = false) {
  value = value
    .replace(/ +/g, ' ')
    .replace(/ \(/g, '(')
    .replace(/\( /g, '(')
    .replace(/ \)/g, ')')
    .replace(/ }/g, '}')
    .replace(/ ]/g, ']')
    .replace(/\) /g, ')')
    .replace(/ :/, ':')
    .replace(';', '')
    .replace(/{/g, '{\n')
    .replace(/\[/g, '[\n')
    .replace(/(?<!\s){/g, ' {')
    .replace(/},/g, '},\n')
    .replace(/",/g, '",\n')
    .replace(/,/g, ',\n')
    .replace(/}/g, '\n}')
    .replace(/]/g, '\n]')
    .replace(/ "/g, '"')
    .replace(/" /g, '"')
    .replace(/ '/g, "'")
    .replace(/' /g, "'")
    .replace(/([^ ]):([^ ])/g, '$1: $2')
    .replace(/\b[a-zA-Z_]+\b(?![ ]*[-:'(){[])/g, (match) => {
      if (isResponse) {
        return match;
      }
      return `${match}\n`;
    })
    .replace(/\n+/g, '\n')
    .replace(/ +\n/g, '');

  return placeIndents(value);
}

function countSpacesAfterCursor(value: string, cursorPosition: number): number {
  let count = 0;
  for (let i = cursorPosition; i < value.length; i += 1) {
    const char = value[i];
    if (char === ' ') {
      count += 1;
    } else {
      break;
    }
  }
  return count;
}

function placeIndents(value: string) {
  let lines = value.split('\n');
  lines = lines.map((line) => line.trim());
  value = lines.join('\n');

  let requiredIndent = 0;
  const char = value.split('');
  for (let i = 0; i < char.length; i += 1) {
    if (char[i] === '{' || char[i] === '[' || char[i] === '(') {
      requiredIndent += 1;
    }

    if (char[i + 1] === '}' || char[i + 1] === ']' || char[i + 1] === ')') {
      requiredIndent = Math.max(0, requiredIndent - 1);
    }

    if (char[i] === '\n') {
      const spacesAmount = countSpacesAfterCursor(value, i);
      if (spacesAmount / 2 !== requiredIndent) {
        char[i] = '\n' + '  '.repeat(requiredIndent);
      }
    }
  }

  return char.join('');
}
