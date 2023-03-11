enum Resistor {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

const mapCountZeroPrefix: Record<number, string> = {
  3: 'kilo',
  6: 'mega',
  9: 'giga',
};

const mapMetricPrefix: Record<string, number> = {
  kilo: 1000,
  mega: 1000000,
  giga: 1000000000,
};

export const decodedResistorValue = (resistor: string[]): string => {
  const firstNum = parseInt(Resistor[resistor[0] as unknown as Resistor], 10) * 10;
  const secondNum = parseInt(Resistor[resistor[1] as unknown as Resistor], 10);
  const countZero = parseInt(Resistor[resistor[2] as unknown as Resistor], 10);
  const multi = Math.pow(10, countZero);
  let result = (firstNum + secondNum) * multi;
  let ohms = 'ohms';

  for (let index = 9; index > 0; index -= 3) {
    const metricPrefix = mapCountZeroPrefix[index];
    if (result >= mapMetricPrefix[metricPrefix]) {
      const prefix = `${metricPrefix}${ohms}`;
      const reductionResult = result / mapMetricPrefix[metricPrefix];
      return `${reductionResult} ${prefix}`;
    }
  }

  return `${result} ${ohms}`;
};
