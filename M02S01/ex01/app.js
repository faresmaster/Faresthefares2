class Car {
  topSpeed = 160;
  topReversespeed = -50;
  areLightsOn = false;
  isTrunkOpen = false;


  constructor(
    make,
    color,
    wheels,
    speed,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.isTrunkOpen = false;
    this.areLightsOn = false
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(this.speed);
  }
  setSpeed(speed) {
    if (speed > this.stopped) {
      this.speed = this.topSpeed;
      return;
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed
      return;
    }

    this.speed = speed;


  }
  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOff();
    this.turnLightsOn();
    window.setTimeout(() => {
      this.turnLightsOff();
    }, 5000);
  }

}


var audi = new Car('Audi', 'black', 4, 50);

let Opel = new Car('opel', 'red', 4, 80);

let cars = [audi, opel];

cars.forEach((car) => {
  console.log(`the machine is a make of ${car.make}and moves at a speed of ${car.speed}`)
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();

});