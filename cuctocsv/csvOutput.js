
import { CucumberHeader } from './cucumberHeader.js';
import { CucumberRow } from './cucumberRow.js';

export class CsvOutput {

  constructor(headerStr, tailArr, expandRows = false) {
    this.header = new CucumberHeader(headerStr).value;
    if (expandRows) {
      const singleRow = new CucumberRow(tailArr[0]);
      this.rows = singleRow.maxVals().map(i => this.getCsvRowFromCucumberRow(i, singleRow.value));
    } else {
      this.rows = tailArr.map((rowArr, index) => this.getCsvRowFromCucumberRow(index, new CucumberRow(rowArr).value));
    }
    this.value = [this.header, ...this.rows].join('\n');
  }

  getCsvRowFromCucumberRow(index, rowArr) {
    return rowArr.map(i => {
      const rowValues = i.split(',');
      return rowValues[index] === undefined || rowValues[index] === '' ? rowValues[0] : rowValues[index];
    }
    );
  }
}