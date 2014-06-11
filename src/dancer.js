var dancerImgArr = [
  "1402386620_choco_cupcake.png",
  "1402386654_rainbow_cupcake.png",
  "1402386645_pinky_cupcake.png",
  "1402386663_cyan_cupcake.png",
  "1402386650_purple_cupcake.png",
  "1402386668_red_cupcake.png"
]; // All images must be 128x128ish

var chooseDancerImg = function() {
  return dancerImgArr[Math.floor(Math.random() * dancerImgArr.length)];
};

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this._nativeWidth = 128;
  this._nativeHeight = 128;
  this._bearingToRight  = 30 - (60 * Math.random());
  this._bearingDownward = 30 - (60 * Math.random());

  var dancerImg = chooseDancerImg();
  this.$node = $('<img class="dancer" src="img/' + dancerImg + '" alt="' + dancerImg + '"/>');

this._timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  $('body').append(this.$node);
  this.step();
};
// Dancer.prototype.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.setTop(top);
//     this.$node.css(styleSettings);
//   };

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.setTop(top);
  this.setLeft(left);
  this.$node.css({ left:left , top:top });
};

Dancer.prototype.setTop = function(top){
  // top  = Math.floor(top);
  this._masterTop = top;
};

Dancer.prototype.setLeft = function(left){
  // left  = Math.floor(left);
  this._masterLeft = left;
};

Dancer.prototype.roam = function(){
  var rangeOnLeft = this._masterLeft-2;
  var rangeAbove = this._masterTop-2;
  var rangeOnRight = $('body').width()-this._masterLeft-130;
  var rangeBelow = $('body').height()-this._masterTop-130;
  var rHoriz = Math.random() *  (rangeOnLeft + rangeOnRight);
  this._bearingToRight += 50*(rHoriz - rangeOnLeft)/rangeOnLeft;
  var rVert  = Math.random() *  (rangeAbove  + rangeBelow);
  this._bearingDownward += 50*(rVert - rangeBelow)/rangeBelow;
  // this.setPosition(
  //   // this._masterLeft + this._bearingRight,
  //   // this._masterTop + this._bearingDownward
  // );
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
  this.roam();
};

Dancer.prototype.lineUpLeft = function() {
  this.setLeft(0);
};
