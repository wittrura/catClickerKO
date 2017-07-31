var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/cat-clicker-1-small.jpg');
  this.imgAttribution = ko.observable('https://www.flicker.com');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };


  this.catLevel = ko.computed(function(){
    if (this.clickCount() < 10) {
      return 'Newborn';
    } else if (this.clickCount() < 20) {
      return 'Infant';
    } else {
      return 'Kitty';
    }
  }, this);
}

ko.applyBindings(new ViewModel());
