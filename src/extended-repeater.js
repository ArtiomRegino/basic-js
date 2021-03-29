module.exports = function repeater(str, options) {
  let separator = !options.separator ? '+' : options.separator;
  let additionSeparator = !options.additionSeparator ? '|' : options.additionSeparator;
	let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  let addition = '';

  if(options.addition + '' && options.addition !== undefined) {
    addition += options.addition;

    if(additionSeparator && additionRepeatTimes > 1) {
      addition += additionSeparator;
    }
  }

  addition = addition.repeat(additionRepeatTimes);

  if(additionRepeatTimes > 1) {
    addition = addition.slice(0, -1 * additionSeparator.length);
  }

  return `${str}${addition}${separator}`.repeat(options.repeatTimes ? options.repeatTimes : 1).slice(0, -1 * separator.length);
};
  