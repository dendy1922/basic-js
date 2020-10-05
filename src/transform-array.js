module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error()
  }
  let result = [].concat(arr);
  for (let i = 0; i < result.length; i++) {

    if (result[i] === '--discard-next') {
      if (i < result.length - 1) result.splice(i + 1, 1);
    }

    else if (result[i] === '--discard-prev') {
      if (i > 1) result.splice(i - 1, 1);
    }

    else if (result[i] === '--double-next') {
      if (i < result.length - 1) result.splice(i, 1, result[i + 1])
    }

    else if (result[i] === '--double-prev') {
      if (i > 1) result.splice(i, 1, result[i - 1]);
    }
  }
  return result.filter(x => ['--double-prev', '--double-next', '--discard-prev', '--discard-next'].indexOf(x) == -1);
}
