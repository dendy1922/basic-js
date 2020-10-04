module.exports = function repeater(str, options) {
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let repeatTimes = options.repeatTimes || 1;

  let value = (str === null) ? "null" : str.toString();
  let additionSeparator = (options.additionSeparator === undefined) ? "|" : (options.additionSeparator === null) ? "null" : options.additionSeparator.toString();
  let addition = (options.addition === undefined) ? "" : (options.addition === null) ? "null" : options.addition.toString();
  let separator = (options.separator === undefined) ? "+" : (options.separator === null) ? "null" : options.separator.toString();


  let temp = [];
  let tempResult = "";
  let resultArr = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    temp.push(addition)
  }
  tempResult = value + temp.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(tempResult)
  }

  return resultArr.join(separator);
};
