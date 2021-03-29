module.exports = function transform(arr) {
  let result = [];

  if({}.toString.call(arr) != '[object Array]') {
    throw Error('THROWN');
  }

  arr.forEach((cur, ind) => {
    if(cur == '--discard-prev') {
      if(arr[ind - 1] == result[result.length - 1]) {
        result.pop();
      }
    }
    else if(cur == '--double-next') {
      if(arr[ind + 1]) {
        result.push(arr[ind + 1]);
      }
    }
    else if(cur == '--double-prev') {
      if(arr[ind - 1] && arr[ind - 1] == result[result.length - 1]) {
        result.push(arr[ind - 1]);
      }
    }
    else {
      if(cur != '--discard-next') {
        if(arr[ind - 1] != '--discard-next') {
          result.push(cur);
        }
      }
    }
  });

  return result;
};
