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

    for(var i = 0; i < arr.length;i++){
      if(arr.indexOf(item) > -1){
        arr.splice(arr.indexOf(item), 1);
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        counter++;
      }
    }
    return counter;
  },

  duplicates: function(arr) {
    var duplicates = [];

    arr.forEach(function(element, index){
      // find if there is a duplicate or not
      if(arr.indexOf(element, index + 1) > -1){
        // find if the element is already in the duplicate array or not
        if(duplicates.indexOf(element) === -1){
          duplicates.push(element);
        }

      }
    });


    return duplicates;
  },

  square: function(arr) {
    for(var i = 0; i < arr.length; i++){
      var squared = Math.pow(arr[i], 2);
      arr.splice(i, 1, squared);
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var targetPositions = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        targetPositions.push(i);
      }
    }
    return targetPositions;
  }
};
