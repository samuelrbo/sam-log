const moment = require('moment');
const { TYPES, log } = require('../index');

const mockDateFormat = 'YYYY-MM-DD';
const mockDate = moment().format(mockDateFormat);

const originalConsole = global.console;

const returnConsoleMsg = () => {
  global.console.log = (msg) => {
    return msg;
  };
}

const resetConsole = () => {
  global.console.log = originalConsole.log;
}

test('Check green success stdout', () => {
  returnConsoleMsg();

  const expected = `[\x1b[33m${mockDate}\x1b[0m][\x1b[32mSUCCESS\x1b[0m] Success message`;
  const received = log('Success message', TYPES.SUCCESS, mockDateFormat, true);

  resetConsole();

  expect(received).toBe(expected);
});

test('Check blue debug stdout', () => {
  returnConsoleMsg();

  const expected = `[\x1b[33m${mockDate}\x1b[0m][\x1b[34mDEBUG\x1b[0m] Debug message`;
  const received = log('Debug message', TYPES.DEBUG, mockDateFormat, true);

  resetConsole();

  expect(received).toBe(expected);
});

test('Check blue config stdout', () => {
  returnConsoleMsg();

  const expected = `[\x1b[33m${mockDate}\x1b[0m][\x1b[34mCONFIG\x1b[0m] Config message`;
  const received = log('Config message', TYPES.CONFIG, mockDateFormat, true);

  resetConsole();

  expect(received).toBe(expected);
});

test('Check cyan info stdout', () => {
  returnConsoleMsg();

  const expected = `[\x1b[33m${mockDate}\x1b[0m][\x1b[36mINFO\x1b[0m] Info message`;
  const received = log('Info message', TYPES.INFO, mockDateFormat, true);

  resetConsole();

  expect(received).toBe(expected);
});

test('Check magenta warning stdout', () => {
  returnConsoleMsg();

  const expected = `[\x1b[33m${mockDate}\x1b[0m][\x1b[35mWARN\x1b[0m] Warning message`;
  const received = log('Warning message', TYPES.WARN, mockDateFormat, true);

  resetConsole();

  expect(received).toBe(expected);
});

test('Check red backgroud error stdout', () => {
  returnConsoleMsg();

  const expected = `[\x1b[33m${mockDate}\x1b[0m][\x1b[41mERROR\x1b[0m] Error message`;
  const received = log('Error message', TYPES.ERROR, mockDateFormat, true);

  resetConsole();

  expect(received).toBe(expected);
});

test('Check red backgroud fail stdout', () => {
  returnConsoleMsg();

  const expected = `[\x1b[33m${mockDate}\x1b[0m][\x1b[41mFAIL\x1b[0m] Fail message`;
  const received = log('Fail message', TYPES.FAIL, mockDateFormat, true);

  resetConsole();

  expect(received).toBe(expected);
});
