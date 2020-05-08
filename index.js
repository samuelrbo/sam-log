require('node-json-color-stringify');
const moment = require('moment');

const TYPES = require('./constants/types');
const COLORS = require('./constants/colors');

const log = (msg, type = TYPES.INFO, dateFormat = 'YYYY-MM-DD hh:mm:ss', rreturn = false) => {
  if (typeof msg === 'object') {
    msg = `\n${JSON.colorStringify(msg, null, 2)}`;
  }

  const fgColorTime = COLORS.FgYellow;
  const rColor = COLORS.Reset;

  let fgColorType;

  switch (type) {
    case TYPES.SUCCESS:
      fgColorType = COLORS.FgGreen;
      break;
    case TYPES.DEBUG:
    case TYPES.CONFIG:
      fgColorType = COLORS.FgBlue;
      break;
    case TYPES.INFO:
      fgColorType = COLORS.FgCyan;
      break;
    case TYPES.WARN:
      fgColorType = COLORS.FgMagenta;
      break;
    case TYPES.FAIL:
    case TYPES.ERROR:
      fgColorType = COLORS.BgRed;
      break;
  }

  const logDate = moment().format(dateFormat);
  const formattedMsg = `[${fgColorTime}${logDate}${rColor}][${fgColorType}${type}${rColor}] ${msg}`;

  if (rreturn) return formattedMsg;
  console.log(formattedMsg);
}

module.exports = {
  TYPES,
  COLORS,
  log
}
