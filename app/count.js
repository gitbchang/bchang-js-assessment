exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var countArray = [];
    for(var i = start; i < end+1; i++){
      setTimeout(countArray.push(i), 100);
    }    
    var cancel = function(){
      
    };
    
    return countArray;    
  }
  
};
