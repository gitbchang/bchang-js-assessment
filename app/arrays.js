exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var newArray = arr.filter(function(e){
      return e !== item;
    });

    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    // create a new Array for splice indexes
    var newArray = [];
    // get all the splice indexees
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        newArray.push(i);
      }
    }
    // go through the splice index array and remove item
    for(var j = 0; j < newArray.length; j++){
      arr.splice(newArray[j], 1);      
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
