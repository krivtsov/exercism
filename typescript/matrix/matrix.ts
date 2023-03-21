export class Matrix {
  #rows: number[][];
  #columns: number[][];

  constructor(matrix: string) {
    this.#rows = matrix.split('\n').map((val: string): number[] => {
      const stringArr = val.split(' ');
      return stringArr.map((elem) => parseInt(elem, 10));
    });

    const lengthMatrix = this.#rows.length;
    const columns: number[][] = [];
    for (let i = 0; i < lengthMatrix; i++) {
      columns[i] = new Array(lengthMatrix);
    }
    for (let i = 0; i < lengthMatrix; i++) {
      for (let j = 0; j < lengthMatrix; j++) {
        columns[j][i] = this.#rows[i][j];
      }
    }
    this.#columns = columns;
  }

  get rows(): number[][] {
    return this.#rows;
  }

  get columns(): number[][] {
    return this.#columns;
  }
}
