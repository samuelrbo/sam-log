const { TYPES } = require('../index');

test('Is type Success', () => {
  expect(TYPES.SUCCESS).toBe('SUCCESS');
});

test('Is type Config', () => {
  expect(TYPES.CONFIG).toBe('CONFIG');
});

test('Is type Debug', () => {
  expect(TYPES.DEBUG).toBe('DEBUG');
});

test('Is type Info', () => {
  expect(TYPES.INFO).toBe('INFO');
});

test('Is type Warn', () => {
  expect(TYPES.WARN).toBe('WARN');
});

test('Is type Error', () => {
  expect(TYPES.ERROR).toBe('ERROR');
});

test('Is type Fail', () => {
  expect(TYPES.FAIL).toBe('FAIL');
});
