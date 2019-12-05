let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  reverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOff = false;
  },
  flashlights: function () {
    this.turnLightsOff();
    setTimeout(function () {
      this.turnLightsOff()
    }, 800);
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (speed) {
    if (speed > this.speed) {
      this.speed = this.topSpeed;
      return;
    }
    if (speed < this.topReverseSpeed) {
      console.warn('Bounds exceed');
      this.speed = this.topReverseSpeed;
      return;
    }

    this.speed = speed;
  }
};

console.log(`The car is an ${car.make} and moves with a speed of ${car.speed} km/h`);
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
console.log(`the new speed is ${car.speed}`);
