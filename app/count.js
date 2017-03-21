exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var countArray = [];
    for(var i = start; i < end+1; i++){
      countArray.push(i);
    }
    return countArray;
  }
};
