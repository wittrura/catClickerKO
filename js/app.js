var Cat = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/cat-clicker-1-small.jpg');
  this.imgAttribution = ko.observable('https://www.flicker.com');
  this.nicknames = ko.observableArray([
    'Mittens',
    'Bruiser',
    'Gadnuk Breaker of Worlds'
  ]);

  this.catLevel = ko.computed(function(){
    var catLevel;
    if (this.clickCount() < 10) {
      catLevel = 'Newborn';
    } else if (this.clickCount() < 20) {
      catLevel = 'Infant';
    } else {
      catLevel = 'Kitty';
    }
    return catLevel;
  }, this);
}

var ViewModel = function () {
  var self = this;

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
