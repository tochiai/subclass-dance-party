var RotatingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.css("height", this._nativeHeight*2);
  // this.$node.css("width", this._nativeWidth/2);
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  var ofs = this.$node.offset();

  this.$node.animate({deg: 45},
    {
      duration: this._timeBetweenSteps/2,
      step: (function(now) {
          this.$node.css({transform: 'rotate(' + now + 'deg)'});
      }).bind(this),
      complete: (function(){
        this.$node.animate({deg: -45}, {
          duration: this._timeBetweenSteps/2,
          step: (function(now) {
            this.$node.css({transform: 'rotate(' + now + 'deg)'});
          }).bind(this)
        });
      }).bind(this)
    }
  );
};
