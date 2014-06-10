var dancerImgArr = [
  "1402386620_choco_cupcake.png",
  "1402386654_rainbow_cupcake.png",
  "1402386645_pinky_cupcake.png",
  "1402386663_cyan_cupcake.png",
  "1402386650_purple_cupcake.png",
  "1402386668_red_cupcake.png"
];

var chooseDancerImg = function() {
  return dancerImgArr[Math.floor(Math.random() * dancerImgArr.length)];
};


// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  var dancerImg = chooseDancerImg();
  this.$node = $('<img class="dancer" src="img/' + dancerImg + '" alt="' + dancerImg + '"/>');

this._timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  $('body').append(this.$node);
  this.$node.load(function() {
debugger;
this._nativeWidth = this.$node.width();
this._nativeHeight = this.$node.height();
  });
  this.step();
};
  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  };
