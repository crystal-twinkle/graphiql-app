export function safelyParseJson(value: string) {
  let parsedValue = {};
  try {
    parsedValue = JSON.parse(value);
  } catch (error) {
    parsedValue = {};
  }

  return parsedValue;
}
