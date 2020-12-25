class Gigasecond {
  fieldDate: Date;

  constructor(date: Date) {
    this.fieldDate = date;
  }

  date(): Date {
    const gigaSecond = 1000000000;
    return new Date(this.fieldDate.getTime() + (gigaSecond * 1000));
  }
}

export default Gigasecond;
