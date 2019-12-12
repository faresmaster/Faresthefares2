class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed,
    topReverseSpeed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;

  }
  displaySpeed() {
    console.log(`the current speed is ${this.speed}`);
  }
  restrictSpeed(intendedSpeed) {
    if (intendedSpeed > this.topSpeed) {
      intendedSpeed = this.topSpeed;
    }

  if (intendedSpeed < this.topReverseSpeed) {
    intendedSpeed = this.topReverseSpeed;
  }

  return intendedSpeed;
}

  accelerate() {
    let intendedSpeed = this.speed + 1;

    this.speed = this.restrictSpeed(intendedSpeed);
    this.displaySpeed();
  }

  decelerate() {
    let intendedSpeed = this.speed - 1;

    this.speed = this.restrictSpeed(intendedSpeed);
    this.displaySpeed();
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(
    make,
    color,
    speed,
    topSpeed
  ) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(
    make,
    color,
    speed,
    topSpeed,
  ) {
    super(make, color, 2, speed, topSpeed, 0);
  }
}

let bike = new Bicycle ('pegas', 'red', 2, 8, 20);

