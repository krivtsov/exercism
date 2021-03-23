class SpaceAge {
  seconds: number;

  constructor(age: number) {
    this.seconds = age;
  }

  getAge = (planetYear: number) => +(this.seconds / 60 / 60 / 24 / 365.25 / planetYear).toFixed(2);

  onEarth = () => {
    const earthYear = 1;
    return this.getAge(earthYear);
  };

  onMercury() {
    const mercuryYear = 0.2408467;
    return this.getAge(mercuryYear);
  }

  onVenus = () => {
    const venusYear = 0.61519726;
    return this.getAge(venusYear);
  };

  onMars() {
    const marsYear = 1.8808158;
    return this.getAge(marsYear);
  }

  onJupiter() {
    const jupiterYear = 11.862615;
    return this.getAge(jupiterYear);
  }

  onSaturn() {
    const saturnYear = 29.447498;
    return this.getAge(saturnYear);
  }

  onUranus() {
    const uranusYear = 84.016846;
    return this.getAge(uranusYear);
  }

  onNeptune() {
    const neptuneYear = 164.79132;
    return this.getAge(neptuneYear);
  }
}

export default SpaceAge;
