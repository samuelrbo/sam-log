const { COLORS } = require('../index');

test('Is Terminal Reset Color', () => {
  expect(COLORS.Reset).toBe('\x1b[0m');
});

test('Is Terminal Foreground Color Green', () => {
  expect(COLORS.FgGreen).toBe('\x1b[32m');
});

test('Is Terminal Foreground Color Yellow', () => {
  expect(COLORS.FgYellow).toBe('\x1b[33m');
});

test('Is Terminal Foreground Color Blue', () => {
  expect(COLORS.FgBlue).toBe('\x1b[34m');
});

test('Is Terminal Foreground Color Cyan', () => {
  expect(COLORS.FgCyan).toBe('\x1b[36m');
});

test('Is Terminal Foreground Color Magenta', () => {
  expect(COLORS.FgMagenta).toBe('\x1b[35m');
});

test('Is Terminal Background Color Red', () => {
  expect(COLORS.BgRed).toBe('\x1b[41m');
});
