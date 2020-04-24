import { removeSpaces } from './shared.js';

export class CucumberHeader {
  //raw: | data_version | event_id                  | mean            | std_dev     | total_exposure | rate                         |
  //cucumberHeader:  ["16.0", "2847001,2847001,2847007", "-100,-101,102", "50,51,-52", "200,201,202", "1.00E-10,1.00E-10,1.00E-10"]

  constructor(str) {
    this.raw = str;
    this.value = removeSpaces(this.lineToArray(this.replacePipes(this.raw)));
  }

  replacePipes(str) {
    return str.replace(/\|/g, '');
  }

  lineToArray(str) {
    return str.replace(/ +/g, ' ').split(' ');
  }
}