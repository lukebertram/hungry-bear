export class HungryBear {

  constructor(name){
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    this.foodLevel = 10;
    setInterval(()=> {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    if (!this.didYouGetEaten()){
      this.foodLevel = 10;
    }
  }
}
