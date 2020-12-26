export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw 'At least two colors need to be present';
    }
    this.colors = colors;
  }

  value = (): number | string => {
    const colors = this.colors;

    const colorsDict: { [key: string]: number } = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9,
    };

    const firstColor: string = colors[0];
    const secondColor: string = colors[1];

    return colorsDict[firstColor] * 10 + colorsDict[secondColor];
  };
}
