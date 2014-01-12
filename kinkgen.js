(function($) {
  'use strict';

  // Fisher-Yates array shuffling algorithm from Wikipedia
  function fisherYates(source) {
    var a = [];
    a[0] = source[0];
    var l = source.length;
    for (var i = 1; i < l; ++i) {
      var j = Math.floor(Math.random() * (i + 1));
      a[i] = a[j];
      a[j] = source[i];
    }
    return a;
  }

  // gets the pinned or random value from a combo box
  function get(indices, array) {
    var ret = [];
    var shuffledArray = fisherYates(array);
    var length = indices.length;
    for (var i = 0; i < length; ++i) {
      var selectedIndex = indices[i];
      ret[ret.length] = (selectedIndex === 0 ? shuffledArray[i] : array[selectedIndex - 1]);
    }
    return ret;
  }

  $.kinkgen = function(charIndices, kinkIndices, chars, kinks) {
    var charsString = get(charIndices, chars).join('\n  ');
    var kinksString = get(kinkIndices, kinks).join('\n  ');
    return 'Characters:\n  ' + charsString + '\n\nKinks:\n  ' + kinksString;
  };
}(jQuery));
