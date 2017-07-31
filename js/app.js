var Cat = function (data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

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

  this.currentCat = ko.observable(new Cat(
    {
      clickCount: 0,
      name: 'Tabby',
      imgSrc: 'img/cat-clicker-1-small.jpg',
      imgAttribution: 'https://www.flicker.com',
      nicknames: [
        'Mittens',
        'Bruiser',
        'Gadnuk Breaker of Worlds'
      ]
    }
  ));

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
