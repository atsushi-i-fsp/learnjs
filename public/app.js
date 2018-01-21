'use strict';

var learnjs = {};

learnjs.triggerEvent = function(element, event) {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent(event, true, true);
  return element.dispatchEvent(evt);
}

learnjs.appOnReady = function() {
  window.onhashchange = function() {
    learnjs.showView(window.location.hash);
  }
  learnjs.showView(window.location.hash);
}

learnjs.problemView = function(problemNumber) {
  var title = 'Problem #' + problemNumber + ' Comming soon!';
  return $('<div class="problem-view">').text(title);

}

learnjs.showView = function(hash) {
  var routes = {
    '#problem': learnjs.problemView
  };

  var hashParts = hash.split('-');
  var viewFn = routes[hashParts[0]];
  if (viewFn) {
    $('.view-container').empty().append(viewFn(hashParts[1]));
  }
}


