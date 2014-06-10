var BobbingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
  BobbingDancer.prototype = Object.create(Dancer.prototype);
  BobbingDancer.prototype.constructor = BobbingDancer;

  BobbingDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    this.$node.animate();
  };




// animate({height: height, width: width})
