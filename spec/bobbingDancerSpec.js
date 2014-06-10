describe("bobbingDancer", function() {

  var bobbingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bobbingDancer = new BobbingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(bobbingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node bob", function() {
    sinon.spy(bobbingDancer.$node, 'animate');
    bobbingDancer.step();
    expect(bobbingDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bobbingDancer, "step");
      expect(bobbingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);


      expect(bobbingDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);


      expect(bobbingDancer.step.callCount).to.be.equal(2);
    });

    it("should call animate at least six times after calling step three times", function(){
      sinon.spy(bobbingDancer, "step");
      sinon.spy(bobbingDancer.$node, "animate");
      expect(bobbingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
debugger;
      expect(bobbingDancer.step.callCount).to.be.equal(3);
      expect(bobbingDancer.$node.animate.callCount).to.be.equal(6);
      clock.tick(timeBetweenSteps/3);
      expect(bobbingDancer.step.callCount).to.be.equal(3);
      expect(bobbingDancer.$node.animate.callCount).to.be.equal(6);
      clock.tick(timeBetweenSteps/3);
      expect(bobbingDancer.step.callCount).to.be.equal(3);
      expect(bobbingDancer.$node.animate.callCount).to.be.equal(7);
    });

  });

});
