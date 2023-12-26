import { prettify } from '../../utils/prettifier';

describe('prettify function', () => {
  it('should prettify the code correctly', () => {
    const inputCode =
      '  __schema {\n' +
      '  \n' +
      '  \n' +
      '    types {\n' +
      '      name\n' +
      '    }\n' +
      '  }\n' +
      '}';
    const expectedOutput = '__schema {\n' + '  types {\n' + '    name\n' + '  }\n' + '}\n' + '}';

    const result = prettify(inputCode);

    expect(result).toEqual(expectedOutput);
  });
});
