import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let bart = new HungryBear("Bart");

  beforeEach(function() {
    jasmine.clock().install();
    bart.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(bart.name).toEqual("Bart");
    expect(bart.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(bart.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    bart.foodLevel = 0;
    expect(bart.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(bart.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    expect(bart.foodLevel).not.toEqual(10);
    bart.feed();
    expect(bart.foodLevel).toEqual(10);
  });
});
