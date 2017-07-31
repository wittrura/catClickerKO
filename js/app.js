var initialCats = [
  {
    name: 'Baxter',
    clickCount: 0,
    imgSrc: 'img/cat-clicker-1-small.jpg',
    imgAttribution: 'https://www.flicker.com',
    nicknames: [
      'Mittens',
      'Bruiser',
      'Gadnuk Breaker of Worlds'
    ]
  },
  {
    name: 'Mittens',
    clickCount: 0,
    imgSrc: 'img/cat-clicker-2-small.jpg',
    imgAttribution: 'https://www.flicker.com',
    nicknames: [
      'Mitzy',
      'M Dog',
    ]
  },
  {
    name: 'Tabby',
    clickCount: 0,
    imgSrc: 'img/cat-clicker-3-small.jpg',
    imgAttribution: 'https://www.flicker.com',
    nicknames: [
      'T-Train',
      'T Money',
      'T Pain'
    ]
  },
  {
    name: 'Bruiser',
    clickCount: 0,
    imgSrc: 'img/cat-clicker-4-small.jpeg',
    imgAttribution: 'https://www.flicker.com',
    nicknames: [
      'Brews',
      'Brutus',
    ]
  }
];

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

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(cat){
    self.catList.push( new Cat(cat) );
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.makeActiveCat = function(cat) {
    self.currentCat(cat);
  }
}

ko.applyBindings(new ViewModel());
