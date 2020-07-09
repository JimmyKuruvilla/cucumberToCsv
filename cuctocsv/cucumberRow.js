import { removeSpacesInArr } from '../shared.js';

export class CucumberRow {
  //raw: | 16.0         | 2847001, 2847001, 2847007 | -100, -101, 102 | 50, 51, -52 | 200, 201, 202  | 1.00E-10, 1.00E-10, 1.00E-10 |
  //cucumberRow:  ["16.0", "2847001,2847001,2847007", "-100,-101,102", "50,51,-52", "200,201,202", "1.00E-10,1.00E-10,1.00E-10"]

  constructor(str) {
    this.raw = str;
    this.value = removeSpacesInArr(this.getRows(this.raw));
  }

  getRows(str) {
    return str.split('|');
  }

  maxVals() {
    const _maxVals = Math.max(...this.value.map(i => i.split(',').length));
    return [...Array(_maxVals).keys()];
  }
}