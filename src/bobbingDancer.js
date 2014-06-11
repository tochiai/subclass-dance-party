var BobbingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css("height", this._nativeHeight*2);
  this.$node.css("width", this._nativeWidth/2);
};
  BobbingDancer.prototype = Object.create(Dancer.prototype);
  BobbingDancer.prototype.constructor = BobbingDancer;

  BobbingDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    this.$node.animate(
      {height: ''+this._nativeHeight*2+'px',
        width: ''+this._nativeHeight/2+'px',
        top:  ''+( this._masterTop  - this._nativeHeight / 2)+'px',
        left: ''+( this._masterLeft + this._nativeWidth  / 2)+'px'
      },
      this._timeBetweenSteps/2,
      'swing',
      (function(){
        this.$node.animate(
          {height: ''+this._nativeHeight/2+'px',
            width: ''+this._nativeHeight*2+'px',
            top:  ''+( this._masterTop  + this._nativeHeight / 2)+'px',
            left: ''+( this._masterLeft - this._nativeWidth  / 2)+'px'
          },
          this._timeBetweenSteps/2,
          'swing'
        );
      }).bind(this)
    );
  };
